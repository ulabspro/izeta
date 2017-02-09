$(".service-slider").slick({

  // normal options...
  infinite: false,

  slidesToShow: 3,
  arrows: true,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }]
});