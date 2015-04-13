//saving content data
function init_saimod_sys_text() {
    //create Modul Object
    var moduleText = new ModuleText();
    moduleText.init();
   
    
    //load all texts
    
    
    
    
    
    
    //angularModule();
    /*
    init_tinymce();
    $('#addtext').show();
    if(!cData.lang && !cData.group) {
        cData.group = $('.groups').first().attr('id');
        cData.lang = $('.langli').first().attr('id');
        $('#langtabs_ li#'+cData.lang).addClass('active');
        $('#'+cData.group).addClass('active');
        $('#'+cData.lang).addClass('active');
        saimod_sys_text_loadcontent(cData.lang, cData.group);
        }  
        
    $('.content_add').click(function(){
        saimod_sys_text_newtext();});
    
    $('#edit_close').click(function(){
        $('#addtext').show();
        cData.editmode = false;});
    
    $('#newtext').click(function(){
        $('#addtext').show();
        saimod_sys_text_savenewcontent();
        $('#new_text_id_input').val('');
        $('#new_category_id_input').val('');
        cData.editmode = false;});
    
    $('.groups').click(function(){
        if (cData.group){
            $('#'+cData.group).removeClass('active');}
        if (cData.group && cData.lang && (cData.group !== $(this).attr('id'))){
            cData.group = $(this).attr('id');
            saimod_sys_text_loadcontent(cData.lang, cData.group);}
        cData.group = $(this).attr('id');
        $(this).addClass('active');
        });
    $('#langtabs_').click(function(){
        cData.editmode = true;
    });
    $('.langli').click(function(){
        console.log(cData.editmode);
        if (cData.group && cData.lang){
            $('#langtabs_ li#'+cData.lang).removeClass('active');
            $('#'+cData.lang).removeClass('active');}
        cData.lang = $(this).attr('id');
        $('#langtabs_ li#'+cData.lang).addClass('active');
        $('#'+cData.lang).addClass('active');
        saimod_sys_text_loadcontent(cData.lang, cData.group);
        if (cData.editmode === true){
            console.log("now i am true");
            saimod_sys_text_loadsinglecontent(cData.id, cData.lang);
        }});
    
    $('#changetext').click(function(){
        saimod_sys_text_savecontent(cData.id, cData.lang);});
    
    $('#del_text').click(function(){
        saimod_sys_text_delete($('#modaltitle').html());
        cData.editmode = false;});
    $(document).keyup(function(e) {
        if (e.keyCode === 27) { $('#addtext').show(); }   // esc
    });
    //tiny mce modal fix
    $(document).on('focusin', function(e) {
        if ($(e.target).closest(".mce-window").length) {
            e.stopImmediatePropagation();
        }
    }); */
}

ModuleText = function(){};

ModuleText.prototype.init = function(){
    //this.getTextsByTag("bla", "deDE");
    this.getTexts("deDE");
};
ModuleText.prototype.getTexts = function(lang){
    $.ajax({
        url: 'sai.php',
                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_text',
                                action: 'load',
                                language: lang},
                            type: 'GET',
                            success: function(data) {
                                $('#tab_content').html(data);
                                //$('#tab'+lang).addClass('active');
                            }});
};
ModuleText.prototype.getText = function(id){};
ModuleText.prototype.getTextsByTag = function(tag, lang){
     $.ajax({
        url: 'sai.php',
                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_text',
                                action: 'loadByTag',
                                tag: tag,
                                language: lang},
                            type: 'GET',
                            success: function(data) {
                                $('#tab_content').html(data);
                            }});
};
ModuleText.prototype.updateText = function(){};
ModuleText.prototype.deleteText = function(){};
ModuleText.prototype.saveText = function(){};

function saimod_sys_text_newtext(){
    cData.editmode = true;
    $('#modaltitle').hide();
    $('#modaltextarea').hide();
    $('#del_text').hide();
    $('#addtext').hide();
    //call not available - check
    $.ajax({
        url: 'sai.php',
                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_text',
                                action: 'newtext'},
                            type: 'GET',
                            success: function(data) {
                                $('#contenttextarea').text('');
                                $('#new_category_id input').attr('value', cData.group);
                                $('#new_category_id').show();
                                $('#new_text_id').show();
                                $('#newtext').show();
                                $('#changetext').hide();
                                $('#newcontenttextarea').hide();
                                $('#modal_main').modal('show');
                            }
    });
}

function saimod_sys_text_savecontent(id, lang){
    tinyMCE.triggerSave();    
    newtext = $('#contenttextarea').val();
    newgroup = $('#new_category_id_input').val();
    console.log($('#new_category_id_input'));
    console.log(newgroup);
    $.ajax({
        url: 'sai.php',
                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_text',
                                action: 'edit',
                                id: id,
                                lang: lang,
                                category: cData.group,
                                newtext: newtext},
                            type: 'GET',
                            success: function(data) {
                                if (data.status == false){
                                    $('#modal_success').hide();
                                    $('#modal_fail').show();
                                } else {
                                    $('#modal_fail').hide();                            
                                    $('#modal_success').show();                                
                                    saimod_sys_text_loadcontent(cData.lang,cData.group);
                                }
                            }
    });
}

function saimod_sys_text_savenewcontent(){
    tinyMCE.triggerSave();
    id = $('#new_text_id_input').val();
    cData.group = $('#new_category_id_input').val();
    console.log("id: "+id);
    console.log("category: "+cData.group);
    $.ajax({
        url: 'sai.php',
                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_text',
                                action: 'add',
                                id: id,
                                category: cData.group},
                            type: 'GET',
                            success: function(data) {
                                saimod_sys_text_loadcontent(cData.lang,cData.group);
                                saimod_sys_text_loadsinglecontent(id, cData.lang);
                            }
    });
}

function saimod_sys_text_loadsinglecontent(id, lang){
    $('#new_text_id').hide();
    $('#new_category_id').hide();
    $('#newtext').hide();
    $('#modaltextarea').show();
    $('#changetext').show();
    $('#del_text').show();
    init_tinymce();
    
    $.ajax({
        url: 'sai.php',
        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_text',
                action: 'singleload',
                id: id,
                lang: lang},
            type: 'GET',
            success: function(data) {
                init_tinymce();
                tinyMCE.activeEditor.setContent(data);
                $('#modal_success').hide();
                $('#modal_fail').hide();
                $('#modaltitle').html(id);
                $('#modaltitle').show();
                cData.id = id;         
                $('#modal_main').modal('show');
            }
    });
}

function saimod_sys_text_loadcontent(id, group){
    cData.editmode = true;
    $('#tab-content').load('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_text&action=load&id='+id+'&group='+group, function(){
        $('.tableentry').click(function(){
            cData.editmode = true;
            saimod_sys_text_loadsinglecontent($(this).attr('text_id'), cData.lang);
        });
    });
}

function saimod_sys_text_delete(buttonID){
    $.getJSON('./sai.php?sai_mod=.SYSTEM.SAI.saimod_sys_text&action=delete&id='+buttonID,
            function(data){if (data.status == false){ alert("Failed to delete text!"); } else { 
                    alert("Text deleted!");
                    saimod_sys_text_loadcontent(cData.lang,cData.group);}});
            
            saimod_sys_text_loadcontent(cData.lang,cData.group);
            $('#modal_main').modal('hide');
}

function init_tinymce(){
    tinymce.init({ // General options
        /*mode : "textareas",
        theme : "modern",
        
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

        width: "100%",
        height: "250px",

        // Example content CSS (should be your site CSS)
        content_css : "../../page/index.css"*/
        // General options
/*        mode : "textareas",
        //theme : "advanced",
        theme : "modern",
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
        width: "100%",
        height: "250px",

        // Example content CSS (should be your site CSS)
        //content_css : "css/example.css",
        //content_css : "../../page/index.css"

        // Drop lists for link/image/media/template dialogs
        /*template_external_list_url : "js/template_list.js",
        external_link_list_url : "js/link_list.js",
        external_image_list_url : "js/image_list.js",
        media_external_list_url : "js/media_list.js",
        forced_root_block : "", 
        force_br_newlines : true,
        force_p_newlines : false,

        // Replace values for the template plugin
        template_replace_values : {
                username : "Some User",
                staffid : "991234"
        }*/
        
        selector: "textarea",
        theme: "modern",
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
        ]
});
}
