function init_saimod_sys_config() {  
    $('#tabs_config a').click(function (e) {
        $('#tabs_config li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
}

function init_saimod_sys_config_basics() {
    $('#tabs_config li').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_basics').parent().addClass('active');
}

function init_saimod_sys_config_database() {
    $('#tabs_config li').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_database').parent().addClass('active');
}

function init_saimod_sys_config_sai() {
   $('#tabs_config li').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_sai').parent().addClass('active');
}

function config_menu(){
    $('#tabs_config li').each(function(){
        $(this).removeClass('active');});
    if($('#menu_tag__'+system.cur_state().split('.')[1]).length){
        $('#menu_tag__'+system.cur_state().split('.')[1]).parent().addClass('active');
    } else {
        $('menu_tag_basics').parent().addClass('active');}
}
/*
var table_basics = document.getElementById('sai_mod_config_table_basics');
var sort = new Tablesort(table_basics);
function sort_table(){
    console.log("testme");
    
}

table_basics.addEventListener('beforeSort', function() {
  alert('Table is about to be sorted!');
});

table_basics.addEventListener('afterSort', function() {
  alert('Table sorted!');
});*/