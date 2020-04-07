var informerWidget = function (selector, timeoutShowElement) {
	var timerId, containers, timeInterval, informerCount, currentInformerIndex, that;
	this.containers = $(selector);
	this.timeInterval = timeoutShowElement;
	this.informerCount = this.containers.find('.informer').length;

	this.currentInformerIndex = 1;

	var i = 0;

	var that = this;


	this.getInformer = function (informerIndex) {
		return that.containers.find('.informer:eq(' + informerIndex + ')');
	};

	this.getMaxScaleValue = function (informerIndex) {
		return that.containers.find('.informer:eq(' + informerIndex + ') #maxScaleValue').val();
	};

	this.animateInformer = function (informerIndex, from, toVal) {
		var to = toVal - from;

		var step = that.getStep(to);

		that.animateStep(informerIndex, from, to, step);
		that.animateArrow(informerIndex, to);
	};

	this.getStep = function(to) {
		var step;
		step = 1;
		if ((to > 100) && (to < 400)) {
			step = 5;
		}
		if ((to > 400) && (to < 1000)) {
			step = 10;
		}
		if ((to > 1000) && (to < 10000)) {
			step = 100;
		}
		step = parseInt(step);
		return step;
	}

	this.animateStep = function (informerIndex, value, retries, step) {
		var informerBlock = $(that.getInformer(informerIndex));

		if (retries < 0) {
			return;
		}

		var diff = retries - step;
		if (diff < 0) {
			step = retries;
			value = value + step;
			that.setInformerValue(informerIndex, value);
			return;
		}

		retries = retries - step;


		that.setInformerValue(informerIndex, value);

		var timeOutValDefault = 10;
		var timeOutVal = timeOutValDefault;
		if (retries - 3 == 0) {
			timeOutVal = 29;
		}
		else if (retries - 2 == 0) {
			timeOutVal = 16;
		}
		else if (retries - 1 == 0) {
			timeOutVal = 36;
		}

		setTimeout(function () {that.animateStep(informerIndex, value, retries, step);}, timeOutVal);

		value = value + step;
	};

	this.animateArrow = function (informerIndex, value) {
		var informerBlock = $(that.getInformer(informerIndex));
		var angle = this.calculateAngle(informerIndex, value);
		informerBlock.find('.arrow').animateRotate(angle, 'slow', 'easeInOutBounce');

	}

	this.setInformerValue = function (informerIndex, value) {
		var informerBlock = $(that.getInformer(informerIndex));
		informerBlock.find('.num-fee').text(value);
	};

	this.calculateAngle = function (informerIndex, value) {
		var maxScaleValue = that.getMaxScaleValue(informerIndex);
		var angle = 360 * value / (maxScaleValue * 2);
		if ((value - 5) > 0) {
			angle = angle - 5;
		}
		return angle;
	}

	this.drawInformer = function (informerId) {
		$(that.containers).find('.informer').removeClass('visElem');

		var informer = that.getInformer(informerId);
		$(informer).addClass('visElem');
		var total = $(informer).find('#total');
		var max = total.attr('data-system')
			? total.val()
			: parseInt(total.val());
		that.animateInformer(informerId, 0, max);
	};

	this.init = function() {
		that.drawInformer(0);
		this.timerId = setInterval(that.rotateInformer, that.timeInterval);
	};

	this.rotateInformer = function () {
		that.drawInformer(that.currentInformerIndex);
		that.currentInformerIndex = (++that.currentInformerIndex) % that.informerCount;
	};

	this.init();
};

$(function () {
	var informer = new informerWidget(
		'.informer-wrap',
		10000
	);
});

$.fn.animateRotate = function(angle, duration, easing, complete) {
	return this.each(function() {
		var $elem = $(this);

		$({deg: 0}).animate({deg: angle}, {
			duration: duration,
			easing: easing,
			step: function(now) {
				$elem.css({
					'-moz-transform':'rotate('+now+'deg)',
					'-webkit-transform':'rotate('+now+'deg)',
					'-o-transform':'rotate('+now+'deg)',
					'-ms-transform':'rotate('+now+'deg)',
					'transform':'rotate('+now+'deg)',
				});
			},
			complete: complete || $.noop
		});
	});
};
