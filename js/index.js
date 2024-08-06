$(document).ready(function() {
    $('app').html('Please Start Search');
/*
    $('.nav-logo').on('click', function() {
		loadPage($(this).data('page'));
		loadPage('kms_nav', g_NAV);
	});

	loadPage('kms');
	loadPage('kms_nav', g_NAV);
*/
});

/*******
 if(!$('#dnr').is(':checked')) {
    console.log("DNR");
} else {
    console.log("Can Work");
}

$('#dnr').is(':checked')
Returns true/false based on if a checkbox is checked or not.
*******/

function dataCleanUp(param_string) {
	var temp_string = param_string.trim().replace(/&/g, "&amp;");
	var temp_len = g_SEARCH_ENTITIES.length;
	for(i = 0; i < temp_len; i++) {
		temp_string = temp_string.replace(new RegExp(g_SEARCH_ENTITIES[i], 'g'), g_REPLACE_ENTITIES[i]);
	}
	return temp_string;
}
function reverseEntities(param_string) {
	var temp_string;
	if(typeof param_string == "string") {
		temp_string = param_string.trim().replace(/&amp;/g, "&");
		var temp_len = g_SEARCH_ENTITIES.length;
		for(i = 0; i < temp_len; i++) {
			temp_string = temp_string.replace(new RegExp(g_REPLACE_ENTITIES[i], 'g'), g_SEARCH_ENTITIES[i]);
		}
		return temp_string;
	}
}

function generateRandomString(param_seed = 5) {
	/* 65 is the ASCII code for a capital 'A'. This goes through to 90 which is a capital 'Z' */
	var asciiCodeStart = 65;
	String.fromCharCode(asciiCodeStart + Math.floor(Math.random() * 26))
	return String.fromCharCode(asciiCodeStart + Math.floor(Math.random() * 26)) + "-" + Math.random().toString(36).substring(2, param_seed).toUpperCase();
}

function setKeyEvents(param_page, param_element, param_multiplier = 1) {
	$('#' + param_element).on('keypress', {page: param_page, inputEl: param_element, timerMultiplier: param_multiplier}, keyPressEvent);
	$('#' + param_element).on('keyup', {page: param_page, inputEl: param_element, timerMultiplier: param_multiplier}, keyUpEvent);
}

function clearTimer(param_timer) {
	window.clearTimeout(param_timer); // prevent errant multiple timeouts from being generated
}