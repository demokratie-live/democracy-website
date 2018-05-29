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
};