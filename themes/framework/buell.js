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
	

	/* show hide about subsections */
	if (
		(window.location.pathname == "/about")   || 
		(window.location.pathname == "/history") ||
		(window.location.pathname == "/people")  ||
		(window.location.pathname == "/contact")) {
		$("#about-submenu").show();
	}

	/* research programs block show hide */
	/* adding the plus minus logic here, since the default drupal block title does not
	   support HTML characters */
	var rp_title = $("#block-views-research_programs-block_1 h2").html();
	$("#block-views-research_programs-block_1 h2").html(rp_title + "&nbsp; <a href=\"#\" id=\"research_programs_showhide\">[ - ]</a>");

	var counter = 0;
	$('#research_programs_showhide').css(
		{	'font-weight': 'normal',
			'text-decoration': 'none'}
	);

	// show hide menu based on cookie
 	var current_state = document.cookie;
 	console.log(current_state);

 	if (current_state.indexOf("buellcenter-org-menu=showing") < 0) {
 		// hide the menu based on cookie
 		$("#research_programs_showhide").text("[ + ]");
  	$("div.view-id-research_programs").hide();
 	}

 	
	$('#research_programs_showhide').bind("click", function() {
  	if (counter % 2 == 0) {
  		$("#research_programs_showhide").text("[ + ]");
  		$("div.view-id-research_programs").hide();
  		document.cookie = "buellcenter-org-menu=hidden";
  	} else {
  		$("#research_programs_showhide").text("[ - ]");
  		$("div.view-id-research_programs").show();
			document.cookie = "buellcenter-org-menu=showing";
  	}
  	counter++;
  });

});

