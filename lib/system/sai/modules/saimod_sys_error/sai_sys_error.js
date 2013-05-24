function init__SYSTEM_SAI_saimod_sys_error() {  
    
    
    $('#truncate_table').click(function(){
        
        $.ajax({
            type :'GET',
            //url  : './system/sai/modules/saimod_sys_error/saimod_sys_error.php',
            data :{truncate : 'sys_log'},
            success : function(data) {
                if(data === true){
                    
                    
                    $('#truncate_modal').modal('hide');
                    //location.reload(true);
                }else{
                    //location.reload(true);
                    $('#truncate_modal').modal('hide');
                    //you don't have the permission to truncate table
                }
                
           }
        });
    });
    
    
    $('#refresh_error_table').click(function(){
        
        $('img#loader').show();
        
        
        setTimeout($('img#loader').hide(), 3000);
            //TODO: reload error msgs....
        
        
        
        
    })
        

    
    
    
}