jQuery(document).ready(function () {
    $(".home-section").ripples({
        dropRadius: 20,
        perturbance: 0.01,
    });
});

/* owlCarousel Blog
    -------------------------------------------------------*/
$(".blog .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 500,
    stopOnHover: true,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 2,
            nav: false,
        },
        1000: {
            items: 3,
            nav: false,
            loop: false,
        },
    },
});


//Testimonial Carousel
$('#testimonial-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    autoplay:true,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});