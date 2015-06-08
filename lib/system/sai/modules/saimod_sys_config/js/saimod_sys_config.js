function init_saimod_sys_config() {  
    $("#sai_mod_table_basics").tablesorter();
}

function init_saimod_sys_config_basics() {
    $("#sai_mod_table_basics").tablesorter();
    $('#tabs_config li').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_basics').parent().addClass('active');
    //saimod_config_tablesort("sai_mod_table_basics");
}

function init_saimod_sys_config_database() {
    $("#sai_mod_table_database").tablesorter();
    $('#tabs_config li').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_database').parent().addClass('active');
    //saimod_config_tablesort("sai_mod_table_database");
}

function init_saimod_sys_config_sai() {
   $("#sai_mod_table_sai").tablesorter();
   $('#tabs_config li').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_sai').parent().addClass('active');
    //saimod_config_tablesort("sai_mod_table_sai");
}

//function saimod_config_tablesort(id){
//    var table_basics = document.getElementById(id);
//    var sort = new Tablesort(table_basics, {descending: true});
//    sort.refresh();
//}