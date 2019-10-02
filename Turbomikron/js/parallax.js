var image = document.getElementsByClassName('why-us__banner-img');
	new simpleParallax(image, {
		overflow: false,
		transition: 'cubic-bezier(0, 0, .58, 1)',
		orientation: 'up',
		delay: 0.1
	});

	var image = document.getElementsByClassName('offer-banner__img');
	new simpleParallax(image, {
		overflow: false,
		transition: 'cubic-bezier(.05,.47,.93,.5)',
		orientation: 'up',
		delay: 0.1,
		
	});