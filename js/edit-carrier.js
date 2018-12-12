$(document).ready(function(){
    $(".toggle-boxes-btn .fa-plus-circle").click(function(){
		$(this).hide();
		$(this).siblings(".fa-minus-circle").show();
		$(".toggle-boxes").show();
	});
	$(".toggle-boxes-btn .fa-minus-circle").click(function(){
		$(this).hide();
		$(this).siblings(".fa-plus-circle").show();
		$(".toggle-boxes").hide();
	});
	$('input[name="radio-sample"]').click(function(){
		var raSam = $(this).val();
		if(raSam=="Carrier"){
			$(".carrier").show();
            $(".wholesaler").hide();

		}else if(raSam=="Wholesaler"){
            $(".wholesaler").show();
            $(".carrier").hide();
		}
	});
});