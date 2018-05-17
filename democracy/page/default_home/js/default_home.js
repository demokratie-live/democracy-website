function init_home(){
    $(".nav-item").removeClass("active");
    $("#menu_home").parent().addClass("active");
    
    $(".icon-app-store-outline").hover(
        function(){$(this).toggleClass("icon-app-store-filled");}
    );
    $(".icon-google-play-outline").hover(
        function(){$(this).toggleClass("icon-google-play-filled");}
    );
    $(".info-badge").click(
        function(){
            $(".info-badge").removeClass("active");
            $(".info-badge .info-icon-passive").show();
            $(".info-badge .info-icon-active").hide();
            $(this).addClass("active");
            $(this).find(".info-icon-passive").hide();
            $(this).find(".info-icon-active").show();
            $('.transitionImg').attr('src',$(this).attr('img'));
        }
    );
    $(".scroll-icon").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 750);
    });
    $(".info-badge").click(function() {
        $('html, body').animate({
            scrollTop: $("#device-explain").offset().top - $(".navbar").height() - 50
        }, 750);
    });
    
    $(".navbar").addClass("startpage");
}