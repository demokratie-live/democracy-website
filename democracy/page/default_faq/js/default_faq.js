function init_faq(){
    $(".nav-item").removeClass("active");
    $(".navbar").removeClass("startpage");
    
    $('.panel-faq').on('show.bs.collapse', function (e) {
        $(".openarrow",this).css("transform","rotate(180deg)");
    });
    $('.panel-faq').on('hide.bs.collapse', function (e) {
        $(".openarrow",this).css("transform","rotate(0deg)");
    });
    $('.faq-menu').click(function() {
        $('.faq-menu').removeClass('active');
        $(this).addClass('active');
        var category = $(this).attr('category');
        if(category){
            $('.panel-faq').hide();
            $('.panel-faq.'+category).show();
        } else {
            $('.panel-faq').show();
        }
        $('.panel-faq .collapse').collapse('hide');
        $('.panel-faq:visible .collapse:first').collapse('show');
    });
}