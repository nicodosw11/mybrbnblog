$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.background-cover').css('top',-(scrolled*0.15)+'px');
}
;
