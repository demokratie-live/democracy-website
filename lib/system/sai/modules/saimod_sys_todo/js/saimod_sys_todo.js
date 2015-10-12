google.load("visualization", "1", {packages:["corechart"]});
function init_saimod_sys_todo() {
    $('#tabs_todo a').click(function (e) {
        $('#tabs_todo li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
    
    $('#btn_close_all').click(function(){
        if (confirm('Are you sure you want to delete all open entries in the todolist?')) {
            $.ajax({    type :'GET',
                        url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=close_all',
                        success : function(data) {
                            if(data.status){
                                system.load('todo',true);
                            }else{
                                alert('Problem: '+data);}
                        }
            });
        }
    });
};

function register_search(){
    $('#btn_search_todo').click(function(){
        system.load($(this).attr('state')+$('#input_search_todo').val(),true);
    });
}

function init_saimod_sys_todo_todo() {
    $('#tabs_todo li').each(function(){
        $(this).removeClass('active');});
    $('#menu_todolist').parent().addClass('active');
    register_search();
}

function init_saimod_sys_todo_doto() {
    $('#tabs_todo li').each(function(){
        $(this).removeClass('active');});
    $('#menu_doto').parent().addClass('active');
    register_search();
}

function init_saimod_sys_todo_stats() {
    $('#tabs_todo li').each(function(){
        $(this).removeClass('active');});
    $('#menu_stats').parent().addClass('active');
    $('#vis_filter_time').change(function(){
        load_visualisation_todo();})
    $('#vis_filter_type').change(function(){
        load_visualisation_todo();})
    load_visualisation_todo();
}

function init_saimod_sys_todo_todoopen(){
    $('#btn_edit').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=edit&todo='+$(this).attr('todo')+'&message='+encodeURIComponent(tinyMCE.activeEditor.getContent({format : 'raw'})),
                    success : function(data) {
                        if(data.status){
                            system.load('todo');
                        }
                    }
        });
    });
    register_open();
    register_assign();
    register_deassign();
    register_deassign_user();
    register_priority();
    init_tinymce();
}
function init_saimod_sys_todo_todoclose(){
    $('#btn_edit').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=edit&todo='+$(this).attr('todo')+'&message='+encodeURIComponent(tinyMCE.activeEditor.getContent({format : 'raw'})),
                    success : function(data) {
                        if(data.status){
                            system.load('todo');
                        }
                    }
        });
    });
    register_close();
    register_assign();
    register_deassign();
    register_deassign_user();
    register_priority();
    init_tinymce();
}

function init_saimod_sys_todo_new(){
    $('#btn_add').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=add&todo='+encodeURIComponent(tinyMCE.activeEditor.getContent({format : 'raw'})),
                    success : function(data) {
                        if(data.status){
                            system.load('todo');
                        }
                    }
        });
    })
    $('#input_message').focus();
    init_tinymce();
}

function register_priority(){
    $('#btn_prio_up').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=priority_up&todo='+$(this).attr('todo'),
                    success : function(data) {
                        if(data.status){
                            alert('success');
                        }
                    }
        });
    });
    
    $('#btn_prio_down').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=priority_down&todo='+$(this).attr('todo'),
                    success : function(data) {
                        if(data.status){
                            alert('success');
                        }
                    }
        });
    });
}

function register_open(){
    $('#btn_open').show();
    $('#btn_open').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=open&todo='+$(this).attr('todo'),
                    success : function(data) {
                        if(data.status){
                            $('#btn_open').hide();
                            register_close();
                        }
                    }
        });
    });
}

function register_close(){
    $('#btn_close').show();
    $('#btn_close').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=close&todo='+$(this).attr('todo'),
                    success : function(data) {
                        if(data.status){
                            $('#btn_close').hide();
                            register_open();
                        }
                    }
        });
    });
}

function register_assign(){
    $('#btn_assign').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=assign&todo='+$(this).attr('todo'),
                    success : function(data) {
                        if(data.status){
                            $('#btn_assign').hide();
                            $('#btn_deassign').show();
                        }
                    }
        });
    });
}

function register_deassign(){
    $('#btn_deassign').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=deassign&todo='+$(this).attr('todo'),
                    success : function(data) {
                        if(data.status){
                            $('#btn_deassign').hide();
                            $('#btn_assign').show();
                        }
                    }
        });
    });
}

function register_deassign_user(){
    $('.btn_deassign_user').click(function(){
        $.ajax({    type : 'GET',
                    url  : './sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=deassign&todo='+$(this).attr('todo')+'&user='+$(this).attr('user'),
                    success : function(data) {
                        if(data.status){
                            window.location.reload();
                        }
                    }
        });
    });
}

function init_tinymce(){
    tinymce.remove();
    tinymce.init({ // General options
        /*        
        formats : {
                    italic : {inline : 'span', 'classes' : 'italic'}},
        // Theme options
        theme_modern_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
        theme_modern_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
        theme_modern_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
        theme_modern_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak,|,insertfile,insertimage",
        theme_modern_toolbar_location : "top",
        theme_modern_toolbar_align : "left",
        theme_modern_statusbar_location : "bottom",
        theme_modern_resizing : true,

        // Example content CSS (should be your site CSS)
        content_css : "../../page/index.css"*/
        // General options
/*        mode : "textareas",
        
        plugins : "autolink,lists,pagebreak,layer,table,save,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,template,code",*/
        //xhtmlxtras,emotions,advimage,advlink,iespell,inlinepopups,advhr,style,spellchecker,

        // Theme options
        /*theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
        theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
        theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
        theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak,|,insertfile,insertimage",
        theme_advanced_toolbar_location : "top",
        theme_advanced_toolbar_align : "left",
        theme_advanced_statusbar_location : "bottom",
        theme_advanced_resizing : true,*/

        // Skin options
        //skin : "o2k7",
        //skin_variant : "silver",
        width: "99%",
        height: "250px",

        // Example content CSS (should be your site CSS)
        //content_css : "css/example.css",
        //content_css : "../../page/index.css"

        // Drop lists for link/image/media/template dialogs
        /*template_external_list_url : "js/template_list.js",
        external_link_list_url : "js/link_list.js",
        external_image_list_url : "js/image_list.js",
        media_external_list_url : "js/media_list.js",

        // Replace values for the template plugin
        template_replace_values : {
                username : "Some User",
                staffid : "991234"
        }*/
        
        selector: "textarea",
        theme: "modern",
        //theme : "advanced",
        plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons template paste textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        toolbar2: "print preview media | forecolor backcolor emoticons",
        image_advtab: true,
        templates: [
            {title: 'Test template 1', content: 'Test 1'},
            {title: 'Test template 2', content: 'Test 2'}
        ],
        //remove p tag
        forced_root_block : "", 
        force_br_newlines : true,
        force_p_newlines : false
    });
}

function load_visualisation_todo(){
    $('img#loader').show();
    var name = $('#vis_filter_type').val();;
    var filter = $('#vis_filter_time').val();
    $.getJSON('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_todo&action=stats&name='+name+'&filter='+filter,function(json){
        if(!json || json.status != true || !json.result){
            $('img#loader').hide();            
            return;
        }
        json = json.result;
        $('img#loader').hide();
        var data = new google.visualization.DataTable();
        first = true;        
        $.each(json[0], function(key, value){
            if(first){                
                data.addColumn('datetime',key);
                first = false;
            } else {
                data.addColumn('number',key);
            }       
        });            
        $.each(json, function(key, value){first = true; data.addRow($.map(value, function(v) { if(first){first=false;return [new Date(v)];}else{return [(v == null || parseFloat(v) <= 0) ? parseFloat(0) : parseFloat(v)];}}));});
                                
        var options = {title: name, aggregationTarget: 'category', selectionMode: 'multiple', curveType: 'function', /*focusTarget: 'category',*/ chartArea:{left:100,top:40},  vAxis:{logScale: true}, interpolateNulls: false,  width: "1200", height: "500"};
        new google.visualization.LineChart(document.getElementById('vis')).draw(data, options);
    });
}
