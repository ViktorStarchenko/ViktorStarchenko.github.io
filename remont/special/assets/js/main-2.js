
// Dropdown-list
$(document).ready(function(){
	$('.dropdown-item.has-child').hover(function(){
		console.log($('.dropdown-item.has-child').find('.dropdown-list'));
		$(this).toggleClass('open');
		$(this).find('.dropdown-list').toggleClass('show');
		$(this).find('.dropdown-list').on('mouseover', function(){
			$(this).find('.dropdown-list').toggleClass('show');
		})
	})
})




// // Open modal

// function openModal() {
// 	var btn_href = $(this).attr('href')
//     console.log(btn_href)
//   	btn_href = btn_href.slice(1)
// 	console.log(btn_href)
//     var modal_wrap = $('.modal__wrap')

//      modal_wrap.each(function(elem){

//         if ($(modal_wrap[elem]).attr('id') ==  btn_href) {     
        
//           console.log($(this))   
         
//           $(this).addClass('showModal')
//           $('.screen-shadow').addClass('show');
//           $('body').addClass('modal-open');
//           closeModal()
//           return false
//         }

//     })
// }

// Close modal
function closeModal() {

	console.log('closeModal')
		$('.close-button').on('click', function(){
			$('.screen-shadow').removeClass('show');
			$('.nav-list').removeClass('active');
			$('body').removeClass('modal-open');
			$('.modal__wrap').removeClass('showModal');
			$('.online-camera').get(0).pause();
		})

		$('.screen-shadow.show').on('click', function(e){
			console.log('SHADOW')
			$('.screen-shadow').removeClass('show');
			$('.nav-list').removeClass('active');
			$('body').removeClass('modal-open');
			$('.modal__wrap').removeClass('showModal');
			$('.online-camera').get(0).pause();
		})
		$('header .nav-link.crane').on('click', function(){
			$('.screen-shadow').removeClass('show');
			$('.nav-list').removeClass('active');
			$('body').removeClass('modal-open');
			$('.modal__wrap').removeClass('showModal');
			$('.online-camera').get(0).pause();
		})

	}
// MOBILE MENU
$(document).ready(function(){
	$('.navbar-toggler').on('click', function(){
		$('.nav-list').addClass('active');
		$('.screen-shadow').addClass('show');
		$('body').addClass('modal-open');

	
		closeModal();

	$('header .nav-link.crane').on('click', function(){
		closeModal();
	})

	})
})



// HERO IMGE SLIDER

$(document).ready(function(){
	var owl = $('.hero__animation-wrap.owl-carousel');
  $('.hero__animation-wrap.owl-carousel').owlCarousel({
  	items:1,
  	// animateOut: 'fadeOut',
  	animateIn: 'fadeIn', // add this
  	animateOut: 'fadeOut', // and this
  	dots: false,
  	pagination: false,
  	autoplay:true,
  	autoplayTimeout:800,
  	lazyLoad: true
  });

  function addBigCicleOpacity() {
		$('.big-circle').addClass('active')
  	}
  	function addSmallCicleOpacity() {
		$('.small-circle').addClass('active')
  	}
  setTimeout(addBigCicleOpacity, 4500)
  setTimeout(addSmallCicleOpacity, 7600)

  // owl.hover( function(){
  // 	owl.trigger('play.owl.autoplay',[800]);
  // 	// $('.big-circle').css('opacity', 1);
  // 	function addBigCicleOpacity() {
		// $('.big-circle').addClass('active')
  // 	}
  // 	function addSmallCicleOpacity() {
		// $('.small-circle').addClass('active')
  // 	}
  	

  // })
});

// ADVNTAGES SLIDER

$(document).ready(function(){
	$('.advantages__works-slider.owl-carousel').owlCarousel({
		nav: true,
		items:1,
		lazyLoad: true,
		loop: true,
		center: true,
  		navText: ["<div  class='advantages-arrow advantages-prevArrow'><img src='assets/img/icons/6.svg'></div>","<div  class='advantages-arrow advantages-nextArrow'><img src='assets/img/icons/6.svg'></div>"],
	  	responsive:{
	        600:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	    }
	})
})

$(document).ready(function(){
	$('.rate__mobile-slider.owl-carousel').owlCarousel({
		nav: true,
		dots: true,
		// center:true,
		loop: true,
		items: 1,
		lazyLoad: true,
		stagePadding: 40,
  		navText: ["<div  class='advantages-arrow advantages-prevArrow'><img src='assets/img/icons/6.svg'></div>","<div  class='advantages-arrow advantages-nextArrow'><img src='assets/img/icons/6.svg'></div>"],
	  	responsive:{
	        425:{
	        	items:1,
	            nav:true,
	            center:true,
				stagePadding: 80,
	        },
	        500:{
	        	items:1,
	            nav:true,
	            center:true,
				stagePadding: 100,
	        },
	        600:{
	        	center: false,
	        	stagePadding: 5,
	            items:2,
	        },
	    }
	})
})

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

window.onload=function(){
	var header = $(".header").offset().top;
	var sticky = header.offsetTop;
	console.log(header)

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function headerFixed() {
	  if (window.pageYOffset > header) {
	    $(".header").addClass("fixed");

	  } else {
	    $(".header").removeClass("fixed");

	  }
	}

	window.onscroll = function() {
		headerFixed();
	}
}





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

	// Advantages palms animation 

		

	// if(window.innerWidth >= 768){ 


	// var tl = new TimelineMax({onUpdate:updatePercentage});
	// 	const controller = new ScrollMagic.Controller();
	// 	tl.from('.advantages__palms-left', .5, {x:-500});
	// 	// tl.from('.advantages__palms-right', .5, {x:100});
	// 	// tl.from('.tube-img', .5, {x:100});
	// 	// t1.from('.tube-img', .5, {x:-500});

	// 	function updatePercentage() {
	// 		  //percent.innerHTML = (tl.progress() *100 ).toFixed();
	// 		  tl.progress();
	// 		  // console.log(tl.progress());
	// 		}


	// 	const scene = new ScrollMagic.Scene({
	// 	  triggerElement: ".sticky",
	// 	            // triggerHook: "0.28",
	// 	            triggerHook: "0.28",
	// 	            duration: "100%",
	// 	            offset: "0%"
	// 	})
	// 	  .setPin(".sticky")
	// 	  .setTween(tl)
	// 		.addTo(controller);	




	// 	var tl2 = new TimelineMax({onUpdate:updatePercentage2});
	// 		tl2.from('.rate-animation-3', 1.5, {opacity:0});
	// 		tl2.from('.tube-img', 2, {y:500});
	// 		tl2.from('.rate-animation-1', 3, {opacity:0});
	// 		tl2.from('.rate-animation-2', 6, {opacity:0});
			

	// 		function updatePercentage2() {
	// 			console.log('PADLA')
	// 			  //percent.innerHTML = (tl.progress() *100 ).toFixed();
	// 			  tl2.progress();
	// 			  // console.log(tl.progress());
	// 			}


	// 		const scene2 = new ScrollMagic.Scene({
	// 		  			triggerElement: ".rate",
	// 		            triggerHook: "0.28",
	// 		            duration: "200%",
	// 		            offset: "0%"
	// 		})
	// 		  .setPin(".rate")
	// 		  .setTween(tl2)
	// 			.addTo(controller);	
	// }



	


	// var tube = TweenMax.to(".tube-img", 2, {y: 500});

	// // build scene
	// var scene3 = new ScrollMagic.Scene({triggerElement: ".sticky2", duration: 200, offset: -50})
	// 				.setTween(tube)
	// 				// .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
	// 				.addTo(controller);












// $(document).ready(function(){
// 	// Массив №1
// 	var fruits = ['Яблоко', 'Банан', 'Рапан'];
// 	// Массив №2
// 	var count = ['1','3','2'];

// 	// Создаем ассоциативный массив
// 	var temp = new Map()

// 	// Раз массивы одинаковой длинны то идем циклом по любому из них
// 	for(i=0; i<fruits.length; i++) {

// 		// На каждой итерации добавляем в массив ключ и значение
// 		temp.set(fruits[i], count[i])

// 	}

// 	for(var k in fruits) {
// 		console.log(fruits[k])

// 		fruits[k] = fruits[k] + ':' count[k]
// 	}

// 	console.log(temp)
// })


// let array1 = ['a', 'b', 'c'];
// let arr2 = ['3', '9', '12']
// array1.forEach(element => console.log(element + ':' + arr2));
// отдает:
// > "a:3,9,12"
// > "b:3,9,12"
// > "c:3,9,12"



// RATE TABS

$(document).ready(function(){

    // $(this).addClass('hide')

    // var accordion_hide = $('.accordion__hide')


  $('.rate__tabs-nav-item').on('click', function(){
  	var data_toggle = $(this).attr('data-toggle');

	$('.rate__tabs-item').removeClass('show');
  	$('.rate__tabs-item[data-toggle='+ data_toggle +']').addClass('show');
  	$('.rate__tabs-nav-item').removeClass('active');
  	$(this).addClass('active');

  	return false;
  })  
})




// Open modal

$(document).ready(function(){
  $('a.btn-white, a.btn-blue, a.btn-quote').on('click', function(){
    var btn_href = $(this).attr('href')
  	btn_href = btn_href.slice(1)
    var modal_wrap = $('.modal__wrap')
	if (btn_href == 'online_camera') {
	     	var count = 0;
	     	console.log('count ' + count)
	     	var date = new Date();
			var current_hour = date.getHours();

			if (current_hour <= 8 || current_hour >= 20 ) {
				$('.online-camera')[0].poster = 'assets/img/hqdefault.jpg';
				$('.online-camera__rec').hide();
				$('.online-camera__nowork').show();
				
			} else {
				startOnlineCamera();
				$('.online-camera__rec').show();
				$('.online-camera__nowork').hide();

			}
	     }
     modal_wrap.each(function(elem){

        if ($(modal_wrap[elem]).attr('id') ==  btn_href) {     
        
          $(this).addClass('showModal')
          $('.screen-shadow').addClass('show');
          $('body').addClass('modal-open');
          closeModal()
          return false
        }

      })
	
     

     function startOnlineCamera() {

		function getDateTime() {

		    var date = new Date();

		    var hour = date.getHours();
		    hour = (hour < 10 ? "0" : "") + hour;

		    var min  = date.getMinutes();
		    min = (min < 10 ? "0" : "") + min;

		    var sec  = date.getSeconds();
		    sec = (sec < 10 ? "0" : "") + sec;

		    var year = date.getFullYear();

		    var month = date.getMonth() + 1;
		    month = (month < 10 ? "0" : "") + month;

		    var day  = date.getDate();
		    day = (day < 10 ? "0" : "") + day;

		    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
		}

     	let vidSRC = {
	        vid1: 'assets/video/2-1.mp4',
	        vid2: 'assets/video/2-2.mp4',
	        vid3: 'assets/video/4-1.mp4',
	        vid4: 'assets/video/4-2.mp4',
	        vid5: 'assets/video/5-1.mp4',
	        vid6: 'assets/video/5-2.mp4',
	        vid7: 'assets/video/7.mp4',
	    } 
     	videoCount= Object.keys(vidSRC).length - 1;
     	if (localStorage['prevSrc'] >= videoCount) {
     		localStorage.clear()
     	}
     	// let videoNumber = selfRandom(0, videoCount);
     	let prevSrc = localStorage['prevSrc']
     	if (!localStorage['prevSrc']) {
     		var videoKey = Object.values( vidSRC )[count];
     		localStorage['prevSrc'] = count;
     	} else if (localStorage['prevSrc']) {
     		let prevSrc = localStorage['prevSrc'];
     		prevSrc++;
     		var videoKey = Object.values( vidSRC )[prevSrc];
     		localStorage['prevSrc'] = prevSrc; 		
     	}
     	console.log('videokey is ' +  videoKey)
	      console.log(localStorage['prevSrc'])
		$('.online-camera')[0].src = videoKey
     	$('.online-camera').get(0).play();
     	count++;
     }
     function selfRandom(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	return false;      
  })
})



// PHONE MASK
 jQuery( function($){
     $(".tel-mask").mask("+38 (999) 999-99-99");
   });


 // Send from
  $(document).ready(function() {
        $('.form-submit').on('click', function(e) {
                var name = $('input[name="name"]').val();
                var phone = $('input[name="phone"]').val();
                $.ajax({
                    type: 'POST',
                    url: 'send.php',
                    dataType: "json",
                    data: {name:name, phone:phone},
                    success: function(data) {
                    	console.log(data.error);

						if (data.success && !data.error) {
	                        $('#order_measurement').removeClass('showModal');
	                        $('#order_success').addClass('showModal');


	                        $('input[name="name"]').val("");
	                        $('input[name="phone"]').val("");
						} else if (data.error) {
							$('.form-message__inner').text(data.error);
							$('.form-message__inner').addClass('error');
	                        $('.form-message').addClass('active');
	                        $('.form-message').addClass('success');
						}

                    },
                    complete: function(data) {
                        setTimeout(function() {
                           $('.form-message').removeClass('active')
                           $('.form-message__inner').removeClass('error')
                           $('.form-message__inner').removeClass('success')
                           $('.form-message__inner').text('')
                       }, 2500);
                    }
                })

            return false
        })
    })


  $(document).ready(function(){
  	$('input.btn-blue').on('click', function(){
  		console.log(this);
  		return false
  	})
  })

