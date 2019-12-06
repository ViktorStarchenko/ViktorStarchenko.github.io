$(document).ready(function() {
	$('.callback').on('click', function(){
		$('.shadow-screen').toggleClass('active')
		$('.callback-form').toggleClass('active')

		$('.shadow-screen.active').on('click', function(e){
			if(e.target.className != 'callback-form' ) {
				$('.shadow-screen.active').removeClass('active')
				$('.callback-form.active').removeClass('active')
			}
			
		})
	})

	
})