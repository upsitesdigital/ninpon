/**
 * Slider
 */
export default function() {
  const $fullslider = $('.slide-full');
  $fullslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });

  const $seriesslider = $('.slide-series');
  $seriesslider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg class="icon fill"><use xlink:href="assets/img/icons.svg#angle-right"></use></svg></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg class="icon fill"><use xlink:href="assets/img/icons.svg#angle-left"></use></svg></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });

  const $prodslider = $('.slide-prod');
  $prodslider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg class="icon fill"><use xlink:href="assets/img/icons.svg#angle-right"></use></svg></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg class="icon fill"><use xlink:href="assets/img/icons.svg#angle-left"></use></svg></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });

  const $logosslider = $('.slide-logos');
  $logosslider.slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg class="icon fill"><use xlink:href="assets/img/icons.svg#angle-right"></use></svg></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg class="icon fill"><use xlink:href="assets/img/icons.svg#angle-left"></use></svg></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0
  });
}