var system = null;

//mother object
function SYSTEM(endpoint, group,start_state,hashchange){
    system = this;
    
    this.LOG_START  = 0;
    this.LOG_INFO   = 1;
    this.LOG_ERROR  = 2;
    
    this.endpoint = endpoint;
    this.group = group;
    this.pages = null;
    this.state = {};
    this.state_info = {};
    this.start_state = start_state;
    this.hashchange = hashchange;
    
    this.go_state(start_state);
    this.hashchange(this.cur_state());
    
    $(window).bind('hashchange', function( event ) {
        system.go_state();
        //user callback
        if(system.hashchange){
            hashchange(system.cur_state());}
    });
}
//internal function to handle pagestate results
SYSTEM.prototype.handle_call_pages = function (data,id,forced,cached) {
    if(data['status']){
        system.log_info('load pages: endpoint '+system.endpoint+' group:'+system.group+' state:'+id+' - '+(cached ? 'cached ' : 'success'));
        //state not found?
        if(data['result'].length === 0){
            system.log_error('load pages: endpoint '+system.endpoint+' group:'+system.group+' state:'+id+' - state not found - redirecting to start state: '+system.start_state);
            system.load(system.start_state);
            return;}
        //cache state info data
        system.state_info[id] = data;
        //update history?
        if(id !== system.cur_state()){
            window.history.pushState(null, "", '#!'+id);}
        data['result'].forEach(function(entry) {
            //check loaded state of div - reload only if required
            if(forced || system.state[entry['div']] !== entry['url']+'&'+window.location.search.substr(1)){
                //load pages
                $.ajax({
                        async: false,
                        data: {},
                        dataType: 'html',
                        url: entry['url']+'&'+window.location.search.substr(1),
                        success:    function(data){
                            if($(entry['div']).length){
                                $(entry['div']).html(data);
                                system.log_info('load page: '+id+entry['div']+' '+entry['url']+'&'+window.location.search.substr(1)+' - success');
                            } else {
                                system.log_error('load page: '+id+entry['div']+' '+entry['url']+'&'+window.location.search.substr(1)+' - div not found');
                            }},
                            error: function(XMLHttpRequest, textStatus, errorThrown){system.log(system.LOG_ERROR,errorThrown);}
                });
                //load css
                for(var i=0; i < entry['css'].length; i++){
                    system.load_css(entry['css'][i]);}
                //load js
                var call_func = true;
                var loaded = 0;
                for(var i=0; i < entry['js'].length; i++){
                    system.log(system.LOG_INFO,'load js: '+entry['js'][i]);
                    $.getScript(entry['js'][i]).done(function(response, status) {
                        system.log(system.LOG_INFO,'load js: '+status);
                        if(loaded++ === entry['js'].length-1){
                            var fn = window[entry['func']];
                            if(call_func && typeof fn === 'function'){
                                call_func = false;
                                fn();
                                system.log_info('call func: '+entry['func']);
                            } else {
                                system.log_error('call func: '+entry['func']+' - fail');
                            }}
                        });
                }
                //update state
                system.state[entry['div']] = entry['url']+'&'+window.location.search.substr(1);
            } else {
                system.log_info('load page: '+id+entry['div']+' '+entry['url']+'&'+window.location.search.substr(1)+' - skipped - already loaded');
            }
        });
    } else {
        console.log(data);
        system.log_info('Problem with your Pages: '+data['result']['message']);
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
            error: function(XMLHttpRequest, textStatus, errorThrown){system.log(system.LOG_ERROR,call+' '+XMLHttpRequest+' '+textStatus+' '+errorThrown);}
    });
};
SYSTEM.prototype.log = function(type,msg){
    var res = '';
    switch(type){
        case system.LOG_START:
            res = '#SYSTEM: ';
            break;
        case system.LOG_INFO:
            res = '-SYSTEM: ';
            break;
        case system.LOG_ERROR:
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
    this.log(system.LOG_START,'load page: '+id+(forced ? ' - forced' : ''));
    if(!forced && this.state_info[id]){
        this.handle_call_pages(this.state_info[id],id,forced,true);
    }else {
        this.call('call=pages&group='+this.group+'&state='+id,function(data){system.handle_call_pages(data,id,forced,false);},{},"json",false);}
};

SYSTEM.prototype.load_css = function loadCSS(csssrc) {
    var snode = document.createElement('link');
    snode.setAttribute('type','text/css');
    snode.setAttribute('rel', 'stylesheet');
    snode.setAttribute('href',csssrc);
    document.getElementsByTagName('head')[0].appendChild(snode);
    system.log(system.LOG_INFO,'load css '+csssrc);
};

//what?
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