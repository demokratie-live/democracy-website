function init_home(){
    var video = document.getElementsByTagName('video')[0];

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

            video.pause();
            $('#video-mp4').attr('src',$(this).attr('data-mp4'));
            $('#video-webm').attr('src',$(this).attr('data-webm'));
            video.load();
            video.play();
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
    
    // Start Slide
    WahlOMeterTimer();
    
    // Adjust Video Height
    // $('#video').height($('#video').width()*9/16);
}

function WahlOMeterTimer(){
    setTimeout(function () {
        $('.slide-default').toggle();
        $('.slide-wahlometer').toggle();
        WahlOMeterTimer();
    }, 9500);
}