var user_search = '';
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
            $('#tab_users').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_security&action='+action+'&search='+user_search, function(){
                register_users();                
                $('img#loader').hide();});
            return;
        case 'rights':
            $('#tab_rights').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_security&action='+action, function(){
                register_rights();
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

function register_rights(){
    $('#new_right').click(function(){
        $('#tab_rights').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_security&action=newright');
    });
}
function register_users(){
    $('#user_go').click(function(){
        user_search = $('#user_search').val();
        load_security_tab('users');
    });
    $('#user_search').val(user_search);
    $('.user_entry').click(function(){
        $('#tab_users').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_security&action=user&username='+$(this).attr('username'));
    });
}