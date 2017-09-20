$(document).ready(function() {
  $(window).scroll(function() {
    // var bannerHeight = $(".intro-background-image").height();
    // var scrolledbannerHeight = bannerHeight - 10;
    // if($(this).scrollTop() > scrolledbannerHeight) {
    // if($(this).scrollTop() > (bannerHeight - 10)) {
    if($(this).scrollTop() > 10) {
      $('.transparent-to-solid').addClass('solid');
      $('.transparent-to-solid').removeClass('transparent');
    } else {
      $('.transparent-to-solid').addClass('transparent');
      $('.transparent-to-solid').removeClass('solid');
    }
  });
});

// $(document).ready(function() {
//   $(window).scroll(function() {
//     var bannerHeight = $(".intro-background-image").height();
//     var fixedbannerHeight = bannerHeight * 2;
//     if($(this).scrollTop() > fixedbannerHeight) {
//       $('.transparent-to-solid').addClass('solid');
//       $('.transparent-to-solid').removeClass('transparent');
//     } else {
//       $('.transparent-to-solid').addClass('transparent');
//       $('.transparent-to-solid').removeClass('solid');
//     }
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
