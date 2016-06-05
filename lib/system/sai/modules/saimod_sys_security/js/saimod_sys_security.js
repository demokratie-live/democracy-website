function init_saimod_sys_security() { 
    $("#sai_mod_security_table").tablesorter();
    $('#securitytab a').click(function (e) {
        $('#securitytab li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
  
};

function register_search(){
    $('#btn_search').click(function(){
        system.load($(this).attr('state')+$('#input_search').val(),true);
    });
}

function init_saimod_sys_security_users() {
    $("#sai_mod_security_table").tablesorter();
    $('#securitytab li').each(function(){
        $(this).removeClass('active');});
    $('#menu_users').parent().addClass('active');
    register_search();
}

function init_saimod_sys_security_user() {
    $("#sai_mod_security_table").tablesorter();
    $('.deleteuserright').click(function(){
        $.get( './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=deleterightuser&rightid='+$(this).attr('right_id')+
                '&userid='+$(this).attr('user_id'),function(data){
                    if(data==1){
                        system.reload();
                    } else {
                        alert('fail');
                    }
                });
    })
    $('#adduserright_add').click(function(){
         $.get( './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=addrightuser&rightid='+$('#adduserright_rightid').val()+
                '&userid='+$(this).attr('user_id'),function(data){
                    if(data==1){
                        system.reload();
                    } else {
                        alert('fail');
                    }
                });
    });
    $('#btn_confirm_email').click(function(){
        $.get( './sai.php?call=account&action=requestconfirm&username='+$(this).attr('user'),function(data){
                    if(data==1){
                        alert('Email sent');
                    } else {
                        alert('fail');
                    }
                });
    });
    $('#btn_change_password').click(function(){
        $.get( './sai.php?call=account&action=changepassword&username='+$(this).attr('user')+'&old_password_sha1='+'&new_password_sha1=',function(data){
                    if(data==1){
                        alert('Password Changed');
                    } else {
                        alert('fail');
                    }
                });
    });
    $('#btn_reset_password').click(function(){
        $.get( './sai.php?call=account&action=resetpassword&account='+$(this).attr('user'),function(data){
                    if(data==1){
                        alert('Email sent');
                    } else {
                        alert('fail');
                    }
                });
    });
    $('#btn_change_email').click(function(){
        $.get( './sai.php?call=account&action=changeemail&username='+$(this).attr('user')+'&new_email=',function(data){
                    if(data==1){
                        alert('Email sent');
                    } else {
                        alert('fail');
                    }
                });
    });
    $('#btn_rename_account').click(function(){
        $.get( './sai.php?saimod...&action=renameaccount&username='+$(this).attr('user')+'&new_username=',function(data){
                    if(data==1){
                        alert('Accountname changed');
                    } else {
                        alert('fail');
                    }
                });
    });
    $('#btn_delete_account').click(function(){
        $.get( './sai.php?saimod...',function(data){
                    if(data==1){
                        alert('Account deleted');
                    } else {
                        alert('fail');
                    }
                });
    });
}

function init_saimod_sys_security_rights() {
    $("#sai_mod_security_table").tablesorter();
    $('#securitytab li').each(function(){
        $(this).removeClass('active');});
    $('#menu_rights').parent().addClass('active');
    
    $('.right_edit').click(function(){
        alert('todo');
    });
    
    $('.right_delete').click(function(){
        $('#tab_rights').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=deleterightconfirm&id='+$(this).attr('right_id'),function(){
            register_deleteright();
        });
    });
    
    $('#new_right').click(function(){
        $('#tab_rights').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_security&action=newright',function(){
            register_newright();
        });
    });
}
function init_saimod_sys_security_newright() {
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

function init_saimod_sys_security_delright(){
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