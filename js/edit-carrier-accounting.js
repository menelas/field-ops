$(document).ready(function(){
	$('input#mail').click(function(){
        $(".request-col").hide();
        $(".add-address").hide();
        $(".recipients-address").show();
	});
    $('input#requested').click(function(){
        $(".recipients-address").hide();
        $(".add-address").show();
        $(".request-col").show();
    });
});
