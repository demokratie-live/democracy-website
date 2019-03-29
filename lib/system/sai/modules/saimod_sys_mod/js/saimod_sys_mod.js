function init_saimod_sys_mod() { 
    $("#sai_mod_mod_table").tablesorter();
    $('#tabs_mod a').click(function (e) {
        $('#tabs_mod a').each(function(){
            $(this).removeClass('active');});
        $(this).addClass('active');
    });
};

function init_saimod_sys_mod_system() {
    $("#sai_mod_mod_table").tablesorter();
    $('#tabs_mod a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mod_system').addClass('active');
}

function init_saimod_sys_mod_lib() {
    $("#sai_mod_mod_table").tablesorter();
    $('#tabs_mod a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mod_lib').addClass('active');
}