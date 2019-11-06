// Lazy load
lazyLoad = el => {
  const scrollTop = $(window).scrollTop()
  const winHeight = $(window).height()
  const offset = $(el).offset().top
  const schemeHeight = $(el).height()

  if (scrollTop + winHeight >= offset && scrollTop <= offset + schemeHeight) {
    const src = $(el).attr('data-src')
    $(el).attr('src', src)
  }
}

$(window).on('load scroll', () => {

  $('.lazy').each((idx, item) => {
    lazyLoad(item)
  })
})

waypoint = el => {
  const scrollTop = $(window).scrollTop()
  const winHeight = $(window).height()
  const offset = $(el).offset().top
  const schemeHeight = $(el).height()

  if (scrollTop + winHeight >= offset && scrollTop <= offset + schemeHeight) {
    $(el).addClass('animate')
  }
}

$(window).on('load scroll', () => {

  $('.digits-and-description').each((idx, item) => {
    waypoint(item)
  })
})



// Mobile menu
$(document).ready(function(){
	$('.burger-button').on('click', function(){
		$('html').addClass('hidden')
		$('body').addClass('hidden')
		$('.overlay').addClass('active')
		$('.header-mobile.main').addClass('active')
	})

	$('body').on('click', function(e){
		if(e.target.className == 'close' || e.target.className == 'overlay active') {
			$('html').removeClass('hidden')
			$('body').removeClass('hidden')
			$('.header-mobile.main.active').removeClass('active')
			// $('.overlay').removeClass('actisve')

			setTimeout(function() {
		       $('.overlay').removeClass('active')
		   }, 100);
			
			$('.header-mobile.sub-production.active').removeClass('active')
		}
		
	})

	// $('.main-nav__item-wr').on('click', function(){
	// 	$('.header-mobile.main.active').removeClass('active')
	// 	$('.header-mobile.sub-production').addClass('active')
		
	// })


// 	$('body').on('click', function(e){
// 		console.log(e.target)
// 		if(e.target.className == 'arrow' || e.target.tagName == 'svg') {

// 		$('.header-mobile.main').addClass('active')
// 		$('.header-mobile.sub-production.active').removeClass('active')
// 		}	
// 	})

// 	$('body').on('click', function(e){
// 		console.log(e.target)
// 		if(e.target.className == 'second-nav__item second-nav__item-main') {
// 			$(this).next('.moveout_body').addClass('active')
// 		// $('.header-mobile .sub-menu.sub-menu-production').addClass('active')
// 		$('.header-mobile.sub-production.active').removeClass('active')
// 		}
		
// 	})
})

// Promo carousel
$(document).ready(function(){
  $(".promo-block").owlCarousel({
  	autoplay: true,
  	items:1,
  	loop:true,
    nav:false,
    dots: true
  });
});


// Clients carousel
$(document).ready(function(){
  $(".clients__slider-wrap").owlCarousel({
  	autoplay: true,
  	items:4,
  	loop:true,
    nav:true,
    navText: [$('#clients__slider_nav-prev'),$('#clients__slider_nav-next')],
    dots: false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        430:{
            items:1,
            nav:true,
        },
        767:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
  });
});



// Smooth scroll
$(document).ready(function(){

    $("#app, footer, .overlay, .place-for-to-manager, main").on("click",".crane", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top-100}, 1500);
    });
});


// Form message modal
    // $(document).ready(function() {
    //     $('body').on('click', function(e) {
    //         if (e.target.className == 'form-submit' ) {
    //             var name = $('input[name="name"]').val();
    //             var phone = $('input[name="phone"]').val();
    //             var email = $('input[name="email"]').val();
    //             $.ajax({
    //                 type: 'POST',
    //                 url: 'send.php',
    //                 data: {name:name, phone:phone, email:email},
    //                 success: function(data) {
    //                     if( data == 1 ) {
    //                         $('.form-message__inner').text('Cообщение успешно отправлено')
    //                         $('.form-message').addClass('active')
    //                         $('.form-message').addClass('success')

    //                         $('input[name="name"]').val("")
    //                         $('input[name="phone"]').val("")
    //                         $('input[name="email"]').val("")

    //                     } else if ( data == 0 ) {
    //                         $('.form-message__inner').text('При отправке сообщения возникли ошибки')
    //                         $('.form-message').addClass('active')
    //                         $('.form-message').addClass('error')

    //                         $('input[name="name"]').val("")
    //                         $('input[name="phone"]').val("")
    //                         $('input[name="email"]').val("")
    //                     }
    //                 },
    //                 complete: function(data) {
    //                     setTimeout(function() {
    //                        $('.form-message').removeClass('active')
    //                        $('.form-message').removeClass('error')
    //                        $('.form-message').removeClass('success')
    //                        $('.form-message__inner').text('')
    //                    }, 2500);
    //                 }
    //             })
    //         }
    //         return false;
    //     })
    // })

        $(document).ready(function() {
        $('.form-submit').on('click', function(e) {
                var name = $('input[name="name"]').val();
                var phone = $('input[name="phone"]').val();
                var message = $('textarea[name="message"]').val();
                $.ajax({
                    type: 'POST',
                    url: 'send.php',
                    data: {name:name, phone:phone, message:message},
                    success: function(data) {
                        if( data == 1 ) {
                            $('.form-message__inner').text('Cообщение успешно отправлено')
                            $('.form-message').addClass('active')
                            $('.form-message').addClass('success')

                            $('input[name="name"]').val("")
                            $('input[name="phone"]').val("")
                            $('textarea[name="message"]').val("")

                        } else if ( data == 0 ) {
                            $('.form-message__inner').text('При отправке сообщения возникли ошибки')
                            $('.form-message').addClass('active')
                            $('.form-message').addClass('error')

                            // $('input[name="name"]').val("")
                            // $('input[name="phone"]').val("")
                            // $('textarea[name="message"]').val("")
                        } else if ( data == 2) {
                          $('.form-message__inner').text('Не коректно указан номер телефона')
                            $('.form-message').addClass('active')
                            $('.form-message').addClass('error')
                        }
                    },
                    complete: function(data) {
                        setTimeout(function() {
                           $('.form-message').removeClass('active')
                           $('.form-message').removeClass('error')
                           $('.form-message').removeClass('success')
                           $('.form-message__inner').text('')
                       }, 2500);
                    }
                })

            return false;
        })
    })

$(document).ready(function() {
    $('.main-nav__item.crane').on('click', function(){
        $('html').removeClass('hidden')
            $('body').removeClass('hidden')
            $('.header-mobile.main.active').removeClass('active')
            // $('.overlay').removeClass('actisve')

            setTimeout(function() {
               $('.overlay').removeClass('active')
           }, 100);
            
            $('.header-mobile.sub-production.active').removeClass('active')
    }) 
})