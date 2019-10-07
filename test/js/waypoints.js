// $(document).ready(function(){
// 	$('.important-img-left .to-tilt').waypoint(function(){
// 			this.element.classList.add('important-tilt')
// 		},{offset: '99%'})


// })

$(document).ready(function(){
	$('img.important-img-left.to-tilt').waypoint(function(){
			this.element.classList.add('important-tilt-minus')
		},{offset: '99%'})

	$('img.important-img-up.to-tilt').waypoint(function(){
			this.element.classList.add('important-tilt-up')
		},{offset: '99%'})

	$('img.important-img-right.to-tilt').waypoint(function(){
			this.element.classList.add('important-tilt-plus')
		},{offset: '99%'})


	$('.mystery-img-left').waypoint(function(){
			this.element.classList.add('mystery-tilt-minus')
		},{offset: '99%'})
	$('.mystery-img-up').waypoint(function(){
			this.element.classList.add('mystery-tilt-up')
		},{offset: '99%'})
	$('.mystery-img-right').waypoint(function(){
			this.element.classList.add('mystery-tilt-plus')
		},{offset: '99%'})


})