function init__SYSTEM_SAI_saimod_sys_locale() {  
    // handle navigation link click
	$('.btn').click(function () {                                                   
            //loadEntry($(this).attr('url'));
            loadEntry($(this).attr('name'));
            //loadUrlPic($(this).attr('url'));
	});
}

function loadEntry(buttonID) {
     $('div#content-wrapper').load('./?action=developer&sai_mod=.SYSTEM.SAI.saimod_sys_locale&sai_input='+buttonID, function(){
         
     });
}
