//function init__SYSTEM_SAI_saistart_sys_sai() {  
function init_saistart_sys_sai() {  
 
    var heights = $(".inner-page").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
 
    $(".inner-page").height(maxHeight);
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

};