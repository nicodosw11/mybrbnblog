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
