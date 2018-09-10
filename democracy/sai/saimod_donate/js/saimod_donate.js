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
    
    $('.donate-details-delete').click(function(){
        var detail = $(this).attr('detail');
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'GET',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_donate',
                action: 'detail_delete',
                detail: detail,
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
    
    $('.donate-details-update').click(function(){
        var detail = $(this).attr('detail');
        var order = $(this).parent().parent().find('.input-details-order').val();
        var type = $(this).parent().parent().find('.select-details-type').val();
        var value = $(this).parent().parent().find('.input-details-value').val();
        var max = $(this).parent().parent().find('.input-details-max').val();
        var text_cost = $(this).parent().parent().find('.input-details-text-cost').val();
        var text_description = $(this).parent().parent().find('.input-details-text-description').val();
        var text_description_subtext = $(this).parent().parent().find('.input-details-text-description-subtext').val();
        var text_date = $(this).parent().parent().find('.input-details-text-date').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'GET',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_donate',
                action: 'detail_update',
                data: {
                    detail: detail,
                    order: order,
                    type: type,
                    value: value,
                    max: max,
                    text_cost: text_cost,
                    text_description: text_description,
                    text_description_subtext: text_description_subtext,
                    text_date: text_date,
                },
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
    
    $('#donate-details-insert').click(function(){
        var order = $(this).parent().parent().find('.input-details-order').val();
        var type = $(this).parent().parent().find('.select-details-type').val();
        var value = $(this).parent().parent().find('.input-details-value').val();
        var max = $(this).parent().parent().find('.input-details-max').val();
        var text_cost = $(this).parent().parent().find('.input-details-text-cost').val();
        var text_description = $(this).parent().parent().find('.input-details-text-description').val();
        var text_description_subtext = $(this).parent().parent().find('.input-details-text-description-subtext').val();
        var text_date = $(this).parent().parent().find('.input-details-text-date').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'GET',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_donate',
                action: 'detail_insert',
                data: {
                    order: order,
                    type: type,
                    value: value,
                    max: max,
                    text_cost: text_cost,
                    text_description: text_description,
                    text_description_subtext: text_description_subtext,
                    text_date: text_date,
                },
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