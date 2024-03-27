const swiper = new Swiper('.swiper-hero', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    autoplay: {
        delay:1000,
        // delay:10000,
        pauseOnMouseEnter: true,
        },
  
    // If we need pagination
   
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
