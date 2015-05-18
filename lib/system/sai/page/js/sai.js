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
   $(document).on('ready', autocollapse);
   $(window).on('resize', autocollapse);
});

function sys_hashchange(state){
    $('.nav li,#sai_navbar li, #project_navbar li').each(function(){
        $(this).removeClass('active');});
    if($('#menu_'+state).parent().length){
        $('#menu_'+state).parent().addClass('active');
    } else {
        $('#menu_start').parent().addClass('active');}
}

function autocollapse() {
    var navbar = $('#sys_autocollapse');
    navbar.removeClass('collapsed'); // set standart view
    if(navbar.innerHeight() > 50) // check if we've got 2 lines
        navbar.addClass('collapsed'); // force collapse mode
}