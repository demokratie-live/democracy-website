function init__SYSTEM_SAI_saimod_sys_todo() {                  
    $('#tabs_todo a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        load_todo_tab($(this).attr('action'));        
    });

    load_todo_tab('todolist');
    register_new();
};

function register_new(){
    $('#btn_new').click(function(){
        $('#img_loader').show();
        $('#tab_todo').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=new', function(){
            register_newform();
            $('#btn_back').click(function(){
                load_todo_tab('todolist');});
            $('#img_loader').hide();
        });
    });
}

function register_edit(){
    $('#btn_edit').click(function(){
        $.ajax({    type : 'GET',
                    url  : SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=edit&todo='+$(this).attr('todo')+'&message='+encodeURIComponent($('#ta_message').val()),
                    success : function(data) {
                        if(data.status){
                            load_todo_tab('todolist');
                        }
                    }
        });
    });
}

function register_newform(){
    $('#btn_add').click(function(){
        $.ajax({    type : 'GET',
                    url  : SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=add&todo='+encodeURIComponent($('#input_message').val()),
                    success : function(data) {
                        if(data.status){
                            load_todo_tab('todolist');
                        }
                    }
        });
    })
}

function load_todo_tab(action){
    $('#img_loader').show();
    switch(action){
        case 'todolist':
            $('#tab_todo').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_todo&action='+action, function(){
                register_todolist();
                register_listclick(true);
                $('#img_loader').hide();});
            return;
        case 'dotolist':
            $('#tab_todo').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_todo&action='+action, function(){
                register_doto();
                register_listclick();
                $('#img_loader').hide();});
            return;
        case 'stats':
            $('#tab_todo').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_todo&action='+action, function(){
                register_stats();
                $('#img_loader').hide();});
            return;
        default:
            $('#img_loader').hide();            
    }   
}

function register_listclick(todo){
    $('.sai_todo_element').click(function(){
        $('#img_loader').show();            
        $('#tab_todo').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=todo&todo='+$(this).attr('todo'), function(){
            register_edit();
            $('#btn_back').click(function(){
                if(todo){load_todo_tab('todolist');}else{load_todo_tab('dotolist');}});
            if(todo){register_close();}else{register_open();}
            $('#img_loader').hide();})});
}

function register_open(){
    $('#btn_open').show();
    $('#btn_open').click(function(){
        $.ajax({    type : 'GET',
                    url  : SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=open&todo='+$(this).attr('todo'),
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
                    url  : SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=close&todo='+$(this).attr('todo'),
                    success : function(data) {
                        if(data.status){
                            $('#btn_close').hide();
                            register_open();
                        }
                    }
        });
    });
}

function register_todolist(){
    $('#btn_refresh').unbind('click');
    $('#btn_refresh').click(function(){        
        load_todo_tab('todolist');});
    $('#btn_close_all').unbind('click');
    $('#btn_close_all').click(function(){
        if (confirm('Are you sure you want to delete all open entries in the todolist?')) {
            $.ajax({    type :'GET',
                        url  : SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=close_all',
                        success : function(data) {
                            if(data.status){
                                load_todo_tab('todolist');
                            }else{
                                alert('Problem: '+data);}
                        }
            });
        }
    })
}
function register_doto(){
    $('#btn_refresh').unbind('click');
    $('#btn_refresh').click(function(){        
        load_todo_tab('dotolist');});
    $('#btn_close_all').unbind('click');
    $('#btn_close_all').click(function(){
       alert('operation not possible on this list');});
}
function register_stats(){
   $('#btn_refresh').unbind('click');
   $('#btn_refresh').click(function(){        
        load_todo_tab('stats');});
   $('#btn_close_all').unbind('click');
   $('#btn_close_all').click(function(){
       alert('operation not possible on this list');});
}