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

$(document).ready(function(){
	
	$('.some3__item-text').each(function(i,elem) {
		// console.log($(".some3__item-text").siblings())
		blockWidth = $(this).siblings();
		parentWidth = $(".some3__item-text").parent()
		console.log(parentWidth)
		console.log('Ширина родителя')
		console.log(parentWidth[i].clientWidth)
		parentWidth = parentWidth[i].clientWidth
		blockWidth = blockWidth[0].clientWidth
		result = (parseInt(parentWidth) - parseInt(blockWidth))
		console.log('Ширина фотки')
		console.log(blockWidth)
		$(this).width(blockWidth)
		$(this).css('left', result/2)
		console.log('отступ')
		console.log(result/2)
		console.log('')
	// if ($(this).hasClass("stop")) {
	// 	alert("Остановлено на " + i + "-м пункте списка.");
	// 	return false;
	// } else {
	// 	alert(i + ': ' + $(elem).text());
	// }
});
})