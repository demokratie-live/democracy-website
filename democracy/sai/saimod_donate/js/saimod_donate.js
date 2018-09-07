function init_saimod_donate() {
    $('#donate-update').click(function(){
        var paten       = $('#donate-paten').val();
        var value       = $('#donate-value').val();
        var paten_goal  = $('#donate-paten-goal').val();
        var value_goal  = $('#donate-value-goal').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'GET',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_donate',
                action: 'update',
                paten: paten,
                value: value,
                paten_goal: paten_goal,
                value_goal: value_goal
            },
            success: function(data){
                if(data.status){
                    system.reload();
                } else {
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
    
    $('.select-details-type').trigger('change');
};

function detail_type(e){
    switch(e.val()){
        case '1':
            $(e).parent().parent().find('.input-details-value').show();
            $(e).parent().parent().find('.input-details-max').show();
            $(e).parent().parent().find('.input-details-text-cost').show();
            $(e).parent().parent().find('.input-details-text-description-subtext').show();
            $(e).parent().parent().find('.input-details-text-date').show();
            break;
        default:
            $(e).parent().parent().find('.input-details-value').hide();
            $(e).parent().parent().find('.input-details-max').hide();
            $(e).parent().parent().find('.input-details-text-cost').hide();
            $(e).parent().parent().find('.input-details-text-description-subtext').hide();
            $(e).parent().parent().find('.input-details-text-date').hide();
    }
    
}