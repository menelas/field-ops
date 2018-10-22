$(function() {
	$(document).on('click', 'a.add-managed-code', function(e){
		e.preventDefault();
		var appended_row = $(this).parents(".tableheader").siblings(".panel-body").find('#managed-code tr:first-child').clone();
		$(appended_row).insertAfter($(this).parents(".tableheader").siblings(".panel-body").find('#managed-code tr:first-child'));
	});
});