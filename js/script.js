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

    // Load posts from tumblr
    function loadPosts () {

        var key = "api_key=iSCTzggSVfQGj4CkKfEmBSShk0T7J0qtj6dBMwb4b1ixavvS1h";
        var api = "https://api.tumblr.com/v2/blog/sergeymisharin.tumblr.com/";

        $.getJSON(api + "posts/text?callback=?&filter=text&limit=3&offset=0&" + key,function(data) {
            $.each(data.response.posts, function(i, item) {
                var content = item.body;
                var divWithContent = '<div class="col-sm-6">' + content + '</div>';
                $(".space_weather").append(divWithContent);
            });

        });
    }

    loadPosts();

});
