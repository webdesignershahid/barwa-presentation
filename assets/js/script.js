(function ($) {
    "use strict";

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
                // el: '.thumbs-class',
                // slidesPerView: 5,
                swiper: galleryThumbs
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }); 

    }


    // function formatDesign(state) {
    //     var selectionText = state.text.split(".");
    //     var state = selectionText[0] + "</br>" + selectionText[1];      
    //     return state;
    // }

    $('#selectLocation').select2({
        minimumResultsForSearch: Infinity,
        // formatSelection: formatDesign,
        // templateResult: formatDesign,
        
    });
    $('#selectLocation').change(function() {
        var selectedOption = $(this).val();
        $('#modal' + selectedOption).modal('show');
    });

    $(document).ready(function(e) {
        $('img[usemap]').rwdImageMaps();        
    });

})(jQuery);
