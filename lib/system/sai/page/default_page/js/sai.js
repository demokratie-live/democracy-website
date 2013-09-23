var last_id = '';
var scripts_loaded = 0;
var scripts_req = 0;
/** jQuery on document ready */
$(document).ready(function() {

  // initialize content
  loadModuleContent('.SYSTEM.SAI.saimod_sys_sai');

  //load content -> menu
  $('#sai_navbar ul li a, #project_navbar ul li a').click(function () {
      var id = $(this).attr("saimenu");
      if(id !== undefined){
        console.log("Module: "+id);
        $('#sai_navbar li, #project_navbar li').each(function(){
           $(this).removeClass('active');});
        $(this).parent().addClass('active');
        loadModuleContent(id);
      }
   });

   $('.brand').click(function(){
       location.reload();
   });
});

function loadModuleContent(id){
    last_id = id;
    $('div#content-wrapper').load(SAI_ENDPOINT+'sai_mod='+id, function(){
        $.getJSON(SAI_ENDPOINT+'sai_mod='+id+'&css=1', function (data) {
            if(data){
                for(var i=0; i < data['result'].length; i++){
                    loadCSS(data['result'][i]);}
            }
        });

        $.getJSON('./sai.php?sai_mod='+id+'&js=1', function (data) {
            if(data){
                scripts_req = data['result'].length;
                for(var i=0; i < data['result'].length; i++){
                    loadJS(unescape(data['result'][i]));}
            }
        });


    });
}

function script_loaded(){
    scripts_loaded += 1;

    if(scripts_loaded >= scripts_req){
        scripts_loaded = 0;
        func = 'init_'+last_id;
        //func = jssrc.substring(jssrc.lastIndexOf('/')+1);
        func = func.replace(/\./g,'_');
        if(typeof window[func] === 'function') {
            window[func]();
            console.log(func+' called');}
    }
}

function loadJS(jssrc) {
    if(jssrc){
        $.getScript(jssrc).done(function(script, textStatus) {
            console.log('Script: '+jssrc+' - '+textStatus );
            script_loaded();
            })
    }
}

function loadCSS(csssrc) {
    if(csssrc){
        var snode = document.createElement('link');
        snode.setAttribute('type','text/css');
        snode.setAttribute('rel', 'stylesheet');
        snode.setAttribute('href',csssrc);
        document.getElementsByTagName('head')[0].appendChild(snode);
        console.log('Css: '+csssrc+' loaded.');
    }
}