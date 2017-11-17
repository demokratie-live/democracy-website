function init_start(){
    $(".w3-banner").css('position', 'relative').css("right", "-3500px");
    $(".w3-banner").css("display", "block");
    $(".w3-banner").animate({"right":"0"}, 500);
    
    $(".banner").addClass("banner_nonpure");
    $(".banner").removeClass("banner_nonpure2");
    $(".m_mm").removeClass("active");
    $(".m_mm").css("color","#fff");
    $(".footer").addClass("footer_bg_grey");
}