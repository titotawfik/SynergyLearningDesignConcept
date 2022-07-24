$(document).ready(function(){
    $('.slides-container').slick({
        autoplay:true,
        autoplaySpeed:5000,
        infinite:true,
        adaptiveHeight: true,
        touchThreshold:100,
        dots:true,
        arrows:false,
        dotsClass:'slick-slider-dots',
        cssEase: 'ease'
    });
});