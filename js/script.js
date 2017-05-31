$(document).ready(function ($) {

    // delegate calls to data-toggle="lightbox"
    $(document).on('click', '[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox();
    });

    $(".menu_wrapper ul > li:nth-child(3) > a").on("click", function() {

        $('html, body').animate({
            scrollTop: $(".image-gallery-wrapper").offset().top
        }, 1000);
    });

    $(".menu_wrapper ul > li:nth-child(4) > a").on("click", function() {

        $('html, body').animate({
            scrollTop: $(".bot1_wrapper").offset().top
        }, 1000);
    });



});
