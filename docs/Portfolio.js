function SwiperBox1__init() {
  const swiper1 = new Swiper('.swiper-box-1 .swiper', {
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-box-1 .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-box-1 .swiper-button-next',
      prevEl: '.swiper-box-1 .swiper-button-prev',
    },
  });

  const swiper2 = new Swiper('.swiper-box-2 .swiper', {
    loop: true,
  });

  swiper1.controller.control = swiper2;
  swiper2.controller.control = swiper1;
}



SwiperBox1__init();

$('.top-menu-box__btn-toggle, .button-1').click(function() {
  $('html').toggleClass('top-menu-box-actived');
});
