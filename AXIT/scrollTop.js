   $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('.navbar').addClass('header-scrolled')
         }
         else {
             $('.navbar').removeClass('header-scrolled')
         }
    });