(function($){
	
	// РљРѕР»РёС‡РµСЃС‚РІРѕ СЃРµРєСѓРЅРґ РІ РєР°Р¶РґРѕРј РІСЂРµРјРµРЅРЅРѕРј РѕС‚СЂРµР·РєРµ
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;
	
	// РЎРѕР·РґР°РµРј РїР»Р°РіРёРЅ
	$.fn.countdown = function(prop){
		
		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);
		
		var left, d, h, m, s, positions;

		// РёРЅРёС†РёР°Р»РёР·РёСЂСѓРµРј РїР»Р°РіРёРЅ
		//init(this, options);
		
		positions = this.find('.position');
		
		(function tick(){
			
			// РћСЃС‚Р°Р»РѕСЃСЊ РІСЂРµРјРµРЅРё
			left = Math.floor((options.timestamp - (new Date())) / 1000);
			
			if(left < 0){
				left = 0;
			}
			
			// РћСЃС‚Р°Р»РѕСЃСЊ РґРЅРµР№
			d = Math.floor(left / days);
			if(d <= 9) d = "0"+d;
			updateDuo(0, 1, d);
			left -= d*days;
			
			// РћСЃС‚Р°Р»РѕСЃСЊ С‡Р°СЃРѕРІ
			h = Math.floor(left / hours);
			if(h <= 9) h = "0"+h;
			updateDuo(2, 3, h);
			left -= h*hours;
			
			// РћСЃС‚Р°Р»РѕСЃСЊ РјРёРЅСѓС‚
			m = Math.floor(left / minutes);
			if(m <= 9) m = "0"+m;
			updateDuo(4, 5, m);
			left -= m*minutes;
			
			// РћСЃС‚Р°Р»РѕСЃСЊ СЃРµРєСѓРЅРґ
			s = left;
			if(s <= 9) s = "0"+s;
			updateDuo(6, 7, s);
			
			// Р’С‹Р·С‹РІР°РµРј РІРѕР·РІСЂР°С‚РЅСѓСЋ С„СѓРЅРєС†РёСЋ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
			options.callback(d, h, m, s);
			
			// РџР»Р°РЅРёСЂСѓРµРј СЃР»РµРґСѓСЋС‰РёР№ РІС‹Р·РѕРІ РґР°РЅРЅРѕР№ С„СѓРЅРєС†РёРё С‡РµСЂРµР· 1 СЃРµРєСѓРЅРґСѓ
			setTimeout(tick, 1000);
		})();
		
		// Р”Р°РЅРЅР°СЏ С„СѓРЅРєС†РёСЏ РѕР±РЅРѕРІР»СЏРµС‚ РґРІРµ С†РёС„СЂРѕРІС‹Рµ РїРѕР·РёС†РёРё Р·Р° РѕРґРёРЅ СЂР°Р·
		function updateDuo(minor,major,value){
			//switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			//switchDigit(positions.eq(major),value%10);
		}
		
		return this;
	};


	// Р—РґРµСЃСЊ СЂР°Р·РјРµС‰Р°СЋС‚СЃСЏ РґРІРµ РІСЃРїРѕРјРѕРіР°С‚РµР»СЊРЅС‹Рµ С„СѓРЅРєС†РёРё

})(jQuery);

$(document).ready(function() {

	$('#timer').countdown({
		timestamp: new Date(2016, 7, 26),
		callback: function(days, hours, minutes, seconds){
			$(".days strong").html(days);
			$(".hours strong").html(hours);
			$(".minutes strong").html(minutes);
			$(".secs strong").html(seconds);
		}
	});
	
});