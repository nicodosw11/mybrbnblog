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
