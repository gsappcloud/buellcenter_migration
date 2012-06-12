$(document).ready(function() {

	$('a.show-conf').bind('click', function() {
		// find element to show
		var element_id = $(this).attr('id');
		$('div.conf-teaser-end.' + element_id).hide();
		$('a#' + element_id).hide().hasClass('show-conf');
		// remove linebreak		
		$('.conf-teaser p:last-child').css('display', 'inline');
		$('span.conf-hidden.' + element_id).fadeIn(200);
	});

	$('a.hide-conf').bind('click', function() {
		// find element to show
		var element_id = $(this).attr('id');
		$('div.conf-teaser-end.' + element_id).show();
		$('a#' + element_id).show().hasClass('show-conf');
		// re-add linebreak		
		$('.conf-teaser p:last-child').css('display', 'block');
		$('span.conf-hidden.' + element_id).fadeOut(200);
	});
	
	
	if ($('div.rd-bg').length > 0) {
		var bg_value = $('div.rd-bg:first').text();
		var bg2 = bg_value.substring(1);
		$('body').css('background-color', "\#" + bg2);
	}

	if ($('div#rd-bg').length > 0) {
		var bg_value = $('div#rd-bg').text();
		var bg2 = bg_value.substring(1);
		$('body').css('background-color', "\#" + bg2);
	}
	

	

});

