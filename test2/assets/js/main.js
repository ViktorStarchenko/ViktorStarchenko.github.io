
// БЛОК БАННЕРОВ
// window.onload=function(){ 
//   if(window.innerWidth > 520){
//   // $('.banners-slider__wrapper').slick('unslick')
//   }
// }

window.onload=function(){if(window.innerWidth <= 520){ // ДОБАВЛЯЕМ СЛАЙДЕР НА МОБИЛЬНЫХ ЭКРАНАХ
  $('.banners-slider__wrapper').slick({
    // slidesToScroll: 1,
    centerMode: true,
    // centerPadding: '20px',
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
  });
}
}

// Show mobile menu

$(document).ready(function() {
  $('.navbar__mobile-menu-button').on('click', function() {
    $('.mobile-menu-wrap').addClass('show');
    $('.screen-shadow').addClass('show');
    $('body').addClass('hidden');

    // $('.mobile-menu-wrap .close-button').on('click', function() {
    //   $('.mobile-menu-wrap').removeClass('show');
    //   $('.screen-shadow').removeClass('show');
    //   $('body').removeClass('hidden');
    // })

    $('.screen-shadow.show, .mobile-menu-wrap .close-button').on('click', function() {
      $('.mobile-menu-wrap').removeClass('show');
      $('.screen-shadow').removeClass('show');
      $('body').removeClass('hidden');
    })

  })
})




// RATING STARS

$(document).ready(function(){

  $('.rating-wrap.rate-this').on('mouseover', function(e){



    var rating = $(this)[0];
    var stars = $(rating).children()

    var target = e.target;

    console.log(target)

    rating.onclick = function(e){
      var target = e.target;
      if(e.target.classList.contains('rating-star-item')){

        removeClass(stars,'current-active')
        target.classList.add('active','current-active');
      }
    }

    rating.onmouseover = function(e) {
        var target = e.target;
        if(target.classList.contains('rating-star-item')){
          removeClass(stars,'active')
          target.classList.add('active' );
          mouseOverAddClassActive(stars)
          // mouseOutActiveClass(stars)
        }
      }

     rating.onmouseout = function(){
        // addClass(stars,'active');
        mouseOutActiveClass(stars);
      } 


    
    function removeClass(arr) {
      for(var i = 0, iLen = arr.length; i <iLen; i ++) {
        for(var j = 1; j < arguments.length; j ++) {
          stars[i].classList.remove(arguments[j]);
        }
      }
    }

    function addClass(arr) {
      for(var i = 0, iLen = arr.length; i <iLen; i ++) {
        for(var j = 1; j < arguments.length; j ++) {
          stars[i].classList.add(arguments[j]);
        }
      }
    }  

    function mouseOverAddClassActive(arr) {
      for(i=0; i<arr.length; i++) {
        if(arr[i].classList.contains('active')) {
          break;
        } else {
          stars[i].classList.add('active');
        }
      }
    }

    function mouseOutActiveClass(arr){
      for(var i = arr.length-1; i >=1; i--) {
        if(arr[i].classList.contains('current-active')){
          break;
        }else {
          arr[i].classList.remove('active');
        }
      }
    }


  })

}) 




$(document).ready(function(){
  $('#login-btn').on('click', function(){
    $('.modal__login').addClass('showModal');
    $('.screen-shadow').addClass('show');
    $('body').addClass('hidden');

    $('.screen-shadow.show').on('click', function() {
      $('.modal__login').removeClass('showModal');
      $('.screen-shadow').removeClass('show');
      $('body').removeClass('hidden');
    })

  })
})

