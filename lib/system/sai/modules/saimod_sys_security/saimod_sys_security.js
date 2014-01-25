function init__SYSTEM_SAI_saimod_sys_security() {          
  $('#securitytab a').click(function (e) {
    e.preventDefault();    
    $(this).tab('show');
    load_security_tab($(this).attr('action'));
  })   
  
    load_security_tab('users');
};

function load_security_tab(action){
    $('img#loader').show();
    switch(action){
        case 'users':
            $('#tab_users').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_security&action='+action, function(){                
                $('img#loader').hide();});
            return;
        case 'rights':
            $('#tab_rights').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_security&action='+action, function(){                
                $('img#loader').hide();});
            return;
        case 'groups':
            $('#tab_groups').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_security&action='+action, function(){                
                $('img#loader').hide();});
            return;
        default:
            $('img#loader').hide();            
    }   
}