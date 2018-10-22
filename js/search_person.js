var options = {
    valueNames: ['lastName']
};

var personList = new List('searchPersons', options);
(function($) {
    $('#personnelLastName').focus(function(){
        $(this).val('');
    });
   $('.list a.pname').click(function(){
       $('a.pname').removeClass('active');
       $('#search-autocomplete').hide();
       $('.table-detail').hide();
       $(this).addClass('active');
       var dataName = $(this).attr('data-detail');
       var fullName = $(this).html();
       $('#personnelLastName').val(fullName);
       $('.table-detail[data-person-detail="'+dataName+'"]').show();
    });
    $('#personnelLastName').on('keyup', function(){
        if( $(this).val() !=''){
            $('#search-autocomplete').show();
        }else{
            $('#search-autocomplete').hide();
        }
    });
})(jQuery);