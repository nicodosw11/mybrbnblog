$(document).ready(function() {
  $(function() {
    // $("#modal-1").on("change", function() {
    $("#modal-1, #modal-2, #modal-3, #modal-4, #modal-5, #modal-6, #modal-7, #modal-8, #modal-9, #modal-10").on("change", function() {
      if ($(this).is(":checked")) {
        // $("body").addClass("modal-open");
        scrollPosition = $('body').scrollTop();
        $('body').css({
          overflow: 'hidden',
          position: 'fixed',
          width: '100%',
          height: '100%',
          top : -scrollPosition
        });
        // $('#navbar-about-medium, #navbar-about-large').css({
        //   display: 'none'
        // });
        $('#navbar-about-medium, #navbar-about-large').css(
          "z-index", "0"
        );
      } else {
        // $("body").removeClass("modal-open");
        $('body').css({
          overflow: '',
          position: '',
          top: ''
        }).scrollTop(scrollPosition);
        // $('#navbar-about-medium, #navbar-about-large').css({
        //   display: 'block'
        // });
        $('#navbar-about-medium, #navbar-about-large').css(
          "z-index", "49"
        );
      }
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
  });
});


$(document).ready(function() {
  if ($("#js-parallax-window").length) {
    parallax();
  }
  if ($("#js-parallax-window-2").length) {
    parallax2();
  }
});

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
  if ($("#js-parallax-window-2").length) {
    parallax2();
  }
});

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}
function parallax2(){
  if( $("#js-parallax-window-2").length > 0 ) {
    var plxBackground = $("#js-parallax-background-2");
    var plxWindow = $("#js-parallax-window-2");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}
;
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
$(document).ready(function() {
  $(".js-vertical-tab-content").hide();
  $(".js-vertical-tab-content:first").show();

  /* if in tab mode */

  $(".js-vertical-tab").click(function(event) {
    event.preventDefault();

    $(".js-vertical-tab-content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).show();

    $(".js-vertical-tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
  });

  /* if in accordion mode */

  // $('.js-accordion-trigger').bind('click', function(e){
  //   jQuery(this).parent().find('.vertical-tab-content').slideToggle('fast');  // apply the toggle to the ul
  //   jQuery(this).parent().toggleClass('is-expanded');
  //   e.preventDefault();
  // });

  $(".js-vertical-tab-accordion-heading").click(function(event) {
    // $("body").scrollTop(0);
    // $("body").animate({ scrollTop: 0 }, "fast");

    var self = this;
    setTimeout(function() {
      theOffset = $(self).offset();
      $('body').animate({ scrollTop: theOffset.top - 40 });
    }, 310);

    // add accordion toggling

    jQuery(this).parent().find('.js-vertical-tab-content').slideToggle('fast');
    // jQuery(this).parent().toggleClass('is-expanded');

    //

    // add scroll back up to top of the div

    // jQuery(this).parent().scrollTop(0);
    // jQuery(this).parent().animate({ scrollTop: 0 }, "fast");

    //

    event.preventDefault();

    $(".js-vertical-tab-content").hide();
    var accordion_activeTab = $(this).attr("rel");
    $("#"+accordion_activeTab).show();
    // $("#"+accordion_activeTab).scrollTop(0);
    // $("#skills").scrollTop(0);
    // $("#skills").animate({ scrollTop: 0 }, "fast");

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab").removeClass("is-active");
    $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
  });
});
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
$(document).ready(function() {

  var up=document.querySelector("#up");

  window.onscroll=function(event){
    setTimeout(function(){
      if(window.scrollY>=340){
        up.classList.add("show")
      }
      if(window.scrollY<340){
        up.className=""
      }
    }, 1000);
    up.onclick=function(){
      window.scrollTo(0,0)
    };
  };
});
