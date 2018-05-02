$(document).ready(function() {

	$("#fig01").click(function() {
			$("#exp-txt02").hide(300);
			$("#exp-txt01").toggle(300);
		});
	
	$("#fig02").click(function() {
		$("#exp-txt01").hide(300);
		$("#exp-txt02").toggle(300);
	});
	
	$("#fig11").click(function() {
		$("#proj-txt02").hide(300);
		$("#proj-txt03").hide(300);
		$("#proj-txt04").hide(300);
		$("#proj-txt01").toggle(300);
	});
	
	$("#fig12").click(function() {
		$("#proj-txt01").hide(300);
		$("#proj-txt03").hide(300);
		$("#proj-txt04").hide(300);
		$("#proj-txt02").toggle(300);
	});
	
	$("#fig13").click(function() {
		$("#proj-txt01").hide(300);
		$("#proj-txt02").hide(300);
		$("#proj-txt04").hide(300);
		$("#proj-txt03").toggle(300);
	});
	
	$("#fig14").click(function() {
		$("#proj-txt01").hide(300);
		$("#proj-txt02").hide(300);
		$("#proj-txt03").hide(300);
		$("#proj-txt04").toggle(300);
	});

});