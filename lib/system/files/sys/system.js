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
SYSTEM.prototype.reload = function(href){
    //if('#!'+this.cur_state() === href){
        this.go_state(this.cur_state(),true);//}
};

SYSTEM.prototype.language = function(lang){
    this.log_info('change language to '+lang);
    var search = '_lang='+lang;
    window.location.href = window.location.pathname +'?' + search + location.hash;
};