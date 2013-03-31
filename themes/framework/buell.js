$(document).ready(function() {

 	//console.log(getMenuStatus());
 	//console.log(document.cookie);
/*

 	// if cookie contains conflicting values defer to show and erase the rest
	if (	(document.cookie.indexOf("buellcenter-org-menu=hidden") > -1) && 
				(document.cookie.indexOf("buellcenter-org-menu=showing") > -1)) {
		console.log("cookie is confused");
		// show the menu
		$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ + ]</span>");
  	$("div.view-id-research_programs").show();
		document.cookie = "buellcenter-org-menu" + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		console.log('wiped cookie');
		console.log(document.cookie);
	}
*/


	$("#block-views-research_programs-block_1 h2").html(
		"<a href=\"#\" id=\"rp_showhide\">Research &amp; Programs <span style=\"font-weight: normal;\">[ - ]</span></a>");


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
	
	// show hide about subsections
	if (
		(window.location.pathname == "/about")   || 
		(window.location.pathname == "/history") ||
		(window.location.pathname == "/people")  ||
		(window.location.pathname == "/contact")) {
		$("#about-submenu").show();
		$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ + ]</span>");
		$("div.view-id-research_programs").hide();
		setMenuStatus("hidden");
		//console.log('modified cookie due to about or subsections');
		//console.log('cookie now is ' + document.cookie);
	}

	/* research programs block show hide */
	/* adding the plus minus logic here, since the default drupal block title does not
	   support HTML characters */
	//var rp_title = $("#block-views-research_programs-block_1 h2").html();

	// show hide menu based on cookie
	if (getMenuStatus() == "hidden") {
		$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ + ]</span>");
  	$("div.view-id-research_programs").hide();
  	//console.log("status was hidden so done hiding menu");
	} else if (getMenuStatus() == "showing") {
		$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ - ]</span>");
  	$("div.view-id-research_programs").show();
  	//console.log("status was showing so done showing menu");
	} else {
		// no status found yet so show it and set it
		//console.log('status not found ! - showing');
		$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ - ]</span>");
  	$("div.view-id-research_programs").show();
  	setMenuStatus("showing");
	}
	//console.log("processed status = it is now " + getMenuStatus());

	// click events
	$('#rp_showhide').bind("click", function() {
		//console.log('click registerd');
		//console.log('cookie is ' + document.cookie);
		//console.log("status read is " + getMenuStatus());
		
		if (getMenuStatus() == "hidden") {
			//console.log("hiding so switching to show");
			$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ - ]</span>");
  		$("div.view-id-research_programs").show();
  		setMenuStatus("showing");
		} else if (getMenuStatus() == "showing") {
			//console.log("showing so switch to hide");
			$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ + ]</span>");
  		$("div.view-id-research_programs").hide();
  		setMenuStatus("hidden");
		} else {
			// a click registered but no cookie yet - this should not be possible
			// set it to showing
			$("#rp_showhide").html("Research &amp; Programs <span style=\"font-weight: normal;\">[ - ]</span>");
  		$("div.view-id-research_programs").show();
  		setMenuStatus("showing");
  		//console.log('no status - set to show');

		}
		//console.log('done click = status is now ' + getMenuStatus());
		//console.log(document.cookie);
  });

}); // end doc loop

function getMenuStatus()
{
  var cookies = document.cookie.split(";");
  var index;
  for(index = 0; index < cookies.length; index++)
  {
    cookieEntry = cookies[index].split("=");
    if ("buellcenter-org-menu" == $.trim(cookieEntry[0]))
    {
       return cookieEntry[1];
    }
  }
  return null;
}

function setMenuStatus(status) {
	document.cookie = "buellcenter-org-menu=" + status;
	//console.log('status set to ' + status);
	//console.log(document.cookie);
}