   $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('.header').addClass('header-scrolled')
         }
         else {
             $('.header').removeClass('header-scrolled')
         }
    });