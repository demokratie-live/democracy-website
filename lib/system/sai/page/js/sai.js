$(document).ready(function() {
    new SYSTEM('./sai.php',42,'start');
    
    $('#sai_navbar ul li a, #project_navbar ul li a').click(function () {
        $('#sai_navbar li, #project_navbar li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
        system.reload($(this).attr('href'));
    });
    
    $('#sai_navbar li, #project_navbar li').each(function(){
        $(this).removeClass('active');});
    $("a[href='"+location.hash+"']").parent().addClass('active');
    
    $('.brand').click(function(){
        location.reload();
    });
});