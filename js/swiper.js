const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    effect: "flip",

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    flip: {
      limitRotation: true,
      slideShadows: false,
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-forward',
    //   prevEl: '.swiper-button-back',
    // },

    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });