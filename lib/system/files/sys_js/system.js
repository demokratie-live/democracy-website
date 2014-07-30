//mother object
function SYSTEM(endpoint, group){
    this.endpoint = endpoint;
    this.group = group;
    this.pagestates = null;
}
//internal function to handle pagestate result
SYSTEM.prototype.handle_call_pagestates = function (data) {
    if(data['status']){
        newps = data['result'];
        console.log('SYSTEM: loaded Pagestates');
        result = true;
    } else {
        console.log('SYSTEM: Problem with your Pagestates.');
        result = false;}
}
//send a call to the endpoint
SYSTEM.prototype.call = function(call,success,data,data_type,async){
    $.ajax({
            async: async,
            data: data,
            dataType: data_type,
            url: this.endpoint+'?'+call,
            success:    success,
            error: function(XMLHttpRequest, textStatus, errorThrown){console.log(call);}
    });
}
//get the pagestates and save em
SYSTEM.prototype.load_pagestates = function(){
    result = false;
    newps = this.pagestates;
    if(!this.pagestates){
        this.call('call=pagestates&group='+this.group,this.handle_call_pagestates,{},"json",false);
    } else { result = true;}
    this.pagestates = newps;
    return result;
};
//load a pagestatewith given id
SYSTEM.prototype.load = function(id){
    console.log('Load Pagestate: '+id);
    if(!this.load_pagestates()){
        return false;}
    var push = true;
    this.pagestates.forEach(function(entry) {
        if(entry['id'] === id){
            if(push){
                window.history.pushState(null, "", '#'+id);
                push = false;}
            $.ajax({
                    async: false,
                    data: {},
                    dataType: 'html',
                    url: entry['url'],
                    success:    function(data){$(entry['div']).html(data); var fn = window[entry['func']]; if(typeof fn === 'function'){fn()};},
                    error: function(XMLHttpRequest, textStatus, errorThrown){console.log(errorThrown);}
            });
            //$(entry['div']).load(entry['url'],fn);
            
        }
    });
    return push ? false : true;
};
//what?
SYSTEM.prototype.cur_state = function() {
    var pathName = window.location.href;
    if (pathName.indexOf('#') != -1) {
        return pathName.split('#').pop();}
    return '';
}

SYSTEM.prototype.go_state = function(default_state){
    pageName = this.cur_state();
    this.load(pageName ? pageName : default_state);
}