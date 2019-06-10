var modal = $("#modal-blog");
var modalDiv = modal.find(">div");
var modalBlog = $("#modal-blog-content");
var revealBlog = $(".show-blog-modal");
revealBlog.on("click", function () {
  modal.addClass("show fadeInOut");
  modalBlog.addClass("show bounceIn");
});
modal.on("click", function () {
  modal.addClass("fadeOutIn");
  modalDiv.addClass("bounceOut");
  setTimeout(function () {
    modal.removeClass("show fadeInOut fadeOutIn");
    modalDiv.removeClass("show bounceIn bounceOut");
  }, 300);
});
modalDiv.on("click", function (e) {
  e.stopPropagation();
});
