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
    
    //<script type="application/x-javascript">addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }</script>
});