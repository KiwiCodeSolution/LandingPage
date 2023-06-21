jQuery(function () {
  $(window).on("load scroll", function () {
    if ($(this).scrollTop() >= "1") {
      $("header").css("background", "#050505");
      // $(".about ").css("background", "#050505");
    } else {
      $("header").css("background", "none");
      // $(".about ").css("background", "none");
    }
  });
});
