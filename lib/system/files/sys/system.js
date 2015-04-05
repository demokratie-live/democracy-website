var system = null;

//mother object
function SYSTEM(endpoint, group,start_state){
    system = this;
    
    this.LOG_START  = 0;
    this.LOG_INFO   = 1;
    this.LOG_ERROR  = 2;
    
    this.endpoint = endpoint;
    this.group = group;
    this.pages = null;
    this.start_state = start_state;
    this.go_state(start_state);
    
    $(window).bind('hashchange', function( event ) {
        system.go_state();});
}
//internal function to handle pagestate results
SYSTEM.prototype.handle_call_pages = function (data,id) {
    if(data['status']){
        system.log_info('load pages: endpoint '+system.endpoint+' group:'+system.group+' state:'+id+' - success');
        if(id !== system.cur_state()){
            window.history.pushState(null, "", '#!'+id);}
        data['result'].forEach(function(entry) {
            //load pages
            $.ajax({
                    async: false,
                    data: {},
                    dataType: 'html',
                    url: entry['url']+'&'+window.location.search.substr(1),
                    success:    function(data){
                        $(entry['div']).html(data);
                        system.log(system.LOG_INFO,'load page: '+id+entry['div']+' '+entry['url']+'&'+window.location.search.substr(1)+' - success');},
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
                    if(loaded++ == entry['js'].length-1){
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
//get the pages and save em
SYSTEM.prototype.load_page = function(){
    result = false;
    newps = this.pages;
    if(!this.pages){
        this.call('call=pages&group='+this.group,this.handle_call_pages,{},"json",false);
    } else { result = true;}
    this.pages = newps;
    return result;
};
//load a pagestatewith given id
SYSTEM.prototype.load = function(id){
    system.log(system.LOG_START,'load page '+id);
    this.call('call=pages&group='+this.group+'&state='+id,function(data){system.handle_call_pages(data,id);},{},"json",false);};

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

SYSTEM.prototype.go_state = function(default_state){
    var pageName = this.cur_state();
    this.load(pageName ? pageName : default_state);
};

SYSTEM.prototype.back = function(){
    window.history.back();};
SYSTEM.prototype.forwad = function(){
    window.history.forward();};

SYSTEM.prototype.language = function(lang){
    this.log_info('change language to '+lang);
    //preserve the old parameters
    //var search = location.search ? location.search.substring(1).split("&") : [];
    var search = '_lang='+lang;
    window.location.href = '/?' + search + location.hash;
};