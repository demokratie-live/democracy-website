function init_faq(){
    $(".w3-banner").css("display", "none");
    $(".banner").addClass("banner_nonpure2");
    $(".banner").removeClass("banner_nonpure");
    $(".m_mm").css("color","#fff");
    $(".m_mm").removeClass("active");
    $("#m_faq").addClass("active");
    $("#content").css('position', 'relative').css("right", "-3500px");
    $("#content").animate({"right":"0"}, 500);
    $("#slider3").responsiveSlides({speed: 3000});
    $('#toTopHover').click();
}