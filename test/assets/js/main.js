$(document).ready(function(){
	$('.header__burger-inner').on('click', function(){
		$(this).toggleClass('active')
		$('.header__top-collapse').toggleClass('active')
		$('.header__burger-cross').toggleClass('active')
	})

	$('.header__burger-cross').on('click', function(){
		$(this).toggleClass('active')
		$('.header__top-collapse').toggleClass('active')
		$('.header__burger-inner').toggleClass('active')
	})
})