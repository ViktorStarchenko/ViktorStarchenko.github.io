// $(document).ready(function() {
// 	$('#header .navbar-toggler').on('click', function() {
// 		$('.shadow-screen').toggleClass('active')
// 		$('body').toggleClass('hidden')
// 	})



// 	$(window).bind('scroll', function() {
//          if ($(window).scrollTop() > 0) {
//              $('#header .navbar').addClass('scrolled');
//          }
//          else {
//              $('#header .navbar').removeClass('scrolled');
//          }
//     });


// })
// // $('.some').galereya();



// $(document).ready(function(){
	
// 	$('.photogallery__item-text').each(function(i,elem) {
// 		// console.log($(".some3__item-text").siblings())
// 		blockWidth = $(this).siblings();
// 		parentWidth = $(".photogallery__item-text").parent()

// 		parentWidth = parentWidth[i].clientWidth
// 		blockWidth = blockWidth[1].clientWidth
// 		result = (parseInt(parentWidth) - parseInt(blockWidth))

// 		$(this).width(blockWidth)
// 		$(this).css('left', result/2)


// 	$('.photogallery__item:nth-child(1), .photogallery__item:nth-child(4), .photogallery__item:nth-child(5)').mouseenter( function() {
// 		$('.photogallery__logo').addClass('hidden')
// 	})
// 	$('.photogallery__item:nth-child(1), .photogallery__item:nth-child(4), .photogallery__item:nth-child(5)').mouseleave( function() {
// 		$('.photogallery__logo').removeClass('hidden')
// 	});
// 	// $('.photogallery__item:nth-child(4)').mouseover(function() {
// 	// 	$('.photogallery__logo').hide()

// 	// 	return false;
// 	// })
// });
// })

// // Smooth scroll
// $(document).ready(function(){

//     $("header").on("click",".crane", function (event) {
//         //отменяем стандартную обработку нажатия по ссылке
//         event.preventDefault();
//         //забираем идентификатор бока с атрибута href
//         var id  = $(this).attr('href'),
//         //узнаем высоту от начала страницы до блока на который ссылается якорь
//             top = $(id).offset().top;
//         //анимируем переход на расстояние - top за 1500 мс
//         $('body,html').animate({scrollTop: top-100}, 1500);
//     });
// });


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


// $(document).ready(function(){
//   $('.photogallery-page__slider-wrap').slick({
//   		fade: true,
//         adaptiveHeight: true,
//         autoplay: !0,
//         autoplaySpeed: 2e3,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: !0,
//         arrows: !0,
//         dots: !0,
//         responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 infinite: !0,
//                 dots: !0
//             }
//         }, {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 adaptiveHeight: false,
//             }
//         }, {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 adaptiveHeight: false,
//                 // variableWidth: true

//             }
//         }]
//     });
// });


$(document).ready(function(){

var video = $('#online-video').get(0);


    $('#online__video-button').on('click', function(){
        
            $('#online-video').removeClass('paused')
            video.play()
            
            $('.video-button-wrap').hide()
            $('.video-pause-wrap').addClass('visible')

        })

        

        $('.video-pause-wrap').on('click', function(){
            console.log('played')
            $('#online-video').addClass('paused')
            
            video.pause()

            $('.video-button-wrap').show()
            $('.video-pause-wrap').removeClass('visible')
        })
})

// if(window.innerWidth >= 767){document.getElementById('vid').innerHTML='<video playsinline webkit-playinginline autoplay muted loop="-1" heght="auto" width="100%" poster="/wp-content/uploads/2019/12/video-preview.jpg"><source src="/wp-content/uploads/2019/12/site-video-superedit.mp4" type="video/mp4"><source src="/wp-content/uploads/2019/12/site-video-superedit.ogv" type="video/ogv">HTML5-видео не поддерживается вашим браузером</video><div class="mask"></div>'}


// $(document).ready(function(){
//     var main_video = $('#main-video').get(0);
//     console.log(main_video.poster)
//     console.log(window.innerWidth)
//     main_video.poster = 'assets/img/image5.jpg'
//     main_video.src = ''
//     if(window.innerWidth >= 767){
//         main_video.poster = 'assets/img/image5.jpg'
//         }
    
// })



//         function initMap() {
//                 var uluru = {lat: 50.4491873343781, lng: 30.4927882042627};
//                 var map = new google.maps.Map(document.getElementById('map'), {
//                   zoom: 14,
//                   draggable: true,
//                   styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#002444"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20},{"color":"#2787d1"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8},{"color":"#002444"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30},{"color":"#002444"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20},{"color":"#01152b"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20},{"color":"#011c39"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25},{"color":"#004988"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20},{"color":"#001e38"}]}],
//                   center: uluru
//         });
//                 var marker = new google.maps.Marker({
//                   position: {lat: 50.4491873343781, lng: 30.4927882042627},
//                   map: map, 
//                   title: 'Hello world',
//                   icon: src='assets/img/marker.png'
//                 });
//               }

// $('.map-block').on('click', function(){

//         console.log('gello')
//     $('.map-block').hide()

//       var mapSrc = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDKQ6x5al7NFc63XIBOw6VmnIGe1hjha64&amp;callback=initMap'
//       function addScript(src){
//           var script = document.createElement('script');
//           script.src = src;
//           script.async = false; // чтобы гарантировать порядок
//           document.body.appendChild(script);
//         }
//         // addScript('assets/js/map.js');
//         // initMap()
//         addScript(mapSrc);

//     })



    function initMap() {
        var uluru = {lat: 50.4491873343781, lng: 30.4927882042627};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          draggable: true,
          styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#002444"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20},{"color":"#2787d1"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8},{"color":"#002444"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30},{"color":"#002444"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20},{"color":"#01152b"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20},{"color":"#011c39"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25},{"color":"#004988"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20},{"color":"#001e38"}]}],
          center: uluru
});
        var marker = new google.maps.Marker({
          position: {lat: 50.4491873343781, lng: 30.4927882042627},
          map: map, 
          title: 'Hello world',
          icon: src='assets/img/marker.png'
        });
      }