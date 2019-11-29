$(document).ready(function() {
	$('#header .navbar-toggler').on('click', function() {
		$('.shadow-screen').toggleClass('active')
		$('body').toggleClass('hidden')
	})



	$(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header .navbar').addClass('scrolled');
         }
         else {
             $('#header .navbar').removeClass('scrolled');
         }
    });
})