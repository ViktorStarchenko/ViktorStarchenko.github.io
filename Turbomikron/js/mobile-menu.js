
$(document).ready(function(){
	// open mobile_menu
	$('.hamburger').on('click', function(){
		$('#mobile_menu').toggleClass('menu-active')
		$('#menu-shadow').toggleClass('shadow-active')
	})
	// close mobile_menu
	$('#menu-shadow').on('click', function(){
		$('#mobile_menu').removeClass('menu-active')
		$('#menu-shadow').removeClass('shadow-active')
	})

	// activate dropdown
	$('.mobile-menu__list .sub .menu_toggle').on('click', function(){
		$(this).siblings(".dropdown").toggle()
		$(this).parent(".sub").children('a').toggleClass('text-green')
	})

})