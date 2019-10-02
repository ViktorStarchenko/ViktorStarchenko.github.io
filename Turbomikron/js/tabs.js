$(document).ready(function() {
	// brand description tabs
	$('#button-aab').on('click', function() {
		$('.offer-description__wrapper_aab').show()
		$('.offer-description__wrapper_siemens').hide()
	})

	$('#button-siemens').on('click', function() {
		$('.offer-description__wrapper_siemens').show()
		$('.offer-description__wrapper_aab').hide()
	})


	// arrows
	$('#why-us__banner-button').on('click', function() {
		console.log('hello')
		$('#away-left').css({'transform': 'translateX(-2000px)', 'transition-duration': '3s'})
		$('#away-right').css({'transform': 'translateX(2000px)', 'transition-duration': '3s'})
	})




})


