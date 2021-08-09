function init_about() {
  $(".nav-item").removeClass("active");
  $("#menu_about").parent().addClass("active");
  $(".navbar").removeClass("startpage");
  $(".team_div").hover(
    function () {
      var img = $(this).find("img");
      if (img.attr("hover")) {
        img.attr("src", img.attr("hover"));
      }
      $(this).find(".team_text").hide();
      $(this).find(".team_links").show();
    },
    function () {
      var img = $(this).find("img");
      img.attr("src", img.attr("normal"));
      $(this).find(".team_text").show();
      $(this).find(".team_links").hide();
    }
  );
  $("iframe.yt-hd-thumbnail").youTubeHDThumbnail({
    darkenThumbnail: false,
  });
}
