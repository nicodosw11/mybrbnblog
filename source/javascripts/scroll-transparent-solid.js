$(document).ready(function() {
  $(window).scroll(function() {
    var bannerHeight = $(".intro-background-image").height();
    var fixedbannerHeight = bannerHeight * 2;
    if($(this).scrollTop() > fixedbannerHeight) {
        $('.transparent').addClass('solid');
    } else {
        $('.transparent').removeClass('solid');
    }
  });
});
