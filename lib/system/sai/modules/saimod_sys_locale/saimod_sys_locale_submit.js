function init__SYSTEM_SAI_saimod_sys_locale() {  
    // handle navigation link click
	$('.btn').click(function () {                                                   
            //loadEntry($(this).attr('url'));
            loadEntry($(this).attr('name'));
            //loadUrlPic($(this).attr('url'));
	});
        $('.delete_content').click(function(){   
        alert(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=delete&id='+$(this).attr('id'));
         $.getJSON(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=delete&id='+$(this).attr('id'), 
         function(data){
             if (data.status == false){ alert("false"); } else { alert("true");}
         });
    });
}

function loadEntry(buttonID) {
     $('div#content-wrapper').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&sai_input='+buttonID, function(){
         init__SYSTEM_SAI_saimod_sys_locale_edit();
     });
}

function init__SYSTEM_SAI_saimod_sys_locale_edit(){        
    $('.localeMain').click(function(){         
        loadModuleContent('.SYSTEM.SAI.saimod_sys_locale');
    });
    $('.edit_content').click(function(){   
        alert(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=edit&id='+$(this).attr('name')+'&lang='+$(this).attr('lang')+'&newtext='+$('#edit_field_'+$(this).attr('name')+'_'+$(this).attr('lang')).attr('value'));
         $.getJSON(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=edit&id='+$(this).attr('name')+'&lang='+$(this).attr('lang')+'&newtext='+$('#edit_field_'+$(this).attr('name')+'_'+$(this).attr('lang')).attr('value'), 
         function(data){
             if (data.status == false){ alert("false"); } else { alert("true");}
         });
    });
}
