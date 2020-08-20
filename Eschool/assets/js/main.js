////////////////////////////////////////// LAZY LOAD ///////////////////////////////////////////////////////////

// LAZY LOAD
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
  
  // LAZY LOAD
  $(document).ready(function(){
    // Lazy load
    lazyLoadWebP = el => {
      const scrollTop = $(window).scrollTop()
      const winHeight = $(window).height()
      const offset = $(el).offset().top
      const schemeHeight = $(el).height()
  
      if (scrollTop + winHeight >= offset && scrollTop <= offset + schemeHeight) {
        const src = $(el).attr('data-srcset')
        $(el).attr('srcset', src)
      }
    }
  
     $(window).on('load scroll', () => {
  
      $('.lazy-webp').each((idx, item) => {
        lazyLoadWebP(item)
      })
    })
  })




  //////////////////////////////////// ANIMATION ///////////////////////////


  $(document).ready(function(){
  // Animation
  animate = el => {
    const scrollTop = $(window).scrollTop()
    const winHeight = $(window).height()
    const offset = $(el).offset().top
    const schemeHeight = $(el).height()

    if (scrollTop + winHeight >= offset && scrollTop <= offset + schemeHeight) {
      $(el).addClass('add-animate')
      $(el).addClass('animated')
    } else {
		$(el).removeClass('add-animate')
      $(el).removeClass('animated')
    }
  }

   $(window).on('load scroll', () => {

    $('.to-animate').each((idx, item) => {
      animate(item)
    })
  })
})


///////////////////////////////////////////////////////// COUNTER ////////////////////////////////////////////////////

$(document).ready(function(){
    // Lazy load
    counter = el => {
      let data_counter = $(el).attr('data-counter')  
      const scrollTop = $(window).scrollTop()
      const winHeight = $(window).height()
      const offset = $(el).offset().top
      const schemeHeight = $(el).height()
      if (scrollTop + winHeight >= offset && scrollTop <= offset + schemeHeight) {

        $(el).spincrement({
                from: 0,                // Стартовое число
                // to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
                decimalPlaces: 0,       // Сколько знаков оставлять после запятой
                decimalPoint: ".",      // Разделитель десятичной части числа
                thousandSeparator: " ", // Разделитель тыcячных
                duration: 3000          // Продолжительность анимации в миллисекундах
            });
            $(el).removeClass('count')
      }
    }
  
     $(window).on('load scroll', () => {
  
      $('.count').each((idx, item) => {
        counter(item)
      })
    })
})


///////////////////////////////////////////// ВЫРОВНЯТЬ ВЫСОТУ ОДНОТИПНЫХ БЛОКОВ //////////////////////////
function normalizeHeigh(data) {
  let data_height = $('[data-height=' +  data + ']')

  let data_allHeight = [];
  data_height.each(function(elem){
    // console.log($(this).height())
    data_allHeight.push(parseInt($(this).height()));
  })
  slider1_maxHeight = Math.max.apply(Math, data_allHeight);
  $('[data-height=' +  data + ']').height(slider1_maxHeight)
  // console.log(data_height);
} 

// ВЫЗОВ ФУНКЦИИ ВЫРАВНИВАНИЯ ВЫСОТЫ ОДНОТИПНЫХ БЛОКОВ. СПИСОК АТРИБУТОВ
  $(document).ready(function() {
    // Одинаковая высота всех блоков
    let data_arr = ['progressText'];

    for(i=0; i<=data_arr.length; i++) {
      normalizeHeigh(data_arr[i])
    }
  })


///////////////////////////////////////////// ВЫРОВНЯТЬ ШИРИНУ ОДНОТИПНЫХ БЛОКОВ //////////////////////////
function normalizeWidth(data) {
  console.log('МЕНЯЮ ШИРИНУ')
  let data_width = $('[data-width=' +  data + ']')

  let data_allWidth = [];
  data_width.each(function(elem){
    data_allWidth.push(Math.ceil(parseInt($(this).width())));
  })
  slider1_maxWidth = Math.max.apply(Math, data_allWidth);
  $('[data-width=' +  data + ']').width(slider1_maxWidth + 1)
  // console.log(data_height);
} 

// ВЫЗОВ ФУНКЦИИ ВЫРАВНИВАНИЯ ВЫСОТЫ ОДНОТИПНЫХ БЛОКОВ. СПИСОК АТРИБУТОВ
  $(document).ready(function() {
    // Одинаковая высота всех блоков
    let data_arr = ['contuctUsLabel'];

    for(i=0; i<=data_arr.length; i++) {
      normalizeWidth(data_arr[i])
    }
  })

///////////////////////////////////////////////// SLIDERS

// $(document).ready(function(){
// 	var mySwiper = new Swiper('.partners__slider', {
//       slidesPerView: 5,
//       spaceBetween: 30,
//       loop: true,
//        autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//     })
// })

$(document).ready(function(){
	$('.partners__slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  autoplay: true,
  	autoplaySpeed: 2000,
	  responsive: [
	    {
	      breakpoint: 1025,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	})
})




