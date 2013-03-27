$(document).ready(function() {


	$("#block-views-research_programs-block_1 h2").html("<a href=\"#\" id=\"rp_showhide\">Research &amp; Programs <span style=\"font-weight: normal;\">[ - ]</span></a>");

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
		$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ + ]</span>");
		$("div.view-id-research_programs").hide();
		document.cookie = "buellcenter-org-menu=hidden";
	}

	/* research programs block show hide */
	/* adding the plus minus logic here, since the default drupal block title does not
	   support HTML characters */
	//var rp_title = $("#block-views-research_programs-block_1 h2").html();

	// show hide menu based on cookie
 	var current_state = document.cookie;

 	if (current_state.indexOf("buellcenter-org-menu=hidden") > 0) {
 		// hide the menu based on cookie
		$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ + ]</span>");
  	$("div.view-id-research_programs").hide();
 	}

	$('#rp_showhide').bind("click", function() {
		console.log('click');
		if (current_state.indexOf("buellcenter-org-menu=hidden") > 0) {
	 		$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ - ]</span>");
			$("div.view-id-research_programs").show();
			document.cookie = "buellcenter-org-menu=showing";
	 	} else {
		  $("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ + ]</span>");
			$("div.view-id-research_programs").hide();
			document.cookie = "buellcenter-org-menu=hidden";
  	}
  });

});

