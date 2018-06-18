function init_saimod_faq() {
};

function init_saimod_faq_list(){
    $('#btn-faq-del').click(function(){
        var ids = [];
        $('.faq-check:checked').each(function() {
            ids.push($(this).attr('faq'));
        });
        if (confirm('Are you sure you want to delete '+ids.length+' FAQs PERMANENTLY?')) {
            $.ajax({
                async: true,
                url: this.endpoint,
                type: 'POST',
                dataType: 'JSON',
                data: {
                    sai_mod: '.SAI.saimod_faq',
                    action: 'delete',
                    data: ids
                },
                success: function(data){
                    if(data.status){
                        system.reload();
                    } else {
                        alert('Something happend - try again!');
                    }
                },
                error: function(){
                    alert('Something happend - try again!');
                }
            });
        }
    });
}

function init_saimod_faq_new() {
    init_tinymce();
    
    $('#btn-faq-new-insert').click(function(){
        var order = $('#input-faq-new-order').val();
        var question = tinymce.get('input-faq-new-question').getContent({format : 'raw'});
        var answer = tinymce.get('input-faq-new-answer').getContent({format : 'raw'});
        var categories = $('#input-faq-new-categories').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_faq',
                action: 'insert',
                data: {
                    order: order,
                    question: question,
                    answer: answer,
                    categories: categories
                }
            },
            success: function(data){
                if(data.status){
                    system.load('faq');
                } else {
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
};

function init_saimod_faq_edit() {
    init_tinymce();
    
    $('#btn-faq-update').click(function(){
        var id = $(this).attr('faq');
        var order = $('#input-faq-order').val();
        var question = tinymce.get('input-faq-question').getContent({format : 'raw'});
        var answer = tinymce.get('input-faq-answer').getContent({format : 'raw'});
        var categories = $('#input-faq-categories').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_faq',
                action: 'update',
                data: {
                    id: id,
                    order: order,
                    question: question,
                    answer: answer,
                    categories: categories
                }
            },
            success: function(data){
                if(data.status){
                    system.load('faq(edit);id.'+id);
                } else {
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
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
        //extended_valid_elements: "iframe[title|class|type|width|height|src|frameborder|allowFullScreen]",
        //extended_valid_elements: "iframe[class|src|frameborder=0|alt|title|width|height|align|name]",
        //extended_valid_elements: "iframe[id|class|title|style|align|frameborder|height|longdesc|marginheight|marginwidth|name|scrolling|src|width]",
        selector: "textarea",
        theme: "modern",
        //theme : "advanced",
        plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime nonbreaking save table contextmenu directionality",//media
            "emoticons template paste textcolor"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        toolbar2: "print preview | forecolor backcolor emoticons",//media
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