//saving content data
var cData = {group: '',
             lang: '',
             id: '',
             editmode: false};
         
function init__SYSTEM_SAI_saimod_sys_locale() {
    if(!cData.lang && !cData.group) {
        cData.group = $('.groups').first().attr('id');
        cData.lang = $('.langli').first().attr('id');
        $('#langtabs_ li#'+cData.lang).addClass('active');
        $('#'+cData.group).addClass('active');
        $('#'+cData.lang).addClass('active');
        saimod_sys_locale_loadcontent(cData.lang, cData.group);
        }  
        
    $('.content_add').click(function(){
        saimod_sys_locale_newtext();});
    
    $('#edit_close').click(function(){
        cData.editmode = false;});
    
    $('#newtext').click(function(){
        saimod_sys_locale_savenewcontent();
        cData.editmode = false;});
    
    $('.groups').click(function(){
        if (cData.group){
            $('#'+cData.group).removeClass('active');}
        if (cData.group && cData.lang && (cData.group !== $(this).attr('id'))){
            cData.group = $(this).attr('id');
            saimod_sys_locale_loadcontent(cData.lang, cData.group);}
        cData.group = $(this).attr('id');
        $(this).addClass('active');
        });
    
    $('.langli').click(function(){
        cData.editmode = true;
        if (cData.group && cData.lang){
            $('#langtabs_ li#'+cData.lang).removeClass('active');
            $('#'+cData.lang).removeClass('active');}
        cData.lang = $(this).attr('id');
        $('#langtabs_ li#'+cData.lang).addClass('active');
        $('#'+cData.lang).addClass('active');
        saimod_sys_locale_loadcontent(cData.lang, cData.group);
        if (cData.editmode === true){
            saimod_sys_locale_loadsinglecontent(cData.id, cData.lang);
        }});
    
    $('#changetext').click(function(){
        saimod_sys_locale_savecontent(cData.id, cData.lang);});
    
    $('#del_text').click(function(){
        saimod_sys_locale_delete($('#modaltitle').html());});
    
}

function saimod_sys_locale_newtext(){
    $('#modaltitle').hide();
    $('#modaltextarea').hide();
    $('#del_text').hide();
    $.ajax({
        url: SAI_ENDPOINT,
                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_locale',
                                action: 'newtext'},
                            type: 'GET',
                            success: function(data) {
                                $('#contenttextarea').text('');
                                $('#new_text_id').attr('placeholder', 'new title here...').blur();
                                $('#new_text_id').show();
                                $('#newtext').show();
                                $('#changetext').hide();
                                $('#newcontenttextarea').hide();
                                $('#modal').modal('show');
                            }
    });
}

function saimod_sys_locale_savecontent(id, lang){
    tinyMCE.triggerSave();
    newtext = $('#contenttextarea').val();
    $.ajax({
        url: SAI_ENDPOINT,
                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_locale',
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
                                    saimod_sys_locale_loadcontent(cData.lang,cData.group);
                                }
                            }
    });
}

function saimod_sys_locale_savenewcontent(){
    tinyMCE.triggerSave();
    newtext = $('#contenttextarea').val();
    id = $('#new_text_id').val();
    console.log("id "+id);
    category = cData.group;
    $.ajax({
        url: SAI_ENDPOINT,
                        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_locale',
                                action: 'add',
                                id: id,
                                category: cData.group},
                            type: 'GET',
                            success: function(data) {
                                saimod_sys_locale_loadcontent(cData.lang,cData.group);
                                saimod_sys_locale_loadsinglecontent(id, cData.lang);
                            }
    });
}

function saimod_sys_locale_loadsinglecontent(id, lang){
    $('#new_text_id').hide();
    $('#newtext').hide();
    $('#modaltextarea').show();
    $('#changetext').show();
    $('#del_text').show();
    tinymce.init({selector:'textarea'});
    
    $.ajax({
        url: SAI_ENDPOINT,
        data: { sai_mod: '.SYSTEM.SAI.saimod_sys_locale',
                action: 'singleload',
                id: id,
                lang: lang},
            type: 'GET',
            success: function(data) {
                tinyMCE.activeEditor.setContent(data);
                $('#modal_success').hide();
                $('#modal_fail').hide();
                $('#modaltitle').html(id);
                $('#modaltitle').show();
                cData.id = id;         
                $('#modal').modal('show');
            }
    });
}

function saimod_sys_locale_loadcontent(id, group){
    $('#tab-content').load(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=load&id='+id+'&group='+group, function(){
        $('.tableentry').click(function(){
            saimod_sys_locale_loadsinglecontent($(this).attr('text_id'), cData.lang);
        });
    });
}

function saimod_sys_locale_delete(buttonID){
    $.getJSON(SAI_ENDPOINT+'sai_mod=.SYSTEM.SAI.saimod_sys_locale&action=delete&id='+buttonID,
            function(data){if (data.status == false){ alert("Failed to delete text!"); } else { 
                    alert("Text deleted!");
                    saimod_sys_locale_loadcontent(cData.lang,cData.group);}});
            
            saimod_sys_locale_loadcontent(cData.lang,cData.group);
            $('#modal').modal('hide');
}
