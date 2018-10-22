$(document).ready(function() {
    $("input[name='radio-commission-statement']").change(function() {
        console.log("here");
        var isOnline = $(this).data('is-online');
        if (isOnline){
                $('.commission-download').show();
                $(".request-col").hide();
                $(".recipients-address").hide();
            }else {
                $('.commission-download').hide();
            }
    });
});