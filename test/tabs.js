$(document).ready(function(){
		$('.program__links').on('click', function(){
			var data = $(this).attr('data-toggle')

			var col =  $('.program__description')

			col.each(function(elem){
				if($(col[elem]).attr('data-toggle') == data) {
					$(this).addClass('program-active')
				} else {
					$(this).removeClass('program-active')
				}
				
			})



		})
	})