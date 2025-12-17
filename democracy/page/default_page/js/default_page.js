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