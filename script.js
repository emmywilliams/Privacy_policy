$(document).ready(function () {
  $(window).scroll(function () {
    var currentPosition = $(this).scrollTop();
    $("section").each(function () {
      var top = $(this).offset().top - 100,
        bottom = top + $(this).outerHeight();
      if (currentPosition >= top && currentPosition <= bottom) {
        $("nav ul li a").removeClass("active");
        $('nav ul li a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });
});
