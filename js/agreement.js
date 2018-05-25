$(document).ready(function(){
    $('.plus-sign').click(function(){
		var tgr = $(this).attr('data-tc');
		$(this).siblings('.minus-sign').show();
		$(this).hide();
		$('.'+tgr).show();
	});
	$('.minus-sign').click(function(){
		var tgr = $(this).attr('data-tc');
		$(this).siblings('.plus-sign').show();
		$(this).hide();
		$('.'+tgr).hide();
	});
});