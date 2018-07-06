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


  $(".search-input").focus(function() {
      $(this).animate({
        "width" : "230px",
        "height" : "34px"
      })

    }).blur(function() {
      $(this).animate({
        "width" : "50px",
        "height" : "34px"
      })
      $(this).val("");
    }).mouseout(function(){
      $(this).animate({
        "width" : "50px",
        "height" : "34px"
      })
      $(this).val("");
    });

})