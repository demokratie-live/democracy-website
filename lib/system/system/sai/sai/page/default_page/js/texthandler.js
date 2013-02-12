
/** jQuery on document ready */
function init(){
  
  // initialize content
  loadContent('import');
  
  /**
   * generic navigation control 
   */
  $('div.main div.tabbable ul.nav li a').click(function () {
      var id = $(this).parent().attr("id");
      if(id !== undefined){
        console.log("Action: "+id);
        
        $('div.main div.tabbable ul.nav li').each(function(){
           $(this).removeClass('active'); 
        });
        $(this).parent().addClass('active');
        loadContent(id);
      }       
   });
   
};

/**
 * Load content
 * @param {type} id
 * @returns {undefined} */
function loadContent(id){
    $('div.tab-content').load('dasense/page/default_developer/modules/texthandler/'+id+'.html');    
}