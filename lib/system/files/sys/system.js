var system = null;

//mother object
function SYSTEM(endpoint, group,start_state){
    system = this;
    this.endpoint = endpoint;
    this.group = group;
    this.pages = null;
    this.start_state = start_state;
    this.go_state(start_state);
}
//internal function to handle pagestate results
SYSTEM.prototype.handle_call_pages = function (data) {
    if(data['status']){
        newps  = data['result'];
        console.log('SYSTEM: load pages: '+system.endpoint+':'+system.group+' - success');
        result = true;
    } else {
        console.log('SYSTEM-ERROR: Problem with your Pages: '+data['result']['message']);
        result = false;}
};
//send a call to the endpoint
SYSTEM.prototype.call = function(call,success,data,data_type,async){
    $.ajax({
            async: async,
            data: data,
            dataType: data_type,
            url: this.endpoint+'?'+call,
            success: success,
            error: function(XMLHttpRequest, textStatus, errorThrown){console.log(call);}
    });
};
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
    if(!system.load_page()){
        console.log('SYSTEM-ERROR: Problem with your Pages');
        return false;}
    var push = true;
    var found = false;
    system.pages.forEach(function(entry) {
        if(entry['id'] === id){
            found = true;
            //write new state
            if(push){
                window.history.pushState(null, "", '#'+id);
                push = false;}
            //load pages
            $.ajax({
                    async: false,
                    data: {},
                    dataType: 'html',
                    url: entry['url'],
                    success:    function(data){
                        $(entry['div']).html(data);
                        console.log('SYSTEM: load page: '+id+entry['div']+' - success');},
                    error: function(XMLHttpRequest, textStatus, errorThrown){console.log(errorThrown);}
            });
            //load css
            for(var i=0; i < entry['css'].length; i++){
                system.load_css(entry['css'][i]);}
            //load js
            for(var i=0; i < entry['js'].length; i++){
                console.log('SYSTEM: load js: '+entry['js'][i]);
                $.getScript(entry['js'][i]).done(function(response, status) {
                    console.log('SYSTEM: load js: '+status);
                    var fn = window[entry['func']];
                    if(typeof fn === 'function'){
                        fn();
                        console.log('SYSTEM: call func: '+entry['func']);}});
            }
        }
    });
    if(!found){
        window.history.pushState(null, "", '#');
        window.location.reload();}
    return push ? false : true;
};

SYSTEM.prototype.load_css = function loadCSS(csssrc) {
    var snode = document.createElement('link');
    snode.setAttribute('type','text/css');
    snode.setAttribute('rel', 'stylesheet');
    snode.setAttribute('href',csssrc);
    document.getElementsByTagName('head')[0].appendChild(snode);
    console.log('SYSTEM: load css '+csssrc);
};

//what?
SYSTEM.prototype.cur_state = function() {
    var pathName = window.location.href;
    if (pathName.indexOf('#') != -1) {
        return pathName.split('#').pop();}
    return '';
};

SYSTEM.prototype.go_state = function(default_state){
    var pageName = this.cur_state();
    this.load(pageName ? pageName : default_state);
};