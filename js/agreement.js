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
	$('#all-codes').on('change', function(){
		if($(this).is(':checked')){
			$('.plus-sign').show();
			$('.minus-sign').hide();
			$('.toggle-tr').hide();
		}else{
			$('.minus-sign').show();
			$('.toggle-tr').show();
			$('.plus-sign').hide();
		}
	});
});