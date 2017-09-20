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
    // $("#section-experience").scrollTop(0);
    $("#section-skills").animate({ scrollTop: 0 }, "fast");

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab").removeClass("is-active");
    $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
  });
});
