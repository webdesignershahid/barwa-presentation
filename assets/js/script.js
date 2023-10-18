(function ($) {
    "use strict";
    
    ///============= Leasing Blocs Slider =============\\\
    // $(".modal").on('show.bs.modal', function() {



    var galleryThumbSlide = new Swiper ('.galleryThumbslider', {
        slidesPerView: 2,
        spaceBetween: 15,
        autoplay: false,
        speed: 1000,
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 15,
            },
        },
        navigation: {
            nextEl: '.step7Slider_content_image .btn-next',
            prevEl: '.step7Slider_content_image .btn-prev',
        },
        
    });
    var gallerySlide = new Swiper ('.gallerySlider', {
        slidesPerView: 1,
        autoplay: false,
        spaceBetween: 15,
        thumbs: {
            swiper: galleryThumbSlide,
        },
    });
// })


})(jQuery);
    

/* ============================================================ */
/* PRELOADER
/* ============================================================ */
$(window).on('load', function() {
    $(".preloader").fadeOut();     
});
