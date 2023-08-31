$(".js-scroll-trigger").click(function (event) {
  event.preventDefault();

  var targetId = $(this).attr("href");

  setTimeout(function () {
    $(".navbar-collapse").collapse("hide");
  }, 300);

  $("html, body").animate(
    {
      scrollTop: $(targetId).offset().top,
    },
    1000,
    "easeInOutExpo"
  );
});
