const initReviewsSlider = () => {

  const $reviewsSlider = $('.reviews-slider');

  $reviewsSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3800,
    dots: true,
    prevArrow: `<span class="slider-arrow is-prev">
                  <img src="img/arrow-left.png" width="40" height="40">
                </span>`,
    nextArrow: `<span class="slider-arrow is-next">
                  <img src="img/arrow-right.png" width="40" height="40">
                </span>`,
  });
}

const initChildrenSlider = () => {

  const $childrenSlider = $('.children-slider');

  $childrenSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3800,
    dots: true,
    prevArrow: `<span class="slider-arrow is-prev">
                  <img src="img/arrow-red-left.png" width="40" height="40">
                </span>`,
    nextArrow: `<span class="slider-arrow is-next">
                  <img src="img/arrow-red-right.png" width="40" height="40">
                </span>`,
    responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 375,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]

  });
}

$(document).ready(()=> {
  initReviewsSlider();
  initChildrenSlider();
})
