// Services list
const serviceContentShow = () => {
  $('.services-list .item .read-more').click(function() {
    $(this).closest('.item').find('.description').toggleClass('open')
  })
} 

serviceContentShow()

// Services slider
$('#services-slider').owlCarousel({
  items: 1,
  loop:true,
  margin:10,
  nav:true,
  navText: ['', ''],
  dots: false,
  autoHeight:true
})

// Portfolio slider
$('#portfolio-slider').owlCarousel({
  items: 1,
  loop:true,
  margin:10,
  nav:true,
  navText: ['', ''],
  dots: false,
  autoHeight:true,
  animateIn: 'fadeIn'
})


// Clients slider
$('#clients-slider').owlCarousel({
  nav:false,
  dots: true,
  animateOut: 'fadeOut',
  responsive: {
    0: {
      items: 2,
      margin: 15
    },
    581: {
      items: 4,
      margin: 20
    }
  }
})


// Menu anchor
let anchorLinks = document.querySelectorAll('a[href^="/#"]')
$(anchorLinks).click(function(e) {
  let id = $(this).attr('href').substr(1)
  if (document.querySelector(id)) {
    e.preventDefault()
    let offset = $(id).offset().top
    $('html, body').animate({scrollTop: offset}, 1000)
  }
})


// Popup forms
$('.callback-btn, .callback-btn-mobile').click(function() {
  $('#callback-form').addClass('active')
  $('html, body').css('overflow', 'hidden')
})

$('.home-banner .btn').click(function() {
  $('#banner-form').addClass('active')
  $('html, body').css('overflow', 'hidden')
})

$('.consultation-btn').click(function() {
  $('#consultation-form').addClass('active')
  $('html, body').css('overflow', 'hidden')
})

$('.popup-bg, .close-btn').click(function() {
  $(this).closest('.popup-form').removeClass('active')
  $('html, body').css('overflow', 'auto')
})


// Toast
$(document).ready(function() {
  setTimeout(() => {
    $('.toast').fadeOut(1000)
  }, 3000)
})


// AJAX form
$(document).ready(function() {
    $('form').submit(function() {
        $.ajax({
            data: $(this).serialize(),
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            success: (response) => {
                $('body').append(`<div class="toast">${response}</div>`)
                $(this)[0].reset()
                setTimeout(() => {
                  $('.toast').fadeOut(1000)
                  setTimeout(() => {
                    $('.toast').remove()
                  }, 1000)
                }, 3000)
            }
        })
        return false
    })
})


// Form validate
$.validate({
  lang: 'ru'
})


// Sticky sidebar
if ($('.blog-content .secondary-content').length !== 0) {
  let blogSidebar = new StickySidebar('.blog-content .secondary-content', {
         containerSelector: '.blog-content',
         nnerWrapperSelector: '.blog-content .secondary-content .content-wrapper',
         topSpacing: 100,
         bottomSpacing: 0
     })
}


// Scrolled header
$(document).on('ready scroll', () => {
  if ($(document).scrollTop() > 0) {
    $('.site-header').addClass('scrolled')
  } else {
    $('.site-header').removeClass('scrolled')
  }
})

// Menu toggle
$('.menu-toggle').click(function() {
  if (!$(this).hasClass('open')) {
    $(this).addClass('open')
    $('.mobile-nav').addClass('open')
    $('html, body').css('overflow', 'hidden')
  } else {
    $(this).removeClass('open')
    $('.mobile-nav').removeClass('open')
    $('html, body').css('overflow', 'auto')
  }
})

$('.mobile-nav a').click(function() {
  $('.mobile-nav').removeClass('open')
  $('.menu-toggle').removeClass('open')
  $('html, body').css('overflow', 'auto')
})


// AJAX requests
$('.btn-ajax').click(function(e) {
  e.preventDefault()

  const action = $(this).attr('href')

  switch (action) {
    case '/load-services/':
      $.get(action).done(data => {
        $('.services-list').append(data)
      })
      $(this).remove()
      break
  }
})


// Loading Map
let loadingMap = () => {      
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.6277443020276!2d30.479844815730637!3d50.42940697947248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cec19149d253%3A0x532f20a9370e2c52!2z0YPQuy4g0JPQtdC90LXRgNCw0LvQsCDQqNCw0L_QvtCy0LDQu9CwLCAxMCwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1554982610647!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>'

  document.getElementById('map').innerHTML = iframe
}

document.querySelector('#map .placeholder').onclick = () => {
  loadingMap()
}


// Scroll top button
document.getElementById('to-top').onclick = () => {
  $('html, body').animate({scrollTop: 0}, 1500)
}

$(window).on('scroll load', function() {
  if ($(document).scrollTop() > window.outerHeight) {
    $('#to-top').fadeIn(300)
  } else {
    $('#to-top').fadeOut(300)
  }
})


// Particles
particlesJS.load('particles-js', '/static/client/json/particlesjs-config.json')



// Pop up banner
$(document).ready(function(){
  console.log('модалка')
// setTimeout(showModal, 1000)

$(document).ready(function(){
  if (!localStorage['checked']) {
    console.log('нету локалки')
    setTimeout(showModal, 1000)
    
  } else {
    console.log('есть локалка')
    return false
  }
})

    function showModal() {
      
      $('.shadow-screen').addClass('active')
      $('.modal-wrap').addClass('active')
      $('html, body').css('overflow', 'hidden')

      $('.shadow-screen, .close-btn').click(function() {
        $('.modal-wrap').removeClass('active')
        $('.shadow-screen').removeClass('active')
        $('html, body').css('overflow', 'auto')
        setLocalStorageChecked()
      })
    }


    function setLocalStorageChecked() { //Устанавливаем конечную дату хранения сессии
      var date = new Date();
      var minutes = 2; // <--- нужное количество минут
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      date = Math.round(date/1000);
      sessionStorage['checked'] = date;
      localStorage['checked'] = date;
      console.log('метку сессии установил')
    }


    if(localStorage['checked']) {
      // Находим текущее время
      var currentTime = Math.round(+new Date()/1000);
      if (currentTime > parseInt(localStorage['checked'])) {
      // Очищаем сессию по истечению срока хранения
        localStorage.clear()
        console.log('сессия закончилась')
      } else {
        console.log('есть сессия')
        console.log(parseInt(localStorage['checked']))
      }
    } else {
      console.log('сессия пустая')
    }

})