// галерея
$('.slick-slider.gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $('.bg-white-popular .owl-nav button.owl-prev'),
    nextArrow: $('.bg-white-popular .owl-nav button.owl-next'),
    infinite: false,
    
    
});
    // autoplay: true,autoplaySpeed: 1000

//отзывы
$('.slick-slider.reviews').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $('.bg-white-reviews .owl-nav button.owl-prev'),
    nextArrow: $('.bg-white-reviews .owl-nav button.owl-next'),
    infinite: true,
});

//контакты
$('.slick.block-specialist').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    
});