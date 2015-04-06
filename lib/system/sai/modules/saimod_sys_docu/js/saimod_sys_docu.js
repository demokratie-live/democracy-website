var editor = null;

function init_saimod_sys_docu() {            
  $('#documaintab a, .subtabs a').click(function (e) {
    e.preventDefault();    
    $(this).tab('show');    
    if(editor != null){
        editor.unload();
    }
  });
  
  $('.docuedit').click(function (){
    var opts = {basePath: '../system/lib/EpicEditor'};
    editor = new EpicEditor(opts).load();
  });
};