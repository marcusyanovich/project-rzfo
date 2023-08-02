(function($){ 
$(window).on('load',function(){ 
	$('.formochki .frm_submit button').each(function(){ 
		if ($(this).hasClass('frm_submit_load')) return; 
		$(this).addClass('frm_submit_load'); 
		var elem = $(this).parents('.formochki'); 
		$('.frm_result', elem).hide(); 
		$('form',elem).submit(function(){ return false; }); 
		$(this).click(function(){ 
			$.post($('form',elem).attr('action')+"?formochki", $('form',elem).serialize()).done(function(data){ 
					var result = $.parseJSON(data); 
					$('.frm_result',elem).hide(); 
					if (result.res == 'ok') { 
						$('.frm_result_ok',elem).show(); 
					} else { 
						if (result.text) $('.frm_result_er',elem).html(result.text); 
						$('.frm_result_er',elem).show(); 
					} 
					if (result.hideform == 'true') { 
						$('form',elem).remove(); 
					} 
				}); 
			return; 
		}); 
	}); 
}); 
})(jQuery);