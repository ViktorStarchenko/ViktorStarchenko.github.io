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
// $('.some').galereya();

var container = document.querySelector('.some2');
var msnry = new Masonry( container, {
  // Настройки
  columnWidth: 60,
  itemSelector: '.some2__item',
  gutter: 10
});