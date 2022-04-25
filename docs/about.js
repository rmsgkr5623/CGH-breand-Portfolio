const swiper = new Swiper('.swiper', {
  speed: 600,
  centeredSlides: true,
  slidesPerView:3,
  spaceBetween:40,
  loop: true,
  

  // If we need pagination
  
  pagination: {
    el: '.swiper-box-1 .swiper-pagination',
    clickable: true
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-box-1 .swiper-button-next',
    prevEl: '.swiper-box-1 .swiper-button-prev',
  },
});

 AOS.init();

$('.top-menu-box__btn-toggle').click(function() {
  $('html').toggleClass('top-menu-box-actived');
});
