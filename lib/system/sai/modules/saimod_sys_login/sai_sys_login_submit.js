function init__SYSTEM_SAI_saimod_sys_login() {  
    //jqBootstrapValidation
    $("#login_form input").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {},
        submitSuccess: function($form, event){            
            $.get(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_login&action=login&username='+$('#bt_login_user').val()+'&password_sha='+$.sha1($('#bt_login_password').val())+'&password_md5='+$.md5($('#bt_login_password').val()), function (data) {
                if(data == 1){
                    $('.help-block').html("Login successfull.</br>");
                    location.reload(true);
                } else {
                    $('.help-block').html("Login not successfull.</br> User & Password combination wrong.")
                }
            });
            event.preventDefault();
        }
    });

    $("#logout_form input").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {},
        submitSuccess: function($form, event){            
            $.get(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_login&action=logout', function (data) {
                if(data == 1){
                    $('.help-block').html("Logout successfull.</br>");
                    location.reload(true);
                } else {
                    $('.help-block').html("Logout not successfull.</br>")
                }
            });
            event.preventDefault();
        }
    });

    $.getJSON('./?module=user&action=area&getUserDetails=1', function(data){
       $('#user_email_input').attr('value', data.email);
       $('span#user_username').text(data.username);
       $('span#user_email').text(data.email);
       $('span#user_joindate').text(data.joindate);
       $('span#user_last_active').text(new Date(data.last_active * 1000).toString('yyyy-MM-dd h:mm:ss'));
       $('span#user_locale').text(data.locale);
    });
};
