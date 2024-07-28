let navbar = $('.navbar')

$(window).on('scroll', function () {
    let currentScroll = $(window).scrollTop(); // it returns the current vertical position of the Scroll 
    let scrollAbout = $('#about').offset().top;
    if (currentScroll > scrollAbout - $(navbar).outerHeight(true)) {
        $(navbar).css('backgroundColor', 'rgba(0,0,0,0.7)')
    }
    else {
        $(navbar).css('backgroundColor', 'transparent')
    }
})

// loading Screen
$(function () {
    $('.loader').fadeOut(1000, function () {
        $('.loading').slideUp(1000, function () {
            $('body').css('overflow', 'auto');
            $('.loading').remove()
        })
    })
})
