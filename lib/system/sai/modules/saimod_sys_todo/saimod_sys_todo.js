function init__SYSTEM_SAI_saimod_sys_todo() {                  
    $('#tabs_todo a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        load_todo_tab($(this).attr('action'));        
    });

    load_todo_tab('todolist');
};

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
                register_doto(false);
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
    $('#btn_refresh').click(function(){        
        load_todo_tab('todolist');});
}
function register_doto(){
    $('#btn_refresh').click(function(){        
        load_todo_tab('dotolist');});
}
function register_stats(){
   $('#btn_refresh').click(function(){        
        load_todo_tab('stats');});
}