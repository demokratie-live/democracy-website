$(document).ready(function() {
    new SYSTEM('./sai.php',42,'start',sys_hashchange);    
    $('.brand').click(function(){
        location.reload();
    }); 
    //autocollapse();
    $(window).on('resize', autocollapse);
    sai_sort_tables();
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
    $('.navbar-collapse').collapse('show');
    var navbar = $('#sys_autocollapse');
    navbar.removeClass('collapsed'); // set standart view
    if(navbar.innerHeight() > 50) // check if we've got 2 lines
        navbar.addClass('collapsed'); // force collapse mode
}

function sai_sort_tables(col) {    
    //console.log($('tr'));
    //console.log($('tr.sai_not_sortable'));
    var tableRows = $('tr');
    var sortArray = [];
    for (var i = 0; i < tableRows.length; i++){
        sortArray.push(tableRows[i]);
        if (tableRows[i].className === 'sai_not_sortable') {
            array_sort(sortArray, col);
        }
        }
}

function array_sort(sortArray, col){
    for (var i = 0; i < sortArray.length; i++){
        //console.log(sortArray[i].children[col]);
    }
}