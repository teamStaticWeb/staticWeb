$(function () {

	var swiper = new Swiper('.swiper1', {
      slidesPerView: 1,
      spaceBetween: 30,
      // paginationClickable: true,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
      slideChange: function () {
        var imgWidth = 1920;
        var boxWidth = this.width;
        var left = (-(imgWidth-boxWidth)/2)+"px";
        // if(imgWidth >= boxWidth){
        //   $(".sowingMap").find("img").css({"width":"100%"});
        // }
        
      },
    }
    });
    // 带预览效果的轮播 start
     var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     
    });
//首页导航input框
  $(".search-input").mouseover(function() {
      $(this).animate({
        "width" : "245px",
        "height" : "34px"
      })
      //$(this).focus();
      $(this).css("background-color","rgba(46,46,45,.9)")
    }).focus(function(){
        //鼠标停留到焦点时 显示固定宽度
      $(this).css({"background-color":"rgba(46,46,45,.9)","width":"250px"});

    }).mouseout(function() {
      // $(this).animate({
      //   "width" : "40px",
      //   "height" : "34px"
      // })
      // $(this).val("");
      // $(this).blur();
      // $(this).css({"background-color":"rgba(46,46,45,.0)"});
    }).blur(function(){
      $(this).animate({
        "width" : "40px",
        "height" : "34px"
      })
      $(this).val("");
      $(this).css({"background-color":"rgba(46,46,45,.0)"});
    }).keyup(function(event){
      if(event.keyCode==13){
        $(this).val("");
        $(this).blur();
        $(this).css({"background-color":"rgba(46,46,45,.0)"});
      }
    });



})