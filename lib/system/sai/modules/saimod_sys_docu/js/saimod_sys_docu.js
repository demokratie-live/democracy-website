function init_saimod_sys_docu() {
   $('#tabs_docu a').click(function (e) {
        $('#tabs_docu li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
    docu_menu();
    
    $('#btn_generate').click(function(){
        $.ajax({    type :'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_docu&action=generate',
                    success : function(data) {
                        if(data.status){
                            system.load('docu',true);
                        }else{
                            alert('Problem: '+data);}
                    }
        });
    });
};

function init_saimod_sys_docu_cat() {
   $('#tabs2_docu a').click(function (e) {
        $('#tabs2_docu li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
    docu2_menu();
};

function init_saimod_sys_docu_doc() {
    docu_menu();
    docu2_menu();
}

function docu_menu(){
    $('#tabs_docu li').each(function(){
        $(this).removeClass('active');});
    if(system.cur_state().split('.')[1] && $('#menu_cat_'+system.cur_state().split('.')[1].split(';')[0]).length){
        $('#menu_cat_'+system.cur_state().split('.')[1].split(';')[0]).parent().addClass('active');
    } else {
        $('#menu_cat_System').parent().addClass('active');}
};

function docu2_menu(){
    $('#tabs2_docu li').each(function(){
        $(this).removeClass('active');});
    if($('#menu_doc_'+system.cur_state().split('.')[2]).length){
        $('#menu_doc_'+system.cur_state().split('.')[2]).parent().addClass('active');
    } else {
        $('#menu_doc_1_system_md').parent().addClass('active');}
};