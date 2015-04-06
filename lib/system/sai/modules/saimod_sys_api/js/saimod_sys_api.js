var currentID = '';
 
function init_saimod_sys_api() {
    saimod_sys_api_tree();
    saimod_sys_api_register_clickevents();
    
}

function saimod_sys_api_loadcontent(){
    $('#api_wrapper').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_api', function(){
            console.log('api module loaded');
            saimod_sys_api_register_clickevents();
    });
    
}

function saimod_sys_api_register_clickevents(){
    $('tr.api_entries').click(function() {
        console.log("ahsf");
        currentID = $(this).attr("id");
        $.ajax({
            url: SAI_ENDPOINT,
                            data: { sai_mod: '.SYSTEM.SAI.saimod_sys_api',
                                    action: 'deletedialog',
                                    ID: currentID},
                                type: 'GET',
                                success: function(data) {
                                    console.log("works");
                                    $('#api_content').html(data);
                                    $('#del_api_close').click(function() {
                                        console.log("olenski");
                                        $('#del_api_description').hide();
                                        $('#del_api_del').show();
                                        saimod_sys_api_loadcontent();
                                    }); 
                                    $('#del_api_del').click(function() {
                                    $.ajax({
                                        url: SAI_ENDPOINT,
                                                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_api',
                                                                action: 'deletecall',
                                                                ID: currentID},
                                                            type: 'GET',
                                                            success: function(data) {
                                                                console.log("api call deleted");
                                                                $('#api_deletedialog').html('<p>Api call deleted!</p>');
                                                                $('#del_api_del').hide();
                                                            }});});}});});
    
    $('#addcall').click(function() {
            var id = $('#new_call_id').val();
            var group = $('#new_call_group').val();
            var type = $('#new_call_type').val();
            var parentid = $('#new_call_parentid').val();
            var parentvalue = $('#new_call_parentvalue').val();
            var name = $('#new_call_name').val();
            var verify = $('#new_call_verify').val();
            $.ajax({
            url: SAI_ENDPOINT,
                            data: { sai_mod: '.SYSTEM.SAI.saimod_sys_api',
                                    action: 'addcall',
                                    ID: id,
                                    group: group,
                                    type: type,
                                    parentID: parentid,
                                    parentValue : parentvalue,
                                    name: name,
                                    verify: verify},
                                type: 'GET',
                                success: function(data) {
                                    console.log("new api call added");
                                    saimod_sys_api_loadcontent();
                                }
            });
        
    });
    $('#del_api_close').click(function() {
        console.log("olenski");
        $('#del_api_description').hide();
        $('#del_api_del').show();
        saimod_sys_api_loadcontent();
    });    
    $('#localetab a').click(function (e) {e.preventDefault(); $(this).tab('show');});
}

function saimod_sys_api_tree(){
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();
    });
}