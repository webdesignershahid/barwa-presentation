(function ($) {
    "use strict";
    
    ///============= Leasing Blocs Slider =============\\\
    var galleryThumbs = new Swiper ('.step7Slider_content', {
        slidesPerView: 1,
        loop: 1,
        autoplay: false,
        allowTouchMove: false,
        loopedSlides: 7,
    });

    var sevenStepSlider = new Swiper ('.step7Slider_content_image', {
        slidesPerView: 1,
        loop: 1,
        spaceBetween: 20,
        allowTouchMove: false,
        autoplay: false,
        speed: 1000,
        loopedSlides: 7,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: '.step7Slider_content_image .btn-next',
            prevEl: '.step7Slider_content_image .btn-prev',
        },
        
    });
    sevenStepSlider.controller.control = galleryThumbs;
    galleryThumbs.controller.control = sevenStepSlider;


})(jQuery);
    

/* ============================================================ */
/* PRELOADER
/* ============================================================ */
$(window).on('load', function() {
    $(".preloader").fadeOut();     
});
