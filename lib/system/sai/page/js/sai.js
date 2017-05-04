$(document).ready(function() {
    new SYSTEM('./sai.php',42,'start',sys_hashchange);    
    $('.brand').click(function(){
        location.reload();
    }); 
    $('[data-toggle="tooltip"]').tooltip();
    //autocollapse();
    $(window).on('resize', autocollapse);
});

function sys_hashchange(state){
    console.log(state);
    state = state ? state.split(';')[0].split('(')[0] : state;
    $('.nav li,#sai_navbar li, #project_navbar li').each(function(){
        $(this).removeClass('active');});
    if($('#menu_'+state).parent().length){
        $('#menu_'+state).parent().addClass('active');
    } else {
        $('#menu_start').parent().addClass('active');}
}

function autocollapse() {
    $('.navbar-collapse').collapse('show');
    var navbar = $('#sys_autocollapse');
    navbar.removeClass('collapsed'); // set standart view
    if(navbar.innerHeight() > 50) // check if we've got 2 lines
        navbar.addClass('collapsed'); // force collapse mode
}