var currentID = '';
function init__SYSTEM_SAI_saimod_sys_api() {
    $('tr.api_entries').click(function() {
        currentID = $(this).attr("id");
        $('#modaltitle').html("Call ID: "+currentID+'<hr>');
        $('#modal_description').append('<div id="api_wrap"><b>Group:</b> '+$(this).attr("group")+'<br>');
        $('#modal_description').append('<b>Type:</b> '+$(this).attr("typ")+'<br>');
        $('#modal_description').append('<b>ParentID:</b> '+$(this).attr("parentID")+'<br>');
        $('#modal_description').append('<b>ParentValue:</b> '+$(this).attr("parentValue")+'<br>');
        $('#modal_description').append('<b>Name:</b> '+$(this).attr("name")+'<br>');
        $('#modal_description').append('<b>Verify:</b> '+$(this).attr("verify")+'</div>');
        $('#modal_api').modal('show');
    });
    $('#del_api').click(function() {
        $.ajax({
            url: SAI_ENDPOINT,
                            data: { sai_mod: '.SYSTEM.SAI.saimod_sys_api',
                                    action: 'deletecall',
                                    ID: currentID},
                                type: 'GET',
                                success: function(data) {
                                    console.log("api call deleted");
                                    $('#modal_api').modal('hide');
                                }
            });
    });
    $('#addcall').click(function() {
        console.log("bla"); 
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
                                }
            });});
        
    $('#localetab a').click(function (e) {e.preventDefault(); $(this).tab('show');});
}