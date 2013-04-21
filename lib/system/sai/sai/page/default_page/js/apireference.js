
var baseURL = "http://www.da-sense.de";
var endpoint = "api.php";
var url = baseURL + "/" + endpoint;

/** jQuery on document ready */
function init(){
  
  // initialize content
  loadContent('overview_request');
  
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
   
};

/**
 * Load content
 * @param {type} id
 * @returns {undefined} */
function loadContent(id){
    var splitID = id.split("_");
    if(splitID.length > 1){
        var folder = splitID[0];
        var file = splitID[1] + ".html";
        $('div#div-content').load('dasense/page/default_developer/modules/apireference/'+folder+'/'+file);    
    }
}