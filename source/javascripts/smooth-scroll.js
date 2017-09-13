$(".down-arrow").click(function() {
  $('html, body').animate({
      scrollTop: $("#hi").offset().top
  }, 2000);
  return false;
});

// $('#down-arrow').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 2000);
//     return false;
// });
