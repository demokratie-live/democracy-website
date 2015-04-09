var system = null;

//mother object
function SYSTEM(endpoint,group,start_state,hash_change){
    system = this;
    
    this.LOG_START  = 0;
    this.LOG_INFO   = 1;
    this.LOG_ERROR  = 2;
    
    this.endpoint = endpoint;
    this.group = group;
    this.pages = null;
    this.state = {};
    this.state_info = {};
    this.state_js = {};
    this.state_css = {};
    this.start_state = start_state;
    this.hash_change = hash_change;
    
    this.hashchange();
    $(window).bind('hashchange', this.hashchange);
}
SYSTEM.prototype.hashchange = function () {
    system.go_state(system.start_state);
    //user callback
    if(system.hash_change){
        system.hash_change(system.cur_state());}
};
SYSTEM.prototype.handle_call_pages_data = function (entry,id,forced,cached) {
    var url = entry['url']+(window.location.search.substr(1) ? '&'+window.location.search.substr(1) : '' );
    //check loaded state of div - reload only if required
    if(forced || this.state[entry['div']] !== url){
        //load pages
        $.ajax({
                async: false,
                data: {},
                dataType: 'html',
                url: url,
                success:    function(data){
                    if($(entry['div']).length){
                        $(entry['div']).html(data);
                        system.log_info('load page: '+id+entry['div']+' '+url+' - success');
                    } else {
                        system.log_error('load page: '+id+entry['div']+' '+url+' - div not found');
                    }},
                error: function(XMLHttpRequest, textStatus, errorThrown){system.log_error(errorThrown);}
        });
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
                        if(loaded++ === entry['js'].length-1){
                            var fn = window[entry['func']];
                            if(call_func && typeof fn === 'function'){
                                call_func = false;
                                fn();
                                system.log_info('call func: '+entry['func']);
                            } else {
                                system.log_error('call func: '+entry['func']+' - fail');
                            }
                        }
                    })
                    .fail(function( jqxhr, settings, exception ) {
                        system.log_error( "Something went wrong"+exception );
                    });
                this.state_js[entry['js'][i]] = true;
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
        //update state
        this.state[entry['div']] = url;
    } else {
        this.log_info('load page: '+id+entry['div']+' '+url+' - skipped - already loaded');
    }
}
//internal function to handle pagestate results
SYSTEM.prototype.handle_call_pages = function (data,id,forced,cached) {
    if(data['status']){
        this.log_info('load pages: endpoint '+this.endpoint+' group:'+this.group+' state:'+id+' - '+(cached ? 'cached ' : (forced ? 'forced' : 'success')));
        //state not found?
        if(data['result'].length === 0){
            this.log_error('load pages: endpoint '+this.endpoint+' group:'+this.group+' state:'+id+' - state not found - redirecting to start state: '+this.start_state);
            this.load(this.start_state);
            return;}
        //cache state info data
        this.state_info[id] = data;
        //update history?
        if(id !== this.cur_state()){
            window.history.pushState(null, "", '#!'+id);}
            data['result'].forEach(
                function(entry) { system.handle_call_pages_data(entry,id,forced,cached);});
    } else {
        this.log_info('Problem with your Pages: '+data['result']['message']);
    }
};
//send a call to the endpoint
SYSTEM.prototype.call = function(call,success,data,data_type,async){
    $.ajax({
            async: async,
            data: data,
            dataType: data_type,
            url: this.endpoint+'?'+call,
            success: success,
            error: function(XMLHttpRequest, textStatus, errorThrown){system.log_error(call+' '+XMLHttpRequest+' '+textStatus+' '+errorThrown);}
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
        this.call('call=pages&group='+this.group+'&state='+id,function(data){system.handle_call_pages(data,id,forced,false);},{},"json",false);}
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
SYSTEM.prototype.forwad = function(){
    window.history.forward();};
SYSTEM.prototype.reload = function(href){
    if('#!'+this.cur_state() === href){
        this.go_state(this.cur_state(),true);}
};

SYSTEM.prototype.language = function(lang){
    this.log_info('change language to '+lang);
    var search = '_lang='+lang;
    window.location.href = window.location.pathname +'?' + search + location.hash;
};