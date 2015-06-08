function init_saimod_sys_mod() { 
    $("#sai_mod_sys_table").tablesorter();
    $('#tabs_mod a').click(function (e) {
        $('#tabs_mod li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
};

function init_saimod_sys_mod_system() {
    $("#sai_mod_sys_table").tablesorter();
    $('#tabs_mod li').each(function(){
        $(this).removeClass('active');});
    $('#menu_mod_system').parent().addClass('active');
}

function init_saimod_sys_mod_project() {
    $("#sai_mod_sys_table").tablesorter();
    $('#tabs_mod li').each(function(){
        $(this).removeClass('active');});
    $('#menu_mod_project').parent().addClass('active');
}

function init_saimod_sys_mod_lib() {
    $("#sai_mod_sys_table").tablesorter();
    $('#tabs_mod li').each(function(){
        $(this).removeClass('active');});
    $('#menu_mod_lib').parent().addClass('active');
}