function init_prototyp(){
    $(".w3-banner").css("display", "none");
    $(".banner").addClass("banner_nonpure2");
    $(".banner").removeClass("banner_nonpure");
    $("#content").css('position', 'relative').css("right", "-3500px");
    $("#content").animate({"right":"0"}, 500);
}