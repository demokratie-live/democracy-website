function init__SYSTEM_SAI_saimod_sys_files() { 
    $('#filestab a').click(function (e) {e.preventDefault(); load_tab($(this).attr('tabname')); $(this).tab('show');});
    register_controlls();
}

function load_tab(name){
    $('#tab_'+name).load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_files&action=tab&name='+name, function(){
        register_controlls();
    });
}

function register_controlls(){
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
        $.getJSON(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_files&action=rn&cat='+$(this).attr("cat")+'&id='+$(this).attr("id")+'&newid='+$($(this).attr("textfield")).val(), function(data){
            if(data.status){
                alert("ok");
            } else{
                alert("fail");
            }
        });        
    });
}

