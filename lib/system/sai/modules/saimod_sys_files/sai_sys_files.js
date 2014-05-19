function init__SYSTEM_SAI_saimod_sys_files() { 
    $(".imgdelbtn").click(function(){        
        $.getJSON(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_files&action=del&cat='+$(this).attr("cat")+'&id='+$(this).attr("id"), function(data){
            if(data.status){
                alert("ok");
            } else{
                alert("fail");
            }
        });
    });
    
    $(".imgrnbtn").click(function(){     
        $.getJSON(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_files&action=rn&cat='+$(this).attr("cat")+'&id='+$(this).attr("id")+'&newid='+$("#renametext_"+$(this).attr("textfield")).val(), function(data){
            if(data.status){
                alert("ok");
            } else{
                alert("fail");
            }
        });        
    });
}


