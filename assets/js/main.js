// back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {
        $('#back-to-top').fadeIn("slow");

        var footerToTop = $(document).height() - $('footer').height();
        if($(this).scrollTop() + $(this).height() < footerToTop) {
            $('#back-to-top').css('bottom', '1em');
            $('#back-to-top').css('position', 'fixed');
        } else {
            $('#back-to-top').css('bottom', '75px');
            $('#back-to-top').css('position', 'absolute');
        }

    } else {
        $('#back-to-top').fadeOut(250);
    }
});
$('#back-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});

// disable hover effect on back-to-top button
$(document).ready(function() {
    if('ontouchstart' in window) {
        $('#back-to-top').hover(function() {
            $(this).css("transform", "none");
            $(this).css("background-color", "#f7f7f7");
        });
    }
});
