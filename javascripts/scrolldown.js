$(document).ready(function() {
  $(window).scroll(function () {

    if ($(window).scrollTop() > (5)) {
      $('.nav-scroll').removeClass('is-hidden');
      $('body.portfolio.portfolio_index, body.fr.fr_portfolio.fr_portfolio_index').addClass('padding-top');
      $('body.projects.projects_index, body.fr.fr_projects.fr_projects_index').addClass('padding-top');
      $('body.search.search_index, body.fr.fr_search.fr_search_index').addClass('padding-top');
      $('.device').css('margin-top', 80);
    }
  });
});

