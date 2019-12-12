$(document).ready(function() {
	$('#header .navbar-toggler').on('click', function() {
		$('.shadow-screen').toggleClass('active')
		$('body').toggleClass('hidden')
	})



	$(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header .navbar').addClass('scrolled');
         }
         else {
             $('#header .navbar').removeClass('scrolled');
         }
    });


})
// $('.some').galereya();



$(document).ready(function(){
	
	$('.photogallery__item-text').each(function(i,elem) {
		// console.log($(".some3__item-text").siblings())
		blockWidth = $(this).siblings();
		parentWidth = $(".photogallery__item-text").parent()

		parentWidth = parentWidth[i].clientWidth
		blockWidth = blockWidth[1].clientWidth
		result = (parseInt(parentWidth) - parseInt(blockWidth))

		$(this).width(blockWidth)
		$(this).css('left', result/2)


	$('.photogallery__item:nth-child(1), .photogallery__item:nth-child(4), .photogallery__item:nth-child(5)').mouseenter( function() {
		$('.photogallery__logo').addClass('hidden')
	})
	$('.photogallery__item:nth-child(1), .photogallery__item:nth-child(4), .photogallery__item:nth-child(5)').mouseleave( function() {
		$('.photogallery__logo').removeClass('hidden')
	});
	// $('.photogallery__item:nth-child(4)').mouseover(function() {
	// 	$('.photogallery__logo').hide()

	// 	return false;
	// })
});
})

// Smooth scroll
$(document).ready(function(){

    $("header").on("click",".crane", function (event) {
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


$(document).ready(function(){
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
})


$(document).ready(function(){
  $('.photogallery-page__slider-wrap').slick({
  		fade: true,
        adaptiveHeight: true,
        autoplay: !0,
        autoplaySpeed: 2e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !0,
        dots: !0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: false,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: false,
                // variableWidth: true

            }
        }]
    });
});