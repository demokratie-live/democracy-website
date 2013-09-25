function init__SYSTEM_SAI_saimod_sys_security() {          
  $('#securitytab a').click(function (e) {
    e.preventDefault();    
    $(this).tab('show');
  })   
};