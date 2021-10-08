$(document).ready(function(){
    $(".btns").mouseover(function() {
      $(this).find('.content').stop().animate({right:80}, 100);  
    })
    $(".btns").mouseout(function() {
        $(this).find('.content').stop().animate({left:80}, 100);  
      })
  

})