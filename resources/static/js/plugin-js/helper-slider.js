$(document).ready(function () {

    $('.owl-carousel.slider-1').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {

            0: {
                items:1
            },

            600: {
                items:3
            },

            1000: {
                items:3
            }
        }
    });

    $('.owl-carousel.slider-2').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav: true,
        navText: [
			"<span class='fas fa-long-arrow-alt-left'></span>",
			"<span class='fas fa-long-arrow-alt-right'></span>"
        ],
        responsive: {

            0: {
                items:1
            },

            600: {
                items:3
            },

            1000: {
                items:3
            }
        }
    });

    $('.owl-carousel.slider-3').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav: true,
        navText: [
			"<span class='fas fa-long-arrow-alt-left'></span>",
			"<span class='fas fa-long-arrow-alt-right'></span>"
        ],
        center: true,
        activeClass: 'active',
        centerClass: 'center',
        responsive: {

            0: {
                items:1
            },

            600: {
                items:3
            },

            1000: {
                items:3
            }
        }
    });

    $('.owl-carousel.slider-4').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoWidth: true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav: true,
        navText: [
			"<span class='fas fa-long-arrow-alt-left'></span>",
			"<span class='fas fa-long-arrow-alt-right'></span>"
        ],
        responsive: {

            0: {
                items:1
            },

            600: {
                items:3
            },

            1000: {
                items:3
            }
        }
    });

    $('.owl-carousel.slider-5').owlCarousel({
        items: 3,
        rtl: true,
        loop: true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        margin: 10,
        nav: true,
        navText: [
			"<span class='fas fa-long-arrow-alt-left'></span>",
			"<span class='fas fa-long-arrow-alt-right'></span>"
        ],
        responsive: {

            0: {
                items:1
            },

            600: {
                items:3
            },

            1000: {
                items:3
            }
        }
    });

    $('.owl-carousel.slider-6').owlCarousel({
        items: 3,
        loop: true,
        video: true,
        merge: true,
        videoHeight: 200,
        videoWidth: true,
        margin: 10,
        nav: true,
        navText: [
			"<span class='fas fa-long-arrow-alt-left'></span>",
			"<span class='fas fa-long-arrow-alt-right'></span>"
        ],
        responsive: {

            0: {
                items:1
            },

            600: {
                items:3
            },

            1000: {
                items:3
            }
        }
    });
});
