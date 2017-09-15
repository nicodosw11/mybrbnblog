$(window).on('load', function(){
  // setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
  setTimeout(removeLoader, 1000);

  // $('.intro-video').delay(1000).hide(28000);
  // $('.intro-about').delay(1000).fadeIn(28000);
  // $(".intro-video").remove();

  setTimeout(function(){
    // document.getElementById('section-intro-video').style.display = 'none';
    // document.getElementById('section-intro-fs').style.display = 'block';
    document.getElementById('section-intro-video').remove();
    document.getElementById('background-overlay').remove();
  }, 14000); //14secs



});
