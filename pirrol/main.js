////////////////////////////////////////
// Масив блок testimonials
var test=[{id:'1', text: '“ Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.”', author: 'Michael Hopkins'}, {id:'2', text: '“ Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).”', author: 'Michael Hopkins'}, {id:'3', text: 'Lamarsh is a village and a civil parish in the Braintree District, in the county of Essex. It is near the large village of Bures and the village of Alphamstone. The village is west of the River Stour. It has a pub, a village hall and a church called The Friends of Holy Innocents Church. The civil parishs name, Lamarsh, comes from the phrase "Loamy marsh". This is derived from the old english terms lām and mersc, which translate into loam or clay and a marsh respectively.In the 1870s, Lamarsh was described as:LAMARSH, a parish, with a village, in the district of Sudbury and county of Essex; adjacent to the river Stour at the boundary with Suffolk, 2½ miles NW of Bures r. station, and 4 SSE of Sudbury.', author: 'Michael Hopkins'}]
////////////////////////////////////////

// Пагинация блок testimonials

var pagiCircle = document.getElementsByClassName('testimonials__pagination-circle') 
var testiQuote = document.getElementById('testimonials__quote')
var testiAuthor = document.getElementById('testimonials__author')

		// console.log(pagiCircle[1])
		// pagiCircle[1].getEventListener('click', function(){
		// 	testiQuote.innerHTML=test[1].text
		// 	})
		pagiCircle[0].addEventListener('click', function(){
			testiQuote.innerHTML=test[0].text
		})
		pagiCircle[1].addEventListener('click', function(){
				testiQuote.innerHTML=test[1].text
		})
		pagiCircle[2].addEventListener('click', function(){
				testiQuote.innerHTML=test[2].text
		})

///header scrolled

// $(document).ready(function(){

//     $("#testimonials").on("click","a", function (event) {

//         //отменяем стандартную обработку нажатия по ссылке

//         event.preventDefault();


//         //забираем идентификатор бока с атрибута href

//         var id  = $(this).attr('href'),

 

//         //узнаем высоту от начала страницы до блока на который ссылается якорь

//             top = $(id).offset().top;

         

//         //анимируем переход на расстояние - top за 1500 мс

//         $('body,html').animate({scrollTop: top}, 1500);

//     });

// });


