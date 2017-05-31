$(document).ready(function ($) {

    // delegate calls to data-toggle="lightbox"
    $(document).on('click', '[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox();
    });

    var scrollToElement = function (selector) {
        $('html, body').animate({
            scrollTop: $('.' + selector).offset().top
        }, 1000);
    };
    $(".menu_wrapper ul > li a, .bot1_wrapper ul > li a").on("click", function() {
        scrollToElement($(this).data('element'));
    });

});
