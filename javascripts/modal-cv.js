$(document).ready(function() {
  $(function() {
    // $("#modal-1").on("change", function() {
    $("#modal-1, #modal-2, #modal-3, #modal-4, #modal-5, #modal-6, #modal-7 ").on("change", function() {
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
      } else {
        // $("body").removeClass("modal-open");
        $('body').css({
          overflow: '',
          position: '',
          top: ''
        }).scrollTop(scrollPosition);
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


