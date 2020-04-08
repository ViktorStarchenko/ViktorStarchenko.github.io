var app = window.app || {};

(function($) {


	app.inputMask = (function() {


		var init = function() {

			Inputmask().mask(document.querySelectorAll("input"));
		};


		init();
	})();


	app.calendar = (function() {

		var $calendar = $('.ui-calendar'),
			$inputs = $('[data-calendar-input]');

		var __init = function() {

			$calendar.each(initOne);
			$inputs.each(initOneInputCalendar);
		};


		var initOneInputCalendar = function() {

			var $this = $(this),
				type = this.getAttribute('data-calendar-input') || 'date';

			$this.datepicker({

			});
		};


		var initOne = function() {

			var $this = $(this),
				activeDates = JSON.parse($this.attr('data-dates')) || [];

			$this.datepicker({
				dateFormat: "dd.mm.yy",
				beforeShowDay: function(date) {
					var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
	                if (activeDates[format(d)+'.'+format(m+1)+'.'+y]) {
	                	var future = activeDates[format(d)+'.'+format(m+1)+'.'+y]['future'] ? '' : ' in-past';
	                	console.log(future);
	                    return [true, 'ui-state-active' + future, ''];
	                }
		            return [true];
				},
				onSelect: function(selectedDate,v) {
					window.location = '/affiche?date='+selectedDate;
				}
			});
		};

		var format = function(value) {
			return (value > 9 ? value : ('0'+value));
		}

		!$calendar.length || __init();
	})();


	app.uploads = (function() {

		var init = function() {

			$(document).on('change', '.uploads__input', _upload)
						.on('click', '.uploads__error', _remove)
						.on('click', '.upload__item', _remove)
						.on('click', '.uploads__preview-remove', _removePreview);
		};


		var load = function(data, callback, error_callback) {

			var xhr = new XMLHttpRequest(),
				file = data.file || false,
				url = data.url || false;

			if (!window.File 
				|| !window.FileList 
				|| !window.FileReader 
				|| !xhr
				|| !file
				|| !url)
				return false;


			// file received/failed
			xhr.onreadystatechange = function(e) {
				if (xhr.readyState == 4)
					if (xhr.status === 200) {
						if (typeof callback === 'function') {
							return callback(xhr.response ? JSON.parse(xhr.response) : {}, file);
						}
					} else {
						return (typeof error_callback == 'function' ? error_callback(xhr.response) : xhr);
					}
						
							
			};

			// start upload
			xhr.open("put", url, true);
			xhr.setRequestHeader("Content-Type", "multipart/form-data");
			xhr.setRequestHeader("X-File-Name", encodeURIComponent(file.name));
			xhr.setRequestHeader("X-File-Size", file.size);
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			xhr.setRequestHeader("Cache-Control", "no-cache");
			xhr.send(file);
		};


		var _upload = function(e) {

			var $this = $(e.target),
				files = $this[0].files || {},
				$block = $this.closest('.uploads'),
				maxsize = parseInt($block.data('maxsize') || 999999999);

			$block.find('.uploads__error').remove();

			for (var i = 0; i < files.length; i++) {

				var file = files[i],
					imageType = /image.*/;

				if(!file.type.match(imageType))
					_showError($block, 'type', file);
				else if (file.size > maxsize)
					_showError($block, 'size', file);
				else
					_uploadOne($block, file);
			};
		};

		var _remove = function(e) {

			e.stopPropagation();

			var $this = $(e.target),
				$block = $this.closest('.uploads');
			$this.remove();

			//кидаем триггер, только в случае удаления загруженного файла
			//if ($this.is(this._getElemClass('item')))
			_checkCount($block);
			$this.closest('.uploads').trigger('uploads:change', null, {
				'action' : 'remove'
			});
		};


		var _removePreview = function(e) {

			e.stopPropagation();

			var $this = $(e.target),
				$block = $this.closest('.uploads');
			$this.closest('.uploads__preview').remove();

			//кидаем триггер, только в случае удаления загруженного файла
			//if ($this.is(this._getElemClass('item')))
			$this.closest('.uploads').trigger('uploads:change', null, {
				'action' : 'remove',
				'item' : 'preview'
			});
			_checkCount($block);
		};


		var _checkCount = function($block) {

			var total = $block.find('.uploads__preview').length;

			if ($block.attr('data-count') && total >= $block.attr('data-count')) {
				$block.find('.uploads__button').attr('data-disabled', true);
			} else {
				$block.find('.uploads__button').removeAttr('data-disabled');
			}
		};


		var _uploadOne = function($block, file) {

			$block.find('.uploads__button').addClass('uploads__button_loading');
			$block.attr('data-uploads', parseInt($block.attr('data-uploads') || 0)+1);

			load({
				file: file,
				url: $block.attr('data-upload')
			}, function(response) {
				_finishUpload($block, response, file);
			});
		};


		var _showError = function($block, type, file) {

			var message = false,
				errors = {
					size: 'Превышен максимальный размер файла',
					type: 'Неверный тип файла',
					common: 'Ошибка загрузки файла'
				};

			if (!type)
				return false;

			switch (type) {

				case 'type':
				case 'size':
				case 'common':
					message = errors[type];
				break;

				default:
					message = type || errors.common;
				break;
			}

			if (file && file.name)
				message += ' ('+ file.name +')';

			var $error = $('<span>').addClass('uploads__error')
									.text(message);

			$block.append($error);
		};


		var _finishUpload = function($block, response, file) {

			if (response.result)
				_showUploaded($block, file, response.result);
			else
				_showError($block, response.error, file);

			$block.attr('data-uploads', parseInt($block.attr('data-uploads') || 1)-1);

			if ($block.attr('data-uploads') < 1)
				$block.find('.uploads__button').removeClass('uploads__button_loading');

			if (response.result)
				$block.trigger('uploads:change', null, {
					'name' : file.name,
					'value': file,
					'path' : response.result,
					'action' : 'add',
					'result' : response
				});
		};

		var _showUploaded = function($block, file, value) {

			if (!file || !file.name || !value)
				return false;

			var $item,
				type = $block.data('type') || 'previews';

			switch (type) {
				case 'previews':
					var reader = new FileReader();
					reader.onload = function(e, tpl) {

						$item = $('<div>').addClass('uploads__preview')
									.html($('<span>').addClass('uploads__preview-remove'))
									.append($('<img>').prop('src', e.target.result))
									.append($('<input>').prop('type', 'hidden')
														.prop('name', $block.find('.uploads__input').data('name'))
														.prop('value', value)
														);
						$block.find('.uploads__previews').append($item);
						_checkCount($block);
					};
					reader.readAsDataURL(file);
				break;
				default:
					$item = $('<div>').addClass('uploads__item')
							.html(
								$('<span>').addClass('uploads__file')
											.text(file.name)
								)
							.append($('<input>').prop('type', 'hidden')
												.prop('name', $block.find('.uploads__input').data('name'))
												.prop('value', value)
												);
					$block.append($item);
				break;
			}
		};

		init();

		return {

		};
	})();


	app.index = (function() {

		var $main = $('.index'),
			_w = {};

		var init = function() {

			_setPoints();
			_w.$overlay = $main.find('.index__overlay');

			$(document).on('mouseenter', '.index__point', _overPoint)
						.on('mouseleave', '.index__point', _leavePoint);

			$(window).on('resize', resize);
		};

		var _overPoint = function(e) {

			var $point = $(e.target).closest('.index__point'),
				css = {left: $point.css('left'), top: $point.offset()['top']};

			_w.$overlay.css(css);
			$main.addClass('index_point_active');
		};

		var _leavePoint = function() {

			$main.removeClass('index_point_active');
		};


		var _setPoints = function() {

			var width = Math.max(window.innerWidth, 980),
				commonMargin = 1.57*(1-1280/width),
				center = $main.find('.index__wrap')[0].clientHeight/2,
				delta,
				t;

			$main.find('.index__point').each(function() {

				delta = parseInt($(this).position().top) - center;
				$(this).css({'margin-top': delta*commonMargin});
			});		
		};

		var resize = function() {

			if (_w.resizeTimeout)
				clearTimeout(_w.resizeTimeout);

			_w.resizeTimeout = setTimeout(_setPoints, 500);
		};

		!$main.length || init();
	})();


	app.search = (function() {

		var $main = $('.search');

		var init = function() {

			$(document).on('click', '.search__button', _button)
						.on('keyup', '.search__field', _toggleButton)
						.on('focus', '.search__field', _focus)
						.on('blur', '.search__field', _blur);
		};

		var _button = function(e) {

			console.log($main.is('.search_active'));
			if (!$main.hasClass('search_active')) {

				$main.addClass('search_active');
				$main.find('.search__field').focus();
				return false;
			}

			if ($main.find('.search__field').val().length < 2)
				return false;
		};

		var _toggleButton = function() {

			var state = $main.find('.search__field').val().length > 0 ? '' : 'disabled';
		};

		var _focus = function() {

			$main.addClass('search_active');
		};

		var _blur = function() {

			var active = $main.find('.search__field').val().length > 0;

			if (active)
				$main.addClass('search_active');
			else
				$main.removeClass('search_active');
		}

		!$main.length || init();
	})();


	app.mobileNav = (function() {

		var $main = $('.mobile-nav'),
			$holder = $main.find('.mobile-nav__holder'),
			$wrap = $main.find('.mobile-nav__wrap');

		var init = function() {

			$holder.on('click', _toggleNav);
			$main.on('click', '.mobile-nav__link_parent', _toggleSubNav);
		};


		var _toggleNav = function(e) {

			e.preventDefault();
			e.stopPropagation();

			if ($wrap.attr('data-process'))
				return false;

			$wrap.attr('data-process', true);
			$wrap.slideToggle(300, function() {
				$(this).removeAttr('data-process');
			});
		};


		var _toggleSubNav = function(e) {

			e.preventDefault();
			e.stopPropagation();

			var $item = $(this).closest('.mobile-nav__item'),
				$list = $item.find('.mobile-nav__sublist');

			if ($list.attr('data-process'))
				return false;

			$list.attr('data-process', true);
			$list.slideToggle(300, function() {
				$(this).removeAttr('data-process');
			});
		};	


		init();
	})();

	
	app.scroll = (function() {

		var init = function() {

			$('.i-scroll').on('click', _scrollTo);
			$(document).on('click', 'a[href *=scroll-to_]', _scrollHashSelf);
		};

		var _scrollTo = function(e) {

			e.preventDefault();
			e.stopPropagation();

			var $this = $(e.target).closest('a,span').first()
				offset = $($this.data('rel')).offset() || 0,
				scrollTo = offset.top || 0,
				speed = $this.data('speed') || 300;


			$('html,body').animate({scrollTop: scrollTo}, speed);
		};

		var scrollToElement = function($el,time,amendment) {

			var offset = $el.offset() || 0,
				scrollTo = (offset.top || 0) + (amendment || 0),
				speed = time || 300;

			scroll = $('html,body').animate({scrollTop: scrollTo}, speed);
		};


		var _scrollHashSelf = function(e) {

			var $this = $(e.target),
				hash = $this.attr('href').split('#') || [];

			if (!hash[1])
				return;

			var to = hash[1].replace('scroll-to_',''),
				$to = $('[data-scroll-to="'+to+'"]');

			if ($to.length)
				scrollToElement($to, 500);
		}

		init();

		return {
			'to' : scrollToElement
		}
	})();
})(jQuery);