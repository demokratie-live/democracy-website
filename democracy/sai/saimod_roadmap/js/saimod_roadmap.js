function init_saimod_roadmap() {
    $('#table_goals select').change(function(){
        var optionSelected = $("option:selected", this);
        $(this).removeClass();
        $(this).addClass(optionSelected.attr('class'));
    });
    
    $('#table_goals select').change();
    
    $('#btn-roadmap-head-update').click(function(){
        var roadmap_beta_head_text = $('#input-roadmap-beta-head-text').val();
        var roadmap_beta_head_sub_text = $('#input-roadmap-beta-head-sub-text').val();
        var roadmap_beta_head_color = $('#input-roadmap-beta-head-color').val();
        var roadmap_mvp_head_text = $('#input-roadmap-mvp-head-text').val();
        var roadmap_mvp_head_sub_text = $('#input-roadmap-mvp-head-sub-text').val();
        var roadmap_mvp_head_color = $('#input-roadmap-mvp-head-color').val();
        var roadmap_dream_head_text = $('#input-roadmap-dream-head-text').val();
        var roadmap_dream_head_sub_text = $('#input-roadmap-dream-head-sub-text').val();
        var roadmap_dream_head_color = $('#input-roadmap-dream-head-color').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_roadmap',
                action: 'update_head',
                data: {
                    roadmap_beta_head_text,
                    roadmap_beta_head_sub_text,
                    roadmap_beta_head_color,
                    roadmap_mvp_head_text,
                    roadmap_mvp_head_sub_text,
                    roadmap_mvp_head_color,
                    roadmap_dream_head_text,
                    roadmap_dream_head_sub_text,
                    roadmap_dream_head_color
                }
            },
            success: function(data){
                if(data.status){
                    system.reload('roadmap');
                } else {
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
    
    $('#btn-roadmap-new-insert').click(function(){
        var order = $('#input-roadmap-new-order').val();
        var goal = $('#input-roadmap-new-goal').val();
        var issue = $('#input-roadmap-new-issue').val();
        var beta = $('#input-roadmap-new-beta').val();
        var mvp = $('#input-roadmap-new-mvp').val();
        var dream = $('#input-roadmap-new-dream').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_roadmap',
                action: 'insert',
                data: {
                    order: order,
                    goal: goal,
                    issue: issue,
                    beta: beta,
                    mvp: mvp,
                    dream: dream,
                }
            },
            success: function(data){
                if(data.status){
                    system.reload('roadmap');
                } else {
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
    
    $('.btn-roadmap-update').click(function(){
        var id = $(this).attr('goal');
        var order = $('#input-roadmap-order-'+id).val();
        var goal = $('#input-roadmap-goal-'+id).val();
        var issue = $('#input-roadmap-issue-'+id).val();
        var beta = $('#input-roadmap-beta-'+id).val();
        var mvp = $('#input-roadmap-mvp-'+id).val();
        var dream = $('#input-roadmap-dream-'+id).val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_roadmap',
                action: 'update',
                data: {
                    id: id,
                    order: order,
                    goal: goal,
                    issue: issue,
                    beta: beta,
                    mvp: mvp,
                    dream: dream,
                }
            },
            success: function(data){
                if(!data.status){
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
    
    $('.btn-roadmap-del').click(function(){
        var ids = [$(this).attr('goal')];
        if (confirm('Are you sure you want to delete this Goal PERMANENTLY?')) {
            $.ajax({
                async: true,
                url: this.endpoint,
                type: 'POST',
                dataType: 'JSON',
                data: {
                    sai_mod: '.SAI.saimod_roadmap',
                    action: 'delete',
                    data: ids
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
        }
    });
};