function init__SYSTEM_SAI_saimod_sys_log() {      
    $('#truncate_table').click(function(){

        $.ajax({
            type :'GET',
            url  : './?action=developer&sai_mod=.SYSTEM.SAI.saimod_sys_log&truncate=sys_log',
            success : function(data) {
                
                if(data == 1){
                    $('#info_box').html("deleting data...");
                    $('#truncate_modal').modal('hide');
                    $('#content-wrapper').load('./?action=developer&sai_mod=.SYSTEM.SAI.saimod_sys_log');
                }else{
                    $('#info_box').html("You do not have the permission to truncate table!");
                }
                
           }
        });
    });
    
    
    $('#refresh_error_table').live("click", (function(){
        
        $('img#loader').show();
        
        $('#content-wrapper').load('./?action=developer&sai_mod=.SYSTEM.SAI.saimod_sys_log');
        
        setTimeout("$('img#loader').hide()", 1300);
        
    }));
    
    
    $("#filter-error button").live("click", (function(){
        
        $(this).parents().children().removeClass('active');
        $(this).addClass('active');
        
        
        $('#table-wrapper').load('./?action=developer&sai_mod=.SYSTEM.SAI.saimod_sys_log&filter_error='+$(this).attr('id'));
    }));
    
};