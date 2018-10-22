$(document).ready(function(){
	$(".pw-toggle").click(function() {

		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).siblings(".input-pw-toggle"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});
});