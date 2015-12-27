$(document).ready(function() {
	$('.project-content').hide();
	$('.project-title').on('click', function() {
		$(this).hide();
		$(this).next().show();
	}, function() {
		$(this).show();
		$(this).next().hide();
	});
});