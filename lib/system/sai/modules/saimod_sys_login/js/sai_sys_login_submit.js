function init_saimod_sys_login() {  
    //jqBootstrapValidation
    $("#login_form input").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {},
        submitSuccess: function($form, event){            
            $.get('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_login&action=login&username='+$('#bt_login_user').val()+'&password_sha='+$.sha1($('#bt_login_password').val())+'&password_md5='+$.md5($('#bt_login_password').val()), function (data) {
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
            $.get('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_login&action=logout', function (data) {
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
                var username = document.getElementById('register_username').value;
                var email    = document.getElementById('register_email').value;
                var password = document.getElementById('user_register_password2').value;
                
                var select_locale = document.getElementById('register_locale_select');
                var locale = "";
                for (var i = 0; i  < select_locale.options.length; i++) {
                   if(select_locale.options[i].selected ){
                        locale = select_locale.options[i].value;
                   }
                }                                
                
                $.ajax({
                    dataType: "json",
                    url: './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_login&action=register&username='+username+'&password='+$.sha1(password)+'&email='+email+'&locale='+locale,
                    data: null,
                    success: function (dataCreate) {                        
                        if(dataCreate === 1){ // reload -> user will be loged in
                            location.reload();
                        }else{  // show errors
                            alert('Not successfull: '+dataCreate);
                        }
                    }
                });

                event.preventDefault();
        }
    });
}