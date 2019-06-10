var nav = $("#nav.scrollable");
var windowHeight = document.documentElement.clientHeight; /* &onscroll */
$(window).on("scroll", function () {
  if (window.pageYOffset > 60) {
    nav.addClass("scrolled");

  }
  if (window.pageYOffset <= 60) {
    nav.removeClass("scrolled");

  }
});
