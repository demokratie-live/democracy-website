
/** jQuery on document ready */
$(document).ready(function() {

  // initialize content  
  loadModuleContent('.SYSTEM.SAI.saimod_sys_sai');    
  
  //load content -> menu
  $('#sai_navbar ul li a, #project_navbar ul li a').click(function () {
      var id = $(this).attr("id"); 
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
    $('div#content-wrapper').load('./?action=developer&sai_mod='+id, function(){});
        
    $.getJSON('./?action=developer&sai_mod='+id+'&css=1', function (data) {  
        if(data){
            for(var i=0; i < data['result'].length; i++){
                loadCSS(data['result'][i]);}
        }
    });
    
    $.getJSON('./?action=developer&sai_mod='+id+'&js=1', function (data) {                   
        if(data){
            for(var i=0; i < data['result'].length; i++){                  
                loadJS(unescape(data['result'][i]));}
        }
    });        
}