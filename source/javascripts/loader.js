// $(window).on('load', function() {
// // $(document).ready(function () {
//   // Animate loader off screen
//   $('.se-pre-con').fadeOut('slow');
// });


$(window).on('load', function(){
  // setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
  setTimeout(removeLoader, 1000);

  // $('.intro-video').delay(1000).hide(28000);
  // $('.intro-about').delay(1000).fadeIn(28000);
  // $(".intro-video").remove();

  setTimeout(function(){
    document.getElementById('section-intro-video').style.display = 'none';
    document.getElementById('section-intro-fs').style.display = 'block';
    $(".intro-video").remove();
  }, 14000); //14secs



});
function removeLoader(){
    $( ".se-pre-con" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( ".se-pre-con" ).remove(); //makes page more lightweight
  });
}

function preloader(){
  document.getElementById("loading").style.display = "none";
  document.getElementById("content").style.display = "block";
}//preloader
window.onload = preloader;
