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


///////////////////////////////////// TELEPHONE MASK///////////////////
$(".tel-mask").mask("+38 (999) 999-99-99",{
      completed:function(){ 
        $(this).parent().removeClass('incorrect').addClass('correct');
      }, autoclear: true
    });




////////////////////////////////// VALIDATE MAIL INPUT //////////////
function validateEmail(email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}

function validate() {
  // var $result = $("#result");
  var email = $("input[type=mail]").val();
  // $result.text("");

  if (validateEmail(email)) {
    $("input[type=mail]").parent().removeClass('incorrect').addClass('correct');
    console.log('да')
  } else {
  	$("input[type=mail]").parent().removeClass('correct').addClass('incorrect');
    console.log('нет')
  }
}

$("input[type=mail]").keypress(validate);
$("input[type=mail]").on('change', validate);


///////////////////////////////// VALIDATE TEXT INPUT ////////////////
function validateInput() {
	let text_input = $(this).val();
	if ( text_input.length > 3 ) {
		 $(this).parent().removeClass('incorrect').addClass('correct');
	} else {
		$(this).parent().removeClass('correct').addClass('incorrect');
	}
	console.log(text_input)
}
$("input[type=text]").keypress(validateInput)
$("input[type=text]").change(validateInput)

///////////////////////////////// CONTACT FORM VALIDATION



$(document).ready(function(){
	$('body').on('keypress', '#input', function() {
		  var preg = $(this).val().replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' );
		  $(this).val(preg);
		});
})

// form autocomplete 

$('.input-autocomplete').on('click', function(){
	let data_autocomplete = $(this).attr('data-autocomplete');
	console.log($(this).parent().siblings('.form-input').val(data_autocomplete))
	// $(this).parent().sibling('.form-input').val(data_autocomplete)
})

// var preg = $(this).val().replace(/[^\d.]/ig, '');
// $(this).val(parseFloat(preg));

///////////////////////////////////////////////// SMOOTH SCROLL
// Smooth scroll
$(document).ready(function(){
	$('.crane').on("click", function (event) {
	        event.preventDefault();
	        //забираем идентификатор бока с атрибута href
	        var id  = $(this).attr('href'),
	        //узнаем высоту от начала страницы до блока на который ссылается якорь
	            top = $(id).offset().top;
	        //анимируем переход на расстояние - top за 1500 мс
	        $('body,html').animate({scrollTop: top-100}, 1500);
	    });
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
    let data_arr = ['blogContent'];

    for(i=0; i<=data_arr.length; i++) {
      normalizeHeigh(data_arr[i])
    }
  })
