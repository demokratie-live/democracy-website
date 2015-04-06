function init_saimod_sys_mod() {          
  $('#modstab a').click(function (e) {
    e.preventDefault();    
    $(this).tab('show');
  })   
};