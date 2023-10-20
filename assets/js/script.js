(function ($) {
    "use strict";

    // Preloader
    $(window).on('DOMContentLoaded', function() {
        if ($('.preloader').length) {
            $('.preloader').delay(2000).fadeOut(1000);
        }
    });

    // Modal Gallery Slider with thumbnail
    var myCustomSlider = document.querySelectorAll('.gallerySlider');
    var myCustomGalleryThumbs = document.querySelectorAll('.galleryThumbslider');

    for (var i = 0; i < myCustomSlider.length; i++) {

        myCustomSlider[i].classList.add('gallerySlider-' + i);
        myCustomGalleryThumbs[i].classList.add('thumbs-class-' + i);

        var galleryThumbs = new Swiper('.thumbs-class-' + i , {
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
                nextEl: '.swiper-button-prev',
                prevEl: '.swiper-button-next',
            },
        });

        var galleryTop = new Swiper('.gallerySlider-' + i, {
            spaceBetween: 10,
            thumbs: {
                swiper: galleryThumbs
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }); 

    }


    // Select2 list formate with line break for en and ar
    function formatDesign(item) {
        var selectionText = item.text.split("*");
        var $item = $(
            '<div>' + selectionText[0] + '</div>' + '<div>' + selectionText[1] + '</div>'
        );
        return $item;
    }

    // Initialize select2
    $('.select2').select2({
        minimumResultsForSearch: Infinity, // disable search box
        templateResult: formatDesign,
        templateSelection: formatDesign,        
    });

    // show modal of the value from select option
    $('.select2').change(function() {
        var selectedOption = $(this).val();
        $('#modal' + selectedOption).modal('show');
    });

    // Location mapping image responsive
    $(document).ready(function(e) {
        $('img[usemap]').rwdImageMaps();        
    });

})(jQuery);
