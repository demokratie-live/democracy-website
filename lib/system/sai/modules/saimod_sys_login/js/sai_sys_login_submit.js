function init_saimod_sys_login() {  
    //jqBootstrapValidation
    $("#login_form input").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {},
        submitSuccess: function($form, event){            
            system.account_login($('#bt_login_user').val(),$('#bt_login_password').val(),function(data){
                if(data.status){
                    $('.help-block').html("Login successfull.</br>");
                    location.reload(true);
                } else {
                    $('.help-block').html("Login not successfull.</br> User & Password combination wrong.");
                }
            });
            event.preventDefault();
        }
    });

    $("#logout_form input").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {},
        submitSuccess: function($form, event){            
            system.account_logout(function (data) {
                if(data.status){
                    $('.help-block').html("Logout successfull.</br>");
                    location.reload(true);
                } else {
                    $('.help-block').html("Logout not successfull.</br>")
                }
            });
            event.preventDefault();
        }
    });

    $.getJSON('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_login&action=userinfo', function(data){
        if(data){
        $('#user_email_input').attr('value', data.email);
        $('span#user_username').text(data.username);
        $('span#user_email').text(data.email);
        $('span#user_joindate').text(data.joindate);
        $('span#user_last_active').text(new Date(data.last_active * 1000).toString('yyyy-MM-dd h:mm:ss'));
        $('span#user_locale').text(data.locale);
        }
    });
    
};

function init_saimod_sys_register(){
    $('#btn_user_registration_cancel').click(function(){         
        system.load('login');
    });
    //jqBootstrapValidation        
    $("#register_user_form input").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function (form, event, errors) {},
        submitSuccess: function($form, event){    
                var username = $('#register_username').val();
                var email    = $('#register_email').val();
                var password = $('#user_register_password2').val();                          
                
                system.account_create(username,password,email,
                    function (data) {                        
                        if(data.status){ 
                            system.load('login');
                        }else{  // show errors
                            alert('Not successfull: '+data);
                        }
                    });
                event.preventDefault();
        }
    });
}

function init_saimod_sys_resetpassword(){
    $('#btn_resetpassword').click(function(){
        system.account_reset_password($('#input_resetpassword').val(),function(data){
            if(data.status){
                $('.help-block').html('EMail sent.');
            } else {
                $('.help-block').html(data.result.message);
            }
        });
    });
}