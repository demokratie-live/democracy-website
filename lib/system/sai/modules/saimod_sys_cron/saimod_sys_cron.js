function init__SYSTEM_SAI_saimod_sys_cron() {
    saimod_sys_cron_register_clickevents();}

function saimod_sys_cron_register_clickevents(){
    $('tr.cron_entries').click(function() {
        console.log("ahsf");
        $.ajax({
            url: SAI_ENDPOINT,
                            data: { sai_mod: '.SYSTEM.SAI.saimod_sys_cron',
                                    action: 'deldialog',
                                    cls: $(this).attr("cls")},
                                type: 'GET',
                                success: function(data) {
                                    console.log("works");
                                    $('#cron_content').html(data);
                                    $('#del_cron_close').click(function() {
                                        console.log("olenski");
                                        $('#del_api_description').hide();
                                        $('#del_api_del').show();
                                    }); 
                                    $('#del_cron_del').click(function() {
                                    $.ajax({
                                        url: SAI_ENDPOINT,
                                                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_cron',
                                                                action: 'del',
                                                                cls: $(this).attr("cls")},
                                                            type: 'GET',
                                                            success: function(data) {
                                                                console.log("cron call deleted");
                                                                $('#cron_deletedialog').html('<p>Api call deleted!</p>');
                                                                $('#del_cron_del').hide();
                                                            }});});}});});
    
    $('#addcron').click(function() {
            var cls = $('#new_cron_class').val();
            var min = $('#new_cron_min').val();
            var hour = $('#new_cron_hour').val();
            var day = $('#new_cron_day').val();
            var day_week = $('#new_cron_day_week').val();
            var month = $('#new_cron_month').val();
            $.ajax({
            url: SAI_ENDPOINT,
                            data: { sai_mod: '.SYSTEM.SAI.saimod_sys_cron',
                                    action: 'add',
                                    cls: cls,
                                    min: min,
                                    hour: hour,
                                    day: day,
                                    day_week: day_week,
                                    month: month},
                                type: 'GET',
                                success: function(data) {
                                    console.log("new cronjob added");
                                }
            });
        
    });
    $('#del_cron_close').click(function() {
        console.log("olenski");
        $('#del_cron_description').hide();
        $('#del_cron_del').show();
    });
}