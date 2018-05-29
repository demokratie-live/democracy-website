$(document).ready(function() {
    if($('#code').attr('valid') === '1'){
        $('#device').show();
    } else {
        $('#apply').show();
    }
    
    $('#apply_go').click(function(){
        $('#apply').hide();
        $('#device').show();
    });
    $('#select_ios').click(function(){
        $('#device').hide();
        $('#ios').show();
    });
    $('#select_android').click(function(){
        $('#device').hide();
        $('#android').show();
    });
    $('#android_go').click(function(){
        var email = $('#googleid').val();
        var code = $('#code').attr('code');
        var android = 1;
        var ios = 0;
        var newsletter = $('#newsletter_android').is(":checked")  === true ? 1 : 0;
        
        if(!validateEmail(email)){
            $('#googleid').addClass("blink-class");
            $('#duplicate_android').hide();
        } else {
            $('#googleid').removeClass("blink-class");
            $('#duplicate_android').hide();
            register(email,code,ios,android,newsletter,function(data){
                if(data.status){
                    $('#android').hide();
                    $('#final_android').show();
                } else {
                    $('#duplicate_android').show();
                }
            });
        }
    });
    $('#ios_go').click(function(){
        var email = $('#appleid').val();
        var code = $('#code').attr('code');
        var android = 0;
        var ios = 1;
        var newsletter = $('#newsletter_ios').is(":checked") === true ? 1 : 0;
        
        if(!validateEmail(email)){
            $('#appleid').addClass("blink-class");
            $('#duplicate_ios').hide();
        } else {
            $('#appleid').removeClass("blink-class");
            $('#duplicate_ios').hide();
            register(email,code,ios,android,newsletter,function(data){
                if(data.status){
                    $('#ios').hide();
                    $('#final_ios').show();
                } else {
                    $('#duplicate_ios').show();
                }
            });
        }
    });
});

function register(email,code,ios,android,newsletter,success){
    $.ajax({
        url: '../api.php',
        type: 'GET',
        dataType: 'JSON',
        data: {
            call: 'beta',
            ios: ios,
            android: android,
            email: email,
            code: code,
            newsletter: newsletter
        },
        success: success
    });
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}