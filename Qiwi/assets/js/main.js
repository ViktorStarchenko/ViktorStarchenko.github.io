

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






// // Анимированный счетчик
// var isShowed = false;
// $(window).on('scroll load resize', function () {
//   if(isShowed) return false;
//   var scrollTop = $(window).scrollTop();
//   var windowHeight = $(window).height();
//   var el = $('.counter-containe3');

//   if(el.length != 0) {

//     var offset = el.offset();
//     if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight)) {
//       isShowed = true;
//      $(el).find(".count").spincrement({
//           from: 0,                // Стартовое число
//           // to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
//           decimalPlaces: 0,       // Сколько знаков оставлять после запятой
//           decimalPoint: ".",      // Разделитель десятичной части числа
//           thousandSeparator: " ", // Разделитель тыcячных
//           duration: 3000          // Продолжительность анимации в миллисекундах
//       });
//     }

//   }
// });