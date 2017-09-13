$(document).ready(function() {
  $(window).scroll(function() {
    var bannerHeight = $(".intro-background-image").height();
    var fixedbannerHeight = bannerHeight * 2;
    if($(this).scrollTop() > fixedbannerHeight) {
      $('.transparent-to-solid').addClass('solid');
      $('.transparent-to-solid').removeClass('transparent');
    } else {
      $('.transparent-to-solid').addClass('transparent');
      $('.transparent-to-solid').removeClass('solid');
    }
  });
});

// $(document).ready(function() {
//   var topofDiv = $(".intro-background-image").offset().top; //gets offset of background-image
//   var height = $(".intro-background-image").outerHeight(); //gets height of background-image

//   $(window).scroll(function(){
//       if($(window).scrollTop() > (topofDiv + height)){
//         $('.transparent-to-solid').addClass('solid');
//         $('.transparent-to-solid').removeClass('transparent');
//       } else {
//         $('.transparent-to-solid').addClass('transparent');
//         $('.transparent-to-solid').removeClass('solid');
//       }
//   });
// });

// $(document).ready(function() {
//   $(window).scroll(function() {
//     var bannerHeight = $(".intro-background-image").height();
//     var introductionsHeight = $("#hi").height();
//     var totalHeight = bannerHeight + introductionsHeight;
//     if($(this).scrollTop() > totalHeight) {
//         $('.transparent').addClass('solid');
//     } else {
//         $('.transparent').removeClass('solid');
//     }
//   });
// });
