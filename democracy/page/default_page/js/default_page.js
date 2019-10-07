$(document).ready(function() {
    new SYSTEM('./api.php',1,'home');

    $().UItoTop({ easingType: 'easeOutQuart' });
    
    $(".scroll").click(function(event){   
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
    
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
    });
    
    $('#subscribe').click(function(){
        var email   = $('#email').val();
        
        if(!validateEmail(email)){
            $('#email').addClass("blink-class");
        } else {
            $('#email').removeClass("blink-class");
            $.ajax({
                async: true,
                url: './api.php',
                type: 'GET',
                dataType: 'JSON',
                data: {
                    call: 'send_subscribe',
                    data: { email:  email}
                },
                success: function(data){
                    if(!data.status){
                        alert("Das Eintragen in den Newsletter hat leider nicht funktioniert. Bitte versuche es später noch einmal. Danke.");
                    } else {
                        $('#confirm').show();
                        $('#formular').hide();
                    }
                },
                error: function(){
                    alert("Das Eintragen in den Newsletter hat leider nicht funktioniert. Bitte versuche es später noch einmal. Danke.");
                }
            });
        }
    });
});

function sendMail(data,callback){
    $.ajax({
        async: true,
        url: './api.php',
        type: 'POST',
        //dataType: 'JSON',
        data: {
            call: 'send_mail',
            data: data
        },
        success: function(data){
            callback(data);
        },
        error: function(){
            callback(false);
        }
    });
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}