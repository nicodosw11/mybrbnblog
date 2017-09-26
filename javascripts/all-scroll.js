$(document).ready(function() {

  $(window).scroll(function(e){
    parallascroll();
  });

  function parallascroll(){
    var scrolled = $(window).scrollTop();
    $('.background-scroll-cover-mobile').css('top',-(scrolled*0.19));
    $('.background-scroll-cover-medium').css('top',-(scrolled*0.5));
    $('.background-scroll-cover-desktop').css('top',-(scrolled*0.9));
  }
});
$(document).ready(function() {
  $(window).scroll(function () {

    if ($(window).scrollTop() > (5)) {
      $('.nav-scroll-down').removeClass('is-hidden');
      $('body.portfolio.portfolio_index, body.fr.fr_portfolio.fr_portfolio_index').addClass('padding-top');
      $('body.projects.projects_index, body.fr.fr_projects.fr_projects_index').addClass('padding-top');
      $('body.search.search_index, body.fr.fr_search.fr_search_index').addClass('padding-top');
      $('.device').css('margin-top', 80);
      $('.cards-intro').css('margin-top', 105);
    }
  });
});

$(document).ready(function() {
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.nav-scroll-up').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // var bannerHeight = $(".intro-video").height();
      var bannerHeight = $(".intro-background-image").height();
      if ($(window).scrollTop() > (bannerHeight - 10)) {
        $('.nav-scroll-up').removeClass('is-hidden');
        $('body.about.about_index, body.fr.fr_about.fr_about_index').addClass('padding-top');
      }

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.nav-scroll-up').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.nav-scroll-up').removeClass('nav-up').addClass('nav-down');
          }
      }

      lastScrollTop = st;
  }
});
