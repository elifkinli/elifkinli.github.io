$(document).ready(function() {
	$(".homepage-button")
	.mouseenter(function() {
		$('.menu-header').hide();
		$('.menu-content').show();
	})
	.mouseleave(function() {
		$('.menu-header').show();
		$('.menu-content').hide();
	});
});
