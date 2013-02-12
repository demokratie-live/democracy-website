/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function init(){
      // initialize content
  loadContent('server_architecture');
  
  /**
   * generic navigation control 
   */
  $('div.main div#div-nav ul.nav li a').click(function () {
      var id = $(this).attr("id");
      if(id !== undefined){
        console.log("Action: "+id);
        
        $('div.main div#div-nav ul.nav li').each(function(){
           $(this).removeClass('active'); 
        });
        $(this).parent().addClass('active');
        loadContent(id);
      }       
   });
}

/**
 * Load content
 * @param {type} id
 * @returns {undefined} */
function loadContent(id){
    var splitID = id.split("_");
    if(splitID.length > 1){
        var folder = splitID[0];
        var file = splitID[1] + ".html";
        $('div#div-content').load('dasense/page/default_developer/modules/documentation/'+folder+'/'+file);    
    }
}
