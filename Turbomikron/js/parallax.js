var image_index_whyus = document.getElementsByClassName('why-us__banner-img');
	new simpleParallax(image_index_whyus, {
		overflow: false,
		transition: 'cubic-bezier(0, 0, .58, 1)',
		orientation: 'up',
		delay: 0.1,
	});

var image_index_offer = document.getElementsByClassName('offer-banner__img');
	new simpleParallax(image_index_offer, {
		overflow: false,
		transition: 'cubic-bezier(.05,.47,.93,.5)',
		orientation: 'up',
		delay: 0.1,

	});

var image_brand_hero = document.getElementsByClassName('brand-hero__banner');
	new simpleParallax(image_brand_hero, {
		overflow: false,
		transition: 'cubic-bezier(.05,.47,.93,.5)',
		orientation: 'down',
		delay: 0.1,

	});

var image_brand_reason = document.getElementsByClassName('brand-reasons__banner-img');
	new simpleParallax(image_brand_reason, {
		overflow: false,
		transition: 'cubic-bezier(.05,.47,.93,.5)',
		orientation: 'up',
		delay: 0.1,

	});