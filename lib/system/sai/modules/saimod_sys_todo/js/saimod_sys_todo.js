function init_saimod_sys_todo() {
    $('#tabs_todo a').click(function (e) {
        $('#tabs_todo li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
    
    $('#btn_close_all').click(function(){
        if (confirm('Are you sure you want to delete all open entries in the todolist?')) {
            $.ajax({    type :'GET',
                        url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=close_all',
                        success : function(data) {
                            if(data.status){
                                system.load('todo');
                            }else{
                                alert('Problem: '+data);}
                        }
            });
        }
    })
};

function init_saimod_sys_todo_todo() {
    $('#tabs_todo li').each(function(){
        $(this).removeClass('active');});
    $('#menu_todolist').parent().addClass('active');
}

function init_saimod_sys_todo_doto() {
    $('#tabs_todo li').each(function(){
        $(this).removeClass('active');});
    $('#menu_doto').parent().addClass('active');
}

function init_saimod_sys_todo_stats() {
    $('#tabs_todo li').each(function(){
        $(this).removeClass('active');});
    $('#menu_stats').parent().addClass('active');
}

function init_saimod_sys_todo_todoopen(){
    $('#btn_edit').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=edit&todo='+$(this).attr('todo')+'&message='+encodeURIComponent($('#ta_message').val()),
                    success : function(data) {
                        if(data.status){
                            system.load('todo');
                        }
                    }
        });
    });
    register_open();
}
function init_saimod_sys_todo_todoclose(){
    $('#btn_edit').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=edit&todo='+$(this).attr('todo')+'&message='+encodeURIComponent($('#ta_message').val()),
                    success : function(data) {
                        if(data.status){
                            system.load('todo');
                        }
                    }
        });
    });
    register_close();
}

function init_saimod_sys_todo_new(){
    $('#btn_add').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=add&todo='+encodeURIComponent($('#input_message').val()),
                    success : function(data) {
                        if(data.status){
                            system.load('todo');
                        }
                    }
        });
    })
    $('#input_message').focus();
}

function register_open(){
    $('#btn_open').show();
    $('#btn_open').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=open&todo='+$(this).attr('todo'),
                    success : function(data) {
                        if(data.status){
                            $('#btn_open').hide();
                            register_close();
                        }
                    }
        });
    });
}

function register_close(){
    $('#btn_close').show();
    $('#btn_close').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=close&todo='+$(this).attr('todo'),
                    success : function(data) {
                        if(data.status){
                            $('#btn_close').hide();
                            register_open();
                        }
                    }
        });
    });
}
