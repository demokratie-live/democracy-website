
/** jQuery on document ready */
$(document).ready(function() {

  // initialize content  
  $('div#content-wrapper').load('./dasense/page/default_developer/carousel.html', function() {
      $('.carousel').carousel();
  });
  
  /**
   * generic navigation control 
   */
  $('div#developer-navbar ul#developer-nav li a').click(function () {
      var id = $(this).attr("id");
      if(id !== undefined){
        console.log("Module: "+id);
        
        $('div#developer-navbar ul#developer-nav li').each(function(){
           $(this).removeClass('active'); 
        });
        $(this).parent().addClass('active');
        loadModuleContent(id);
      }       
   });
   
   $('.brand').click(function(){
       location.reload();
   });
   
});

function loadModuleContent(id){
    $('div#content-wrapper').load('./dasense/page/default_developer/modules/'+id+'/main.html', function(){
        init();
    });
}