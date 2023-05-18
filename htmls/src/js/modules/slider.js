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

  const $listSlideProd = $('.list-slide-prod');
  $listSlideProd.slick({
    vertical: true,
    draggable: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.80831 7.63135C6.41551 8.12288 5.58448 8.12288 5.19169 7.63135L0.180075 1.35992C-0.277683 0.787092 0.190147 -5.04178e-08 0.988382 0L11.0116 6.33083e-07C11.8099 6.83501e-07 12.2777 0.787092 11.8199 1.35992L6.80831 7.63135Z" fill="white"/></svg></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.19169 0.36865C5.58449 -0.122883 6.41552 -0.122885 6.80831 0.368649L11.8199 6.64008C12.2777 7.21291 11.8099 8 11.0116 8L0.988382 8C0.190146 8 -0.277684 7.21291 0.180074 6.64008L5.19169 0.36865Z" fill="white"/></svg></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    asNavFor: '.image-slide-prod',
  });
  const $imageSlideProd = $('.image-slide-prod');
  $imageSlideProd.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.80831 7.63135C6.41551 8.12288 5.58448 8.12288 5.19169 7.63135L0.180075 1.35992C-0.277683 0.787092 0.190147 -5.04178e-08 0.988382 0L11.0116 6.33083e-07C11.8099 6.83501e-07 12.2777 0.787092 11.8199 1.35992L6.80831 7.63135Z" fill="white"/></svg></button>',
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.19169 0.36865C5.58449 -0.122883 6.41552 -0.122885 6.80831 0.368649L11.8199 6.64008C12.2777 7.21291 11.8099 8 11.0116 8L0.988382 8C0.190146 8 -0.277684 7.21291 0.180074 6.64008L5.19169 0.36865Z" fill="white"/></svg></button>',
    centerMode: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    centerPadding: 0,
    asNavFor: '.list-slide-prod',
  });
}