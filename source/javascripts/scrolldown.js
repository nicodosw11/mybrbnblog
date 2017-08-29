$(document).ready(function() {
  $(window).scroll(function () {

    if ($(window).scrollTop() > (5)) {
      $('.nav-search').removeClass('is-hidden');
      $('body.search.search_index, body.fr.fr_search.fr_search_index').addClass('padding-top');
      $('.device').css('margin-top', 80);
    }
  });
});

