function init__SYSTEM_SAI_saimod_sys_locale() {
    $('.content_edit').click(function () {saimod_sys_locale_edit($(this).attr('name'));});
    $('.content_delete').click(function(){saimod_sys_locale_delete($(this).attr('name'));});
    $('.content_add').click(function(){saimod_sys_locale_add();});
}
function saimod_sys_locale_add(){
    $('div#content-wrapper').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=addmode',function(){
        $('.localeMain').click(function(){
            loadModuleContent('.SYSTEM.SAI.saimod_sys_locale');
        });        
        $('.add').click(function(){            
            $.ajax({   url: SAI_ENDPOINT,
                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_locale',
                                action: 'add',
                                id: $('#content_new_id').val(),                                
                                category: $('#content_new_cat').val()},
                        type: 'GET',
                        success: function(data) {
                            if (data.status == false){
                                alert("Addition could not be applied.");
                            } else {
                                alert("Addition has been saved.");}
                    }
                });
        });
    });
    //
         //window.location = SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=add&id='+$('#new').attr('value')+'&lang=deDE&newtext='+$('#areacontent').val();
         //window.location = SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale';
         //function(data){
         //    if (data.status == false){ alert("false"); } else { alert("true");}
         //});
       // });
}

function saimod_sys_locale_delete(buttonID){
    $.getJSON(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=delete&id='+buttonID,
            function(data){if (data.status == false){ alert("false"); } else { alert("true");}});
}

function saimod_sys_locale_edit(buttonID){
    $('div#content-wrapper').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=editmode&entry='+buttonID, function(){
        $('.localeMain').click(function(){
            loadModuleContent('.SYSTEM.SAI.saimod_sys_locale');
        });
        $('.edit_content').click(function(){
             tinyMCE.triggerSave();
             $.ajax({   url: SAI_ENDPOINT,
                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_locale',
                                action: 'edit',
                                id: $(this).attr('name'),
                                lang: $(this).attr('lang'),
                                newtext: $('#edit_field_'+$(this).attr('name')+'_'+$(this).attr('lang')).val()},
                        type: 'POST',
                        success: function(data) {
                            if (data.status == false){
                                alert("Changes could not be applied.");
                            } else {
                                alert("Changes has been saved.");}
                    }
                });
        });
    });
}
