
// Dropdown-list
$(document).ready(function(){
	$('.dropdown-item.has-child').on('click', function(){
		console.log($('.dropdown-item.has-child').find('.dropdown-list'));
		$(this).toggleClass('open');
		$(this).find('.dropdown-list').toggleClass('show');
	})
})

// Close modal
$(document).ready(function() {
	function closeModal() {
		$('.close-button').on('click', function(){
			$('.screen-shadow').removeClass('show');
			$('.nav-list').removeClass('active');
		})

		$('.screen-shadow.show').on('click', function(e){
			console.log(e.target)
			$('.screen-shadow').removeClass('show');
			$('.nav-list').removeClass('active');
		})
	}
})

// MOBILE MENU
function closeModal() {
		$('.close-button').on('click', function(){
			$('.screen-shadow').removeClass('show');
			$('.nav-list').removeClass('active');
		})
	}
$(document).ready(function(){
	$('.navbar-toggler').on('click', function(){
		$('.nav-list').addClass('active');
		$('.screen-shadow').addClass('show');

	
	closeModal();

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
  });

  owl.hover( function(){
  	owl.trigger('play.owl.autoplay',[800]);
  	// $('.big-circle').css('opacity', 1);
  	function addBigCicleOpacity() {
		$('.big-circle').addClass('active')
  	}
  	function addSmallCicleOpacity() {
		$('.small-circle').addClass('active')
  	}
  	setTimeout(addBigCicleOpacity, 4500)
  	setTimeout(addSmallCicleOpacity, 7600)

  })
});

// ADVNTAGES SLIDER

$(document).ready(function(){
	$('.advantages__works-slider.owl-carousel').owlCarousel({
		nav: true,
  		navText: ["<div  class='advantages-arrow advantages-prevArrow'><img src='assets/img/icons/6.svg'></div>","<div  class='advantages-arrow advantages-nextArrow'><img src='assets/img/icons/6.svg'></div>"],
	  	responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
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
		center:true,
		loop: true,
  		navText: ["<div  class='advantages-arrow advantages-prevArrow'><img src='assets/img/icons/6.svg'></div>","<div  class='advantages-arrow advantages-nextArrow'><img src='assets/img/icons/6.svg'></div>"],
	  	responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	   //      404:{
	   //      	items:1,
	   //          nav:true,
	   //          center:true,
				// stagePadding: 20,
	   //      },
	        600:{
	        	center: false,
	        	stagePadding: 0,
	            items:2,
	        },
	    }
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

$(document).ready(function(){
	var header = $(".header").offset().top;
	var sticky = header.offsetTop;
	console.log(header)

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function headerFixed() {
	  if (window.pageYOffset > header) {
	    $(".header").addClass("sticky");

	  } else {
	    $(".header").removeClass("sticky");

	  }
	}

	window.onscroll = function() {
		headerFixed();
	}
})






window.onload=function(){

	// Advantages palms animation 

		var tl = new TimelineMax({onUpdate:updatePercentage});
		const controller = new ScrollMagic.Controller();
		tl.from('.advantages__palms-left', .5, {x:-500});
		tl.from('.advantages__palms-right', .5, {x:100});
		tl.from('.tube-img', .5, {x:100});
		// t1.from('.tube-img', .5, {x:-500});

		function updatePercentage() {
			  //percent.innerHTML = (tl.progress() *100 ).toFixed();
			  tl.progress();
			  // console.log(tl.progress());
			}


		const scene = new ScrollMagic.Scene({
		  triggerElement: ".sticky",
		            triggerHook: "0.28",
		            duration: "100%",
		            offset: "0%"
		})
		  .setPin(".sticky")
		  .setTween(tl)
			.addTo(controller);	
	
	if(window.innerWidth >= 768){ 
		var tl2 = new TimelineMax({onUpdate:updatePercentage2});
			tl2.from('.rate-animation-3', 1.5, {opacity:0});
			tl2.from('.tube-img', 2, {y:500});
			tl2.from('.rate-animation-1', 3, {opacity:0});
			tl2.from('.rate-animation-2', 6, {opacity:0});
			

			function updatePercentage2() {
				console.log('PADLA')
				  //percent.innerHTML = (tl.progress() *100 ).toFixed();
				  tl2.progress();
				  // console.log(tl.progress());
				}


			const scene2 = new ScrollMagic.Scene({
			  			triggerElement: ".rate",
			            triggerHook: "0.28",
			            duration: "200%",
			            offset: "0%"
			})
			  .setPin(".rate")
			  .setTween(tl2)
				.addTo(controller);	
	}
}


	


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

