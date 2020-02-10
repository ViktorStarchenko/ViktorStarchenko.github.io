
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

  $('.rating-wrap').on('click', function(){
    var stars = $(this)
    console.log(stars)
  })

}) 


