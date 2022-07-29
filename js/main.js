window.onload = function(){
    var swiper_big = new Swiper(".mySwiper_big", {
      direction: "vertical",
      speed:700,
      mousewheel: true,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
        },
      },
      on: {
        slideChangeTransitionStart: function() {
          if(swiper_big.activeIndex == 1){
            swiper_big.mousewheel.disable();
          }else{
            swiper_big.mousewheel.enable();
          }
        }
      },
      nested: true,
      
    });
    

    var swiper_slide1 = new Swiper(".mySwiper_main", {
        loop: true,
        speed:1000,
        effect: "fade",
        
        autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    var swiper_slide2_left = new Swiper(".mySwiper_slide2_left", {
        effect: "creative",
        mousewheel: true,
        watchSlidesProgress: true,
        slidesPerView: 1,
        creativeEffect: {
          prev: {
            shadow: false,
            translate: ["-100%", 0, 0],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        
        on: {
          toEdge: function() {
            setTimeout(
              function(){
                swiper_big.mousewheel.enable();//활성
              }, 500
            );
          },
        },
    });
    
    var swiper_slide2_right = new Swiper(".mySwiper_slide2_right", {
        effect: "creative",
        mousewheel: true,
        watchSlidesProgress: true,
        slidesPerView: 1,
        creativeEffect: {
          prev: {
            shadow: false,
            translate: ["-100%", 0, 0],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        
        on: {
          
          toEdge: function() {
            setTimeout(
              function(){
                swiper_big.mousewheel.enable();//활성
              }, 500
            );
          },
          
          
        },
        
    });
    swiper_slide2_left.controller.control = swiper_slide2_right;
    swiper_slide2_right.controller.control = swiper_slide2_left;


}
