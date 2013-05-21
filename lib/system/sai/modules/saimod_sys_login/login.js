/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



/* jQuery on document ready */
$(document).ready(function() {
    
    $("#submitButton").click(function(){
        $.get('./api.php?call=account&action=login&username='+$('#username').val()+'&password_sha='+$.sha1($('#password').val())+'&password_md5='+hex_md5($('#password').val()), function (data) {
            if(data === 1){
                $("#loginStatusMsg").html('Login successful!!');
            } else {
                $("#loginStatusMsg").html('Wrong username or password!');
            }                    
        });
    });
    
});
