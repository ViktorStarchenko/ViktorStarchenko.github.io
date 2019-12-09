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


	$('.form-submit').on('click', function() {
		var name = $('input[name="name"]').val()
		var phone = $('input[name="phone"]').val()
		var message = $('input[name="message"]').val()

		console.log(name)
		console.log(phone)
		console.log(message)


		return false

	})

	
})