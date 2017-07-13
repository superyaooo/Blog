// back to top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {
        $('#back-to-top').fadeIn(200);
    } else {
        $('#back-to-top').fadeOut(200);
    }
});
$('#back-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
