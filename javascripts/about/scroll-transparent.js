$(document).ready(function() {
  var topofDiv = $(".intro-background-image").offset().top; //gets offset of background-image
  var height = $(".intro-background-image").outerHeight(); //gets height of background-image

  $(window).scroll(function(){
      if($(window).scrollTop() > (topofDiv + height)){
        $('.transparent').addClass('solid');
        // $('.transparent-to-solid').removeClass('transparent');
      } else {
        // $('.transparent-to-solid').addClass('transparent');
        $('.transparent').removeClass('solid');
      }
  });
});
