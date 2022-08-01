$(document).ready(function(){
  $('.slides-container').slick({
    autoplay:true,
    autoplaySpeed:5000,
    adaptiveHeight: true,
    touchThreshold:100,
    dots:true,
    arrows:false,
    lazyLoad: 'progressive',
    dotsClass:'slick-slider-dots',
    cssEase: 'ease'
  });
});
