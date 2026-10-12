function init_saimod_sys_config() {  
    $("#table_config").tablesorter();
}

function init_saimod_sys_config_basics() {
    $('#table_config').trigger('update');
    $('#tabs_config li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_basics').addClass('active');
}

function init_saimod_sys_config_database() {
    $('#table_config').trigger('update');
    $('#tabs_config li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_database').addClass('active');
}

function init_saimod_sys_config_sai() {
   $('#table_config').trigger('update');
   $('#tabs_config li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_sai').addClass('active');
}