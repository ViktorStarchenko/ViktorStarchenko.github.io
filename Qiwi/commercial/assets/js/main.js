

$(document).ready(function(){
var isShowed = false;
$(window).on('scroll load resize', function () {
  if(isShowed) return false;
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var el = $('.count');

  if(el.length != 0) {

    var offset = el.offset();
    if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight)) {
      isShowed = true;
      $(el).spincrement({
          from: 0,                // Стартовое число
          // to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
          decimalPlaces: 0,       // Сколько знаков оставлять после запятой
          decimalPoint: ".",      // Разделитель десятичной части числа
          thousandSeparator: " ", // Разделитель тыcячных
          duration: 3000          // Продолжительность анимации в миллисекундах
      });
    }

  }
});
})

$(document).ready(function(){
var isShowed = false;
$(window).on('scroll load resize', function () {
  if(isShowed) return false;
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var el = $('.count2');

  if(el.length != 0) {

    var offset = el.offset();
    if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight)) {
      isShowed = true;
      $(el).spincrement({
          from: 0,                // Стартовое число
          // to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
          decimalPlaces: 0,       // Сколько знаков оставлять после запятой
          decimalPoint: ".",      // Разделитель десятичной части числа
          thousandSeparator: " ", // Разделитель тыcячных
          duration: 3000          // Продолжительность анимации в миллисекундах
      });
    }

  }
});
})

$(document).ready(function(){
var isShowed = false;
$(window).on('scroll load resize', function () {
  if(isShowed) return false;
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var el = $('.count3');

  if(el.length != 0) {

    var offset = el.offset();
    if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight)) {
      isShowed = true;
      $(el).spincrement({
          from: 0,                // Стартовое число
          // to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
          decimalPlaces: 0,       // Сколько знаков оставлять после запятой
          decimalPoint: ".",      // Разделитель десятичной части числа
          thousandSeparator: " ", // Разделитель тыcячных
          duration: 3000          // Продолжительность анимации в миллисекундах
      });
    }

  }
});
})



$('.reason__slider').slick({
	autoplay: true,
  	autoplaySpeed: 2000,
  	dots: true
})


// Smooth scroll
$(document).ready(function(){

    $("body").on("click",'.crane', function (event) {
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

function closeBtn() {
  $('.screen-shadow.show, .modal-wrap .close-button, .modal__login .close-button').on('click', function() {

      $('.modal-wrap').removeClass('showModal');
      $('.modal__login').removeClass('showModal');
      $('.screen-shadow').removeClass('show');
      $('body').removeClass('hidden');
      return false;

    })
}

// показать модальное 

$(document).ready(function(){
  $('.open-modal').on('click', function(){
    var btn_href = $(this).attr('href')
    console.log(btn_href)
  btn_href = btn_href.slice(1)
    var modal_wrap = $('.modal-wrap')

     modal_wrap.each(function(elem){


        if ($(modal_wrap[elem]).attr('id') ==  btn_href) {     
        
          console.log($(this))   
         
          $(this).addClass('showModal')
          $('.screen-shadow').addClass('show');
          $('body').addClass('hidden');
          closeBtn()
          return false
        }

      })
      
  })
})

// PHONE MASK
 jQuery( function($){
     $(".tel-mask").mask("+38 (999) 999-99-99");
   });