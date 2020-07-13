

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




$(document).ready(function(){
  // ТАЙМЕР
function getTimeRemaining(endtime) {
  // console.log(deadline)
  
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = parseInt(Math.floor((t / 1000) % 60));
    var minutes =  parseInt(Math.floor((t / 1000 / 60) % 60));
    var hours =  parseInt(Math.floor((t / (1000 * 60 * 60)) % 24));
    var days =  parseInt(Math.floor(t / (1000 * 60 * 60 * 24)));
  
    // var seconds = parseInt(Math.floor((t / 1000) % 60));
    // var minutes = Math.floor((t / 1000 / 60) % 60);
    // var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    // var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  
  
  }
   
  function initializeClock(id, endtime) {
    // var clock = $('.countdown')
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    
    console.log( minutesSpan )


   
    function updateClock() {
      var t = getTimeRemaining(endtime);

      // ПРОГРЕСС БАР
      var allDay = 28 //-  Указываем общее количество дней. Это мы сами должны знать.
      t.days //- это у нас уже есть, Это оставшееся количество дней
      var percent = (t.days * 100) / allDay //- Узнаем какой процент составляют оставшниеся днит от общего количества дней


      // Тоже самое но в секундах
      // var allDay = 60
      // var percent = (t.seconds * 100) / allDay
      // var timerBarInner = parseInt(t.days) * 0.1


      // console.log( 'дни ' + t.days )
      // console.log( 'Остались дни ' + t.days  )
      // console.log( 'процнты ' + percent )


      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      $('.progress-bar-inner').css('width', percent+'%' )
     // console.log(t.seconds)
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  // var deadline = new Date(Date.parse(new Date('2020, 07, 01')) ); //КОНЕЧНАЯ ДАТА
  // var deadline = new Date('2020, 07, 01'); //КОНЕЧНАЯ ДАТА
  // var d = new Date("2020-02-15 00:00:00");
  // console.log(d.getDate() + '. ' + d.getMonth() + ' ' + d.getFullYear());
  
  
  var dateString = "2020-08-10 15:00:00"; //Задаем конечную дату
  var deadline = new Date(dateString.replace(' ', 'T')); //Это что бы на айфонах работало
  
  
  initializeClock('countdown1', deadline);
  // initializeClock('countdown2', deadline);
  // initializeClock('countdown3', deadline);


  //  var scrollzz = 0;
  // $(window).scroll(function() {
  
  // var scrollz = scrollzz +=2;
  // console.log(scrollz);
  // $('#how_word').css('background-position-y', scrollz);
  // }
  // );
  
})   
$(document).ready(function(){

})


