/*
 * Textyle.js
 * https://myscreate.com
 * MIT licensed
 * Copyright (C) 2019 ma-ya's CREATE
 */
(function($){  
	$.fn.textyle = function(options){
		var target = this;
		var targetTxt = target.contents();
		var defaults = {
					duration : 400,
					delay : 100,
					easing : 'swing',
					callback : null
				};
		var setting = $.extend(defaults, options);
		targetTxt.each(function(){
			var target = $(this);
			if(this.nodeType === 3){
				mkspn(target);
			}
		});
		function mkspn(elem){
			elem.replaceWith(elem.text().replace(/(\S)/g,'<span>$1</span>'));
		}
		this.each(function(){
			var target = $(this);
			var len = target.children().length;
			target.css('opacity',1);
			for (var i = 0; i < len; i++) {
				target.children('span:eq('+i+')')
				.delay(setting.delay*i)
				.animate({
					opacity : 1,
					top : 0,
					left : 0,
				},setting.duration,setting.easing,setting.callback);
			};
		});
		return this;
	};
}( jQuery ));