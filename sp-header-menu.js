$(function() {
    $('.toggle, .sp-nav-wrap nav ul li').click(function() {
        $('.toggle').toggleClass('active');
 
        if ($('.toggle').hasClass('active')) {
            $('.sp-nav-wrap nav').addClass('active');
        } else {
            $('.sp-nav-wrap nav').removeClass('active');
        }
    });
});