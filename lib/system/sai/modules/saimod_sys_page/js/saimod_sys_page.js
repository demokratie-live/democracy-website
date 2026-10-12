function init_saimod_sys_page() {
    $("#sai_mod_page_table").tablesorter();
    $('#tabs_page a').click(function (e) {
        $('#tabs_page li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
    api_menu();
}

function init_saimod_sys_page_new(){
    $('#addpage').click(function() {
        $.ajax({    url: './sai.php',
                    data: { sai_mod: '.SYSTEM.SAI.saimod_sys_page',
                            action: 'addcall',
                            ID: $('#new_page_id').val(),
                            group: $('#new_page_group').val(),
                            type: $('#new_page_type').val(),
                            parentID: $('#new_page_parentid').val(),
                            parentValue : $('#new_page_parentvalue').val(),
                            name: $('#new_page_name').val(),
                            verify: $('#new_page_verify').val()},
                    type: 'GET',
                    success: function(data) {
                        system.load('page;group.'+$('#new_page_group').val());}
        });  
    });
}

function api_menu(){
    $('#tabs_page li').each(function(){
        $(this).removeClass('active');});
    if($('#menu_group_'+system.cur_state().split('.')[1]).length){
        $('#menu_group_'+system.cur_state().split('.')[1]).parent().addClass('active');
    } else {
        $('#menu_all').parent().addClass('active');}
}
function init_saimod_sys_page_list(){
    $("#sai_mod_page_table").tablesorter();
    api_menu();}
function init_saimod_sys_page_delete(){
    $('#del_page_del').click(function() {
        $.ajax({    url: './sai.php',
                    data: { sai_mod: '.SYSTEM.SAI.saimod_sys_page',
                            action: 'deletecall',
                            ID: $(this).attr('page_id'),
                            group: $(this).attr('page_group')},
                    type: 'GET',
                    success: function(data) {
                        console.log("page call deleted");
                        $('#page_deletedialog').html('<p>Api call deleted!</p>');
                        $('#del_page_del').hide();
                    }
                });
    });
}