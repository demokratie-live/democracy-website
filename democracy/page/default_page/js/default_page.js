$(document).ready(function() {
    new SYSTEM('./api.php',1,'start');
    
    /* init Jarallax */
    $('.jarallax').jarallax({
        speed: 0.5,
        imgWidth: 1366,
        imgHeight: 768
    });
    
    $(".scroll").click(function(event){   
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
      
    $().UItoTop({ easingType: 'easeOutQuart' });
    
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    $('#beta').change(function(){
        $('#plattform').toggle();
    });
    
    $('#subscribe').click(function(){
        var ok      = true;
        var email   = $('#email').val();
        var beta    = $('#beta').is(':checked');
        var android = $('#android').is(':checked');
        var ios     = $('#ios').is(':checked');
        
        if(!validateEmail(email)){
            $('#email').addClass("blink-class");
            ok = false;
        } else {
            $('#email').removeClass("blink-class");
        }
        
        if(beta && (!android && !ios)){
            $('#android').addClass("blink-class");
            $('#ios').addClass("blink-class");
            ok = false;
        } else {
            $('#android').removeClass("blink-class");
            $('#ios').removeClass("blink-class");
        }
        
        if(ok){
            $.ajax({
                async: true,
                url: './api.php',
                type: 'GET',
                dataType: 'JSON',
                data: {
                    call: 'send_subscribe',
                    data: { email:  email,
                            beta:   beta,
                            android:android,
                            ios:    ios}
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

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}