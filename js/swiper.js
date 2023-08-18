const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    effect: "coverflow",

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
  });