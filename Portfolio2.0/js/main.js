$(document).ready(function() {

	$("#fig01").click(function() {
		$("#exp01").toggleClass("align-l");
		$("#exp-txt02").hide(300);
		$("#exp-txt01").toggle(300);
	});
	
	$("#fig02").click(function() {
		$("#exp02").toggleClass("align-l");
		$("#exp-txt01").hide(300);
		$("#exp-txt02").toggle(300);
	});
	
	$("#fig11").click(function() {
		$("#proj01").toggleClass("align-l");
		$("#proj-txt02").hide(300);
		$("#proj-txt03").hide(300);
		$("#proj-txt04").hide(300);
		$("#proj-txt01").toggle(300);
	});
	
	$("#fig12").click(function() {
		$("#proj02").toggleClass("align-l");
		$("#proj-txt01").hide(300);
		$("#proj-txt03").hide(300);
		$("#proj-txt04").hide(300);
		$("#proj-txt02").toggle(300);
	});
	
	$("#fig13").click(function() {
		$("#proj03").toggleClass("align-l");
		$("#proj-txt01").hide(300);
		$("#proj-txt02").hide(300);
		$("#proj-txt04").hide(300);
		$("#proj-txt03").toggle(300);
	});
	
	$("#fig14").click(function() {
		$("#proj04").toggleClass("align-l");
		$("#proj-txt01").hide(300);
		$("#proj-txt02").hide(300);
		$("#proj-txt03").hide(300);
		$("#proj-txt04").toggle(300);
	});
	
	$(".wrapper-menu").click(function() {
		$(".nav-m").toggle(200);
	});

});

function openMenu1(x){
	x.classList.toggle("open"); 
}
