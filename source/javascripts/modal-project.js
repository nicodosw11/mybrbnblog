// window.onload = function () {
//   'use strict';
//   var modal = document.querySelector("#modal");
//   var modalOverlay = document.querySelector("#modal-overlay");
//   var closeButton = document.querySelector("#close-button");
//   // var openButton = document.querySelector("#open-button");

//   closeButton.addEventListener("click", function() {
//     modal.classList.toggle("closed");
//     modalOverlay.classList.toggle("closed");
//   });

//   $('.trigger').on('click', function() {

//     $('#title-id').html($(this).data('modal-title'));
//     var modal_img_banner = $(this).attr('data-modal-img-banner');
//     var info_to_insert = "<img src=/images/" + modal_img_banner + ">";
//     $('#image-id').html(info_to_insert);
//     $('#description-title-left-id-1').html($(this).data('modal-description-title-left-1'));
//     $('#description-text-left-id-1').html($(this).data('modal-description-text-left-1'));
//     $('#description-title-left-id-2').html($(this).data('modal-description-title-left-2'));
//     $('#description-text-left-id-2').html($(this).data('modal-description-text-left-2'));
//     // $(".modal-guts").scrollTop(0);
//     $(".modal-guts").animate({ scrollTop: 0 }, "fast");
//     $("body.projects.projects_index, body.fr.fr_projects.fr_projects_index").addClass("modal-open");

//   });
// };

