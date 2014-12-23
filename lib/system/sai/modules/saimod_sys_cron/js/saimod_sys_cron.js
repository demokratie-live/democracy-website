function init__SYSTEM_SAI_saimod_sys_cron() {
    register_cron_add();
    register_cron_del();
    register_cron_edit();
}

function register_cron_del(){
    $('.btn_cron_del').click(function(){
        $.ajax({    type :'GET',
                    url  : SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_cron&action=del'+
                            '&cls='+$(this).attr('_class'),
                    success : function(data) {
                        if(data.status){
                            alert('Sucess');
                        }else{
                            alert('Problem: '+data);}
                    }
        });
    });
}

function register_cron_edit(){
    $('.btn_cron_edit').click(function(){
        $('#input_cron_class').val($(this).attr('_class'));
        $('#input_cron_min').val($(this).attr('_min'));
        $('#input_cron_hour').val($(this).attr('_hour'));
        $('#input_cron_day').val($(this).attr('_day'));
        $('#input_cron_day_week').val($(this).attr('_day_week'));
        $('#input_cron_month').val($(this).attr('_month')); 
        $("#btn_cron_add").focus();
    });
}

function register_cron_add(){
    $('#btn_cron_add').click(function() {
        var cls = $('#input_cron_class').val();
        var min = $('#input_cron_min').val();
        var hour = $('#input_cron_hour').val();
        var day = $('#input_cron_day').val();
        var day_week = $('#input_cron_day_week').val();
        var month = $('#input_cron_month').val();
        $.ajax({url: SAI_ENDPOINT,
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
                    if(data.status){
                        $('#content-wrapper').load(SAI_ENDPOINT + 'sai_mod=.SYSTEM.SAI.saimod_sys_cron',function(){
                            init__SYSTEM_SAI_saimod_sys_cron();
                        });
                    }else{
                        alert('Problem: '+data);}
                }
        });
    });
}