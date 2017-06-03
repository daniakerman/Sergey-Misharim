$(document).ready(function ($) {

    // delegate calls to data-toggle="lightbox"
    $(document).on('click', '[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox();
    });

    var scrollToElement = function (htmlClass) {
        $('html, body').animate({
            scrollTop: $('.' + htmlClass).offset().top
        }, 1000);
    };
    $(".menu_wrapper ul > li a, .bot1_wrapper ul > li a").on("click", function() {
        var htmlClass = $(this).data('element');
        scrollToElement(htmlClass);
    });

});
