			$(document).ready(function(){
				$('body').on('click', function (e){
					if ( e.target.className == 'block1__order-button btn') {
						$('.hidden-shadow').show();
						console.log('done');
						hideShadow();
					}
				})
			})
			function hideShadow() {
				$(document).ready(function(){
				$('body').on('click', function (event){

					if ( event.target.className != 'block1__order-button btn' &&  event.target.className != 'notification-box' && event.target.className != 'notification-box') {
						$('.hidden-shadow').hide();
						console.log('pidr');
						}
					})
				})
			}