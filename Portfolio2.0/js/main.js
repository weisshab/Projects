$(document).ready(function() {

	$("#fig01").hover(function() {
			$("#exp-txt02").hide(300);
			$("#exp-txt01").toggle(300);
		});
	
	$("#fig02").hover(function() {
		$("#exp-txt01").hide(300);
		$("#exp-txt02").toggle(300);
	});
	
	$("#fig11").hover(function() {
		$("#proj-txt02").hide(300);
		$("#proj-txt03").hide(300);
		$("#proj-txt04").hide(300);
		$("#proj-txt01").toggle(300);
	});
	
	$("#fig12").hover(function() {
		$("#proj-txt01").hide(300);
		$("#proj-txt03").hide(300);
		$("#proj-txt04").hide(300);
		$("#proj-txt02").toggle(300);
	});
	
	$("#fig13").hover(function() {
		$("#proj-txt01").hide(300);
		$("#proj-txt02").hide(300);
		$("#proj-txt04").hide(300);
		$("#proj-txt03").toggle(300);
	});
	
	$("#fig14").hover(function() {
		$("#proj-txt01").hide(300);
		$("#proj-txt02").hide(300);
		$("#proj-txt03").hide(300);
		$("#proj-txt04").toggle(300);
	});

});