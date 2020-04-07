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
		var message = $('textarea[name="message"]').val()

		console.log(name)
		console.log(phone)
		console.log(message)
		$.ajax({
			url: 'send.php',
			type: 'POST',
			data: {name: name, phone:phone, message:message},
			success: function(data) {
				if( data == 1 ) {
					alert('Cообщение успешно отправлено')
				} else if ( data == 0 ) {
					alert('При отправке сообщения возникли ошибки')
				} else if ( data == 2) {
                  	alert('Не коректно указан номер телефона')
				}
			}
		})

		return false

	})

	
})