$(document).ready(function () {
    $('#portfolio-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#portfolio-section').offset().top
        }, 1500);
    });
    $('#contact-button').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact-section').offset().top
        }, 1500);
    });
});