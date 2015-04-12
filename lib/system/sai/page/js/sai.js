$(document).ready(function() {
    new SYSTEM('./sai.php',42,'start',sys_hashchange);
    
    $('#sai_navbar ul li a, #project_navbar ul li a').click(function () {
        $('#sai_navbar li, #project_navbar li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
        system.reload($(this).attr('href'));
    });
    
    $('.brand').click(function(){
        location.reload();
    });
});

function sys_hashchange(state){
    $('.nav li,#sai_navbar li, #project_navbar li').each(function(){
        $(this).removeClass('active');});
    $('#menu_'+state).parent().addClass('active');
}