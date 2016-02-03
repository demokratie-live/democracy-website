function init_saimod_sys_files() {
    $("#sai_mod_files_table").tablesorter();
    $('#tabs_files a').click(function (e) {
        $('#tabs_files li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
    files_menu();
}

function init_saimod_sys_files_list(){
    $("#sai_mod_files_table").tablesorter();
    $(".imgdelbtn").click(function(){        
        $.getJSON('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_files&action=del&cat='+$(this).attr("cat")+'&id='+$(this).attr("id"), function(data){
            if(data.status){
                alert("ok");
            } else{
                alert("fail");
            }
        });
    });

    $(".imgrnbtn").click(function(){     
        $.getJSON('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_files&action=rn&cat='+$(this).attr("cat")+'&id='+$(this).attr("id")+'&newid='+$($(this).attr("textfield")).val(), function(data){
            if(data.status){
                alert("ok");
            } else{
                alert("fail");
            }
        });        
    });
    
    $('#datei').change(function(){
        var file = this.files[0];
        var name = file.name;
        var size = file.size;
        var type = file.type;
        //Your validation
    });
    
    $('.btn_upload').click(function(){
        var formData = new FormData($('#form_'+$(this).attr('cat'))[0]);
        $.ajax({
            url: './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_files&action=upload&cat='+$(this).attr('cat'),  //Server script to process data
            type: 'POST',
            //Ajax events
            success: function(){alert('ok');},
            error: function(){alert('fail');},
            // Form data
            data: formData,
            //Options to tell jQuery not to process data or worry about content-type.
            cache: false,
            contentType: false,
            processData: false
        });
    });
    
    files_menu();
}

function files_menu(){
    $('#tabs_files li').each(function(){
        $(this).removeClass('active');});
    if($('#menu_folder_'+system.cur_state().split('.')[1]).length){
        $('#menu_folder_'+system.cur_state().split('.')[1]).parent().addClass('active');
    } else {
        $('#menu_folder_sys').parent().addClass('active');}
}

function test(){}

