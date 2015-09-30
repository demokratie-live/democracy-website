/*var SYSTEM = ( function( window, undefined ) {
    var instance = null;
    // revealing module pattern that handles initialization of our new module
    function init() {

        function back(){
            window.history.back();};
        function forward(){
            window.history.forward();};
        function reload(){
            SYSTEM.go_state(SYSTEM.cur_state(),true);
        };

        return {
            back : back,
            forward : forward
        };

    }
    if( ! instance ) {
        instance = new init();
    }
    return instance;
  
} )( window );*/

var system = null;

//mother object
function SYSTEM(endpoint,group,start_state,hash_change){
    system = this;
    
    this.LOG_START  = 0;
    this.LOG_INFO   = 1;
    this.LOG_ERROR  = 2;
    
    this.endpoint = endpoint;
    this.group = group;
    this.start_state = start_state;
    this.hash_change = hash_change;
    
    this.state = {};
    this.state_info = {};
    this.state_js = {};
    this.state_css = {};
    
    this.hashchange();
    $(window).bind('hashchange', this.hashchange);
}
SYSTEM.prototype.hashchange = function () {
    system.go_state(system.start_state);
    //user callback
    if(system.hash_change){
        system.hash_change(system.cur_state().split(';')[0].split('(')[0]);}
};
SYSTEM.prototype.handle_call_pages_page = function (html,entry,id,forced,cached,trycount) {
    var url = entry['url']+(window.location.search.substr(1) ? '&'+window.location.search.substr(1) : '' );
    if(!trycount){
        trycount = 0;}
    trycount++;
    if($(entry['div']).length){
        $(entry['div']).html(html);
        this.log_info('load page: '+id+entry['div']+' '+url+' - try '+trycount+' - success');
    } else {
        this.log_error('load page: '+id+entry['div']+' '+url+' - try '+trycount+' - div not found');
        //Try again
        if(trycount < 3){
            var tc = trycount;
            setTimeout(function() { system.handle_call_pages_page(html,entry,id,forced,cached,tc); },1000);
        }
        return;
    }
    //load css
    for(var i=0; i < entry['css'].length; i++){
        this.load_css(entry['css'][i],forced);}
    //load js
    var call_func = true;
    var loaded = 0;
    for(var i=0; i < entry['js'].length; i++){
        if(forced || !this.state_js[entry['js'][i]]){
            this.log_info('load js: '+entry['js'][i]+(forced ? ' - forced' : ''));
            $.getScript(entry['js'][i])
                .done(function(response, status, jqxhr) {
                    system.log_info('load js: '+status);
                    system.state_js[entry['js'][i]] = true;
                    if(loaded++ === entry['js'].length-1){
                        var fn = window[entry['func']];
                        if(call_func ){
                            if(typeof fn === 'function'){
                                call_func = false;
                                fn();
                                system.log_info('call func: '+entry['func']);
                            } else {
                                system.log_error('call func: '+entry['func']+' - fail');
                            }
                        }
                    }
                })
                .fail(function( jqxhr, settings, exception ) {
                    system.log_error( "Something went wrong"+exception );
                });
        } else {
            this.log_info('load js: '+entry['js'][i]+' - cached');
            if(loaded++ === entry['js'].length-1){
                var fn = window[entry['func']];
                if(call_func && typeof fn === 'function'){
                    call_func = false;
                    fn();
                    this.log_info('call func: '+entry['func']);
                } else {
                    this.log_error('call func: '+entry['func']+' - fail');
                }
            }
        }
    }
    //try 2 call function even when no js is loaded(substates do that)
    var fn = window[entry['func']];
    if(call_func && typeof fn === 'function'){
        call_func = false;
        fn();
        this.log_info('call func: '+entry['func']);
    }
    //update state
    this.state[entry['div']] = url;
}
SYSTEM.prototype.handle_call_pages_entry = function (entry,id,forced,cached) {
    var url = entry['url']+(window.location.search.substr(1) ? '&'+window.location.search.substr(1) : '' );
    //check loaded state of div - reload only if required
    if(forced || this.state[entry['div']] !== url || !$(entry['div']).length || $(entry['div']).html() === ''){
        //load page
        this.call_url(url,function(data){system.handle_call_pages_page(data,entry,id,forced,cached);},{},'html',true);
    } else {
        this.log_info('load page: '+id+entry['div']+' '+url+' - cached');
    }
}
//internal function to handle pagestate results
SYSTEM.prototype.handle_call_pages = function (data,id,forced,cached) {
    if(data['status']){        
        this.log_info('load pages: '+this.endpoint+'?call=pages&group='+this.group+'&state='+id+' - '+(cached ? 'cached ' : (forced ? 'forced' : 'success')));
        //state not found?
        if(data['result'].length === 0){
            this.log_error('load pages: '+this.endpoint+'?call=pages&group='+this.group+'&state='+id+' - state not found - redirecting to start state: '+this.start_state);
            if(id === this.start_state){
                this.log_error('load pages: '+this.endpoint+'?call=pages&group='+this.group+'&state='+id+' - start state not found - stop!');
                return;}
            this.load(this.start_state);
            return;}
        //cache state info data
        this.state_info[id] = data;
        //update history?
        if( !(id === this.start_state && this.cur_state() === '') && //avoid start state in url unless called explicit
            id !== this.cur_state()){//new state?
            window.history.pushState(null, "", '#!'+id);}
        data['result'].forEach(
            function(entry) { system.handle_call_pages_entry(entry,id,forced,cached);});
    } else {
        this.log_info('Problem with your Pages: '+data['result']['message']);
    }
};
//send a call to the endpoint
SYSTEM.prototype.call = function(call,success,data,data_type,async){
    this.call_url(this.endpoint+'?'+call,success,data,data_type,async);
};
SYSTEM.prototype.call_url = function(url,success,data,data_type,async){
    $.ajax({
            async: async,
            data: data,
            dataType: data_type,
            url: url,
            success: success,
            error: function(XMLHttpRequest, textStatus, errorThrown){system.log_error(url+' '+XMLHttpRequest+' '+textStatus+' '+errorThrown);}
    });
};
SYSTEM.prototype.log = function(type,msg){
    var res = '';
    switch(type){
        case this.LOG_START:
            res = '#SYSTEM: ';
            break;
        case this.LOG_INFO:
            res = '-SYSTEM: ';
            break;
        case this.LOG_ERROR:
            res = '!SYSTEM-ERROR: ';
            break;
    }
    console.log(res+msg);
};
SYSTEM.prototype.log_info = function(msg){
    this.log(this.LOG_INFO,msg);}
SYSTEM.prototype.log_error = function(msg){
    this.log(this.LOG_ERROR,msg);}
//load a pagestatewith given id
SYSTEM.prototype.load = function(id,forced){
    this.log(this.LOG_START,'load page: '+id+(forced ? ' - forced' : ''));
    if(!forced && this.state_info[id]){
        this.handle_call_pages(this.state_info[id],id,forced,true);
    }else {
        this.call('call=pages&group='+this.group+'&state='+id,function(data){system.handle_call_pages(data,id,forced,false);},{},"json",true);}
};

SYSTEM.prototype.load_css = function loadCSS(csssrc,forced) {
    if(forced || !this.state_css[csssrc]){
        var snode = document.createElement('link');
        snode.setAttribute('type','text/css');
        snode.setAttribute('rel', 'stylesheet');
        snode.setAttribute('href',csssrc);
        document.getElementsByTagName('head')[0].appendChild(snode);
        this.state_css[csssrc] = true;
        this.log_info('load css '+csssrc+' - '+(forced ? 'forced' : 'success'));
    } else {
        this.log_info('load css '+csssrc+' - cached');
    }
};

SYSTEM.prototype.cur_state = function() {
    var pathName = window.location.href;
    if (pathName.indexOf('#!') != -1) {
        return pathName.split('#!').pop();}
    return '';
};
SYSTEM.prototype.go_state = function(default_state,forced){
    var pageName = this.cur_state();
    this.load(pageName ? pageName : default_state,forced);
};

SYSTEM.prototype.back = function(){
    window.history.back();};
SYSTEM.prototype.forward = function(){
    window.history.forward();};
SYSTEM.prototype.reload = function(){
    this.go_state(this.cur_state(),true);
};

SYSTEM.prototype.language = function(lang){
    this.log_info('change language to '+lang);
    var search = '_lang='+lang;
    window.location.href = window.location.pathname +'?' + search + location.hash;
};

/*
 * jQuery MD5 Plugin 1.2.1
 * https://github.com/blueimp/jQuery-MD5
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://creativecommons.org/licenses/MIT/
 * 
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*jslint bitwise: true */
/*global unescape, jQuery */

(function ($) {
    'use strict';

    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
    * These functions implement the four basic operations the algorithm uses.
    */
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
    function binl_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var i, olda, oldb, oldc, oldd,
            a =  1732584193,
            b = -271733879,
            c = -1732584194,
            d =  271733878;

        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;

            a = md5_ff(a, b, c, d, x[i],       7, -680876936);
            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);
            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);
            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);
            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);
            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);

            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);
            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);
            b = md5_gg(b, c, d, a, x[i],      20, -373897302);
            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);
            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);
            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);
            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);
            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);
            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);
            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);
            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);
            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);
            d = md5_hh(d, a, b, c, x[i],      11, -358537222);
            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);
            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);
            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i],       6, -198630844);
            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);
            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);
            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);
            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    }

    /*
    * Convert an array of little-endian words to a string
    */
    function binl2rstr(input) {
        var i,
            output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
    }

    /*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
    function rstr2binl(input) {
        var i,
            output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return output;
    }

    /*
    * Calculate the MD5 of a raw string
    */
    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }

    /*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
    function rstr_hmac_md5(key, data) {
        var i,
            bkey = rstr2binl(key),
            ipad = [],
            opad = [],
            hash;
        ipad[15] = opad[15] = undefined;                        
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }

    /*
    * Convert a raw string to a hex string
    */
    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef',
            output = '',
            x,
            i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) +
                hex_tab.charAt(x & 0x0F);
        }
        return output;
    }

    /*
    * Encode a string as utf-8
    */
    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }

    /*
    * Take string arguments and return either raw or hex encoded strings
    */
    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }
    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }
    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }
    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }
    
    $.md5 = function (string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            } else {
                return raw_md5(string);
            }
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        } else {
            return raw_hmac_md5(key, string);
        }
    };
    
}(typeof jQuery === 'function' ? jQuery : this));


/**
 * jQuery SHA1 hash algorithm function
 * 
 * 	<code>
 * 		Calculate the sha1 hash of a String 
 * 		String $.sha1 ( String str )
 * 	</code>
 * 
 * Calculates the sha1 hash of str using the US Secure Hash Algorithm 1.
 * SHA-1 the Secure Hash Algorithm (SHA) was developed by NIST and is specified in the Secure Hash Standard (SHS, FIPS 180).
 * This script is used to process variable length message into a fixed-length output using the SHA-1 algorithm. It is fully compatible with UTF-8 encoding.
 * If you plan using UTF-8 encoding in your project don't forget to set the page encoding to UTF-8 (Content-Type meta tag).
 * This function orginally get from the WebToolkit and rewrite for using as the jQuery plugin.
 * 
 * Example
 * 	Code
 * 		<code>
 * 			$.sha1("I'm Persian."); 
 * 		</code>
 * 	Result
 * 		<code>
 * 			"1d302f9dc925d62fc859055999d2052e274513ed"
 * 		</code>
 * 
 * @alias Muhammad Hussein Fattahizadeh < muhammad [AT] semnanweb [DOT] com >
 * @link http://www.semnanweb.com/jquery-plugin/sha1.html
 * @see http://www.webtoolkit.info/
 * @license http://www.gnu.org/licenses/gpl.html [GNU General Public License]
 * @param {jQuery} {sha1:function(string))
 * @return string
 */

(function($){
	
	var rotateLeft = function(lValue, iShiftBits) {
		return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
	}
	
	var lsbHex = function(value) {
		var string = "";
		var i;
		var vh;
		var vl;
		for(i = 0;i <= 6;i += 2) {
			vh = (value>>>(i * 4 + 4))&0x0f;
			vl = (value>>>(i*4))&0x0f;
			string += vh.toString(16) + vl.toString(16);
		}
		return string;
	};
	
	var cvtHex = function(value) {
		var string = "";
		var i;
		var v;
		for(i = 7;i >= 0;i--) {
			v = (value>>>(i * 4))&0x0f;
			string += v.toString(16);
		}
		return string;
	};
	
	var uTF8Encode = function(string) {
		string = string.replace(/\x0d\x0a/g, "\x0a");
		var output = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				output += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				output += String.fromCharCode((c >> 6) | 192);
				output += String.fromCharCode((c & 63) | 128);
			} else {
				output += String.fromCharCode((c >> 12) | 224);
				output += String.fromCharCode(((c >> 6) & 63) | 128);
				output += String.fromCharCode((c & 63) | 128);
			}
		}
		return output;
	};
	
	$.extend({
		sha1: function(string) {
			var blockstart;
			var i, j;
			var W = new Array(80);
			var H0 = 0x67452301;
			var H1 = 0xEFCDAB89;
			var H2 = 0x98BADCFE;
			var H3 = 0x10325476;
			var H4 = 0xC3D2E1F0;
			var A, B, C, D, E;
			var tempValue;
			string = uTF8Encode(string);
			var stringLength = string.length;
			var wordArray = new Array();
			for(i = 0;i < stringLength - 3;i += 4) {
				j = string.charCodeAt(i)<<24 | string.charCodeAt(i + 1)<<16 | string.charCodeAt(i + 2)<<8 | string.charCodeAt(i + 3);
				wordArray.push(j);
			}
			switch(stringLength % 4) {
				case 0:
					i = 0x080000000;
				break;
				case 1:
					i = string.charCodeAt(stringLength - 1)<<24 | 0x0800000;
				break;
				case 2:
					i = string.charCodeAt(stringLength - 2)<<24 | string.charCodeAt(stringLength - 1)<<16 | 0x08000;
				break;
				case 3:
					i = string.charCodeAt(stringLength - 3)<<24 | string.charCodeAt(stringLength - 2)<<16 | string.charCodeAt(stringLength - 1)<<8 | 0x80;
				break;
			}
			wordArray.push(i);
			while((wordArray.length % 16) != 14 ) wordArray.push(0);
			wordArray.push(stringLength>>>29);
			wordArray.push((stringLength<<3)&0x0ffffffff);
			for(blockstart = 0;blockstart < wordArray.length;blockstart += 16) {
				for(i = 0;i < 16;i++) W[i] = wordArray[blockstart+i];
				for(i = 16;i <= 79;i++) W[i] = rotateLeft(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
				A = H0;
				B = H1;
				C = H2;
				D = H3;
				E = H4;
				for(i = 0;i <= 19;i++) {
					tempValue = (rotateLeft(A, 5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
					E = D;
					D = C;
					C = rotateLeft(B, 30);
					B = A;
					A = tempValue;
				}
				for(i = 20;i <= 39;i++) {
					tempValue = (rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
					E = D;
					D = C;
					C = rotateLeft(B, 30);
					B = A;
					A = tempValue;
				}
				for(i = 40;i <= 59;i++) {
					tempValue = (rotateLeft(A, 5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
					E = D;
					D = C;
					C = rotateLeft(B, 30);
					B = A;
					A = tempValue;
				}
				for(i = 60;i <= 79;i++) {
					tempValue = (rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
					E = D;
					D = C;
					C = rotateLeft(B, 30);
					B = A;
					A = tempValue;
				}
				H0 = (H0 + A) & 0x0ffffffff;
				H1 = (H1 + B) & 0x0ffffffff;
				H2 = (H2 + C) & 0x0ffffffff;
				H3 = (H3 + D) & 0x0ffffffff;
				H4 = (H4 + E) & 0x0ffffffff;
			}
			var tempValue = cvtHex(H0) + cvtHex(H1) + cvtHex(H2) + cvtHex(H3) + cvtHex(H4);
			return tempValue.toLowerCase();
		}
	});
})(jQuery);