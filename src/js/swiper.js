const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,

  //   speed: 400,
  // slidesPerView: 3,
  // spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    481: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1281: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
