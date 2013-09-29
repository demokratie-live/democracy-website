function init__SYSTEM_SAI_saimod_sys_locale() { 
    // handle navigation link click
	$('.btn').click(function () {                  
            loadEntry($(this).attr('name'));            
	});
        $('.delete_content').click(function(){           
         $.getJSON(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=delete&id='+$(this).attr('id'), 
         function(data){
             if (data.status == false){ alert("false"); } else { alert("true");}
         });
        });
        $('.add_form').click(function(){           
         $('div#content-wrapper').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=addcontent', 
         function(data){
             if (data.status == false){ alert("false"); } else { alert("true");}
         });
        });
}
function add(){
    //$('.add').click(function(){           
         window.location = SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=add&id='+$('#new').attr('value')+'&lang=deDE&newtext='+$('#areacontent').val(); 
         window.location = SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale';
         //function(data){
         //    if (data.status == false){ alert("false"); } else { alert("true");}
         //});
       // });
}
function loadEntry(buttonID) {
     
     $('div#content-wrapper').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=editmode&entry='+buttonID, function(){
         init__SYSTEM_SAI_saimod_sys_locale_edit();
       
});
}

function init__SYSTEM_SAI_saimod_sys_locale_edit(){        
    $('.localeMain').click(function(){         
        loadModuleContent('.SYSTEM.SAI.saimod_sys_locale');
    });
    $('.edit_content').click(function(){           
         tinyMCE.triggerSave();         
         $.ajax({
                url: SAI_ENDPOINT,
                data: { sai_mod: '.SYSTEM.SAI.saimod_sys_locale',
                        action: 'edit',                       
                        id: $(this).attr('name'),
                        lang: $(this).attr('lang'),
                        newtext: $('#edit_field_'+$(this).attr('name')+'_'+$(this).attr('lang')).val()},
                type: 'POST',
                success: function(data) {                    
                    if (data.status == false){ alert("Changes could not be changed."); } else { alert("Changes has been saved.");}
                }
            });         
    });
}
