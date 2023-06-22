const swiper = new Swiper(".swiper", {
  loop: true,

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
    320: {
      slidesPerView: 1,
    },

    481: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    769: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1281: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
