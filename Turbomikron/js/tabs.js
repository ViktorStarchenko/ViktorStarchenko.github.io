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



	// BRAND-REASONS tabs
	$('#brand-reason__left').on('click', function() {
		$('.brand-reason__left').show()
		$('.brand-reason__right').hide()
	})

	$('#brand-reason__right').on('click', function() {
		$('.brand-reason__right').show()
		$('.brand-reason__left').hide()
	})


})


