

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