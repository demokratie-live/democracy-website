function init_saimod_sys_log() {
    $("#sai_mod_log_table").tablesorter();
    $('#tabs_log a').click(function (e) {
        $('#tabs_log li a').each(function(){
            $(this).removeClass('active');});
        $(this).addClass('active');
    });
};

function register_search(){
    $('#btn_search_log').click(function(){
        system.load($(this).attr('state')+encodeURIComponent($('#input_search_log').val()),true);
    });
}

function init_saimod_sys_log_log() {
    $("#sai_mod_log_table").tablesorter();
    $('#tabs_log li').each(function(){
        $(this).removeClass('active');});
    $('#menu_loglist').parent().addClass('active');
    register_search();
}