function init_saimod_sys_mod() {          
    $('#tabs_mod a').click(function (e) {
        $('#tabs_mod li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
};

function init_saimod_sys_mod_system() {
    $('#tabs_mod li').each(function(){
        $(this).removeClass('active');});
    $('#menu_mod_system').parent().addClass('active');
}

function init_saimod_sys_mod_project() {
    $('#tabs_mod li').each(function(){
        $(this).removeClass('active');});
    $('#menu_mod_project').parent().addClass('active');
}

function init_saimod_sys_mod_lib() {
    $('#tabs_mod li').each(function(){
        $(this).removeClass('active');});
    $('#menu_mod_lib').parent().addClass('active');
}