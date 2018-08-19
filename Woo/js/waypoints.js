

$('.hero-image').waypoint(function(){
		this.element.classList.add('animated')
	},{offset: "90%"})
$('.hero__button-trial').waypoint(function(){
		this.element.classList.add('animatedButton')
	},{offset: "90%"})
$('.features__image').waypoint(function(){
		this.element.classList.add('animatedBigup')
	},{offset: "70%"})

$('.subscribe__email').waypoint(function(){
		this.element.classList.add('animatSubscribeFromLeft')
	},{offset: "99%"})
$('.subscribe__submit').waypoint(function(){
		this.element.classList.add('animatSubscribeFromRight')
	},{offset: "99%"})