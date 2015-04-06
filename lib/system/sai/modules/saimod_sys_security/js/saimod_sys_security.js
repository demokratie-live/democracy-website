var user_search = '';
function init_saimod_sys_security() {          
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
            $('#tab_users').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action='+action+'&search='+encodeURIComponent(user_search), function(){
                register_users();                
                $('img#loader').hide();});
            return;
        case 'rights':
            $('#tab_rights').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action='+action, function(){
                register_rights();
                $('img#loader').hide();});
            return;
        case 'groups':
            $('#tab_groups').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action='+action, function(){                
                $('img#loader').hide();});
            return;
        case 'stats':
            $('#tab_stats').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action='+action, function(){                
                $('img#loader').hide();});
            return;
        default:
            $('img#loader').hide();            
    }   
}

function register_rights(){
    $('#new_right').click(function(){
        $('#tab_rights').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=newright',function(){
            register_newright();
        });
    });
    
    $('.right_edit').click(function(){
        alert('todo');
    });
    
    $('.right_delete').click(function(){
        $('#tab_rights').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=deleterightconfirm&id='+$(this).attr('right_id'),function(){
            register_deleteright();
        });
    });
}

function register_deleteright(){
    $('#deleteright_confirm').click(function(){
        $.get('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=deleteright&id='+$(this).attr('right_id'),
            function(data){
                if(data==1){
                    alert('sucess');
                } else {
                    alert('fail');
                }
            });
    });
    
    $('#deleteright_abort').click(function(){
        load_security_tab('rights');
    });
}

function register_newright(){
    $('#addright').click(function(){
        $.get(  './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=addright&id='+$('#addright_id').val()+
                '&name='+encodeURIComponent($('#addright_name').val())+
                '&description='+encodeURIComponent($('#addright_description').val()),function(data){
                    if(data==1){
                        alert('sucess');
                    } else {
                        alert('fail');
                    }
                });
    })
}

function register_users(){
    $('#user_go').click(function(){
        user_search = $('#user_search').val();
        load_security_tab('users');
    });
    $('#user_search').val(user_search);
    $('.user_entry').click(function(){
        $('#tab_users').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=user&username='+encodeURIComponent($(this).attr('username')),function(){
            $('.deleteuserright').click(function(){
                $.get( './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=deleterightuser&rightid='+$(this).attr('right_id')+
                        '&userid='+$(this).attr('user_id'),function(data){
                            if(data==1){
                                alert('sucess');
                            } else {
                                alert('fail');
                            }
                        });
            })
            $('#adduserright_add').click(function(){
                 $.get( './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=addrightuser&rightid='+$('#adduserright_rightid').val()+
                        '&userid='+$(this).attr('user_id'),function(data){
                            if(data==1){
                                alert('sucess');
                            } else {
                                alert('fail');
                            }
                        });
            });
        });
    });
}