// $(window).on('load', function() {
// // $(document).ready(function () {
//   // Animate loader off screen
//   $('.se-pre-con').fadeOut('slow');
// });


$(window).on('load', function(){
  // setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
  setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( ".se-pre-con" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( ".se-pre-con" ).remove(); //makes page more lightweight
  });
}
