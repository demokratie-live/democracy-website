function init_saimod_sys_text() {
    $("#sai_mod_text_table").tablesorter();
    $('#tabs_text a').click(function (e) {
        $('#tabs_text li').each(function(){
            $(this).removeClass('active');});
        $(this).parent().addClass('active');
    });
    text_menu();
    
    $('#btn_show_all').click(function(){
        $('#tabs_text li').each(function(){
            $(this).show();});
    });
}

function register_search(){
    $('#btn_search').click(function(){
        system.load($(this).attr('state')+$('#input_search').val(),true);
    });
}

function text_menu(){
    $('#tabs_text li').each(function(){
        $(this).removeClass('active');});
    if(system.cur_state().split('.')[1]){
        $('#menu_tag_'+system.cur_state().split(';')[1].split('.')[1].split(';')[0]).parent().addClass('active');
    } else {
        $('#menu_tag_all').parent().addClass('active');}
};

function text2_menu(){
    $('#tabs2_text li').each(function(){
        $(this).removeClass('active');});
    if($('#menu_lang_'+system.cur_state().split('.')[2]).length){
        $('#menu_lang_'+system.cur_state().split('.')[2].split(';')[0]).parent().addClass('active');
    } else {
        $('.menu_lang_default').parent().addClass('active');}
};

function init_saimod_sys_text_tag(){
    $("#sai_mod_text_table").tablesorter();
    register_search();
    text_menu();
    text2_menu();
};

function init_saimod_sys_text_editor(){
     text_menu();
     text2_menu();
     init_tinymce();
     
    $('#btn_save').click(function(){
        var new_id = $('#input_new_id').val();
        var lang = $(this).attr('text_lang');
        $.ajax({    type :'POST',
                    url  : './sai.php',
                    data : {    sai_mod: '.SYSTEM.SAI.saimod_sys_text',
                                action: 'save',
                                id: $(this).attr('text_id'),
                                new_id: new_id,
                                lang: lang,
                                tags: JSON.stringify($('#input_tags').val().split(',').map(function(s) { return s.trim() })),
                                text: encodeURIComponent(tinyMCE.activeEditor.getContent({format : 'raw'}))},
                    success : function(data) {
                        if(data.status){
                            alert('success');
                            system.load('text(edittext(editor));id.'+new_id+';lang.'+lang,true);
                        }else{
                            alert('Problem: '+data);}
                        }
        });
    });
    
    $('#btn_delete').click(function(){
        //Ask if delete all langs of this tag - 3 button dialog required
        $.ajax({    type :'GET',
                    url  : './sai.php',
                    data : {    sai_mod: '.SYSTEM.SAI.saimod_sys_text',
                                action: 'delete',
                                id: $(this).attr('text_id'),
                                lang: $(this).attr('text_lang')},
                    success : function(data) {
                        if(data.status){
                            alert('success');
                            system.load('text',true);
                        }else{
                            alert('Problem: '+data);}
                        }
        });
    });
};

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
