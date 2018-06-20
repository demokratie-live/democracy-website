function init_saimod_media() {
};

function init_saimod_media_press() {
    $('#tabs_media li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_media_press').addClass('active');
    
    init_saimod_media_list();
};

function init_saimod_media_publications() {
    $('#tabs_media li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_media_publications').addClass('active');
    
    init_saimod_media_list();
};

function init_saimod_media_downloads() {
    $('#tabs_media li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_media_downloads').addClass('active');
    
    init_saimod_media_list();
};

function init_saimod_media_list(){
    $('#btn-media-del').click(function(){
        var ids = [];
        $('.media-check:checked').each(function() {
            ids.push($(this).attr('media'));
        });
        if (confirm('Are you sure you want to delete '+ids.length+' MEDIA ITEMS PERMANENTLY?')) {
            $.ajax({
                async: true,
                url: this.endpoint,
                type: 'POST',
                dataType: 'JSON',
                data: {
                    sai_mod: '.SAI.saimod_media',
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

function init_saimod_media_new() {
    $('#input-media-new-img').change(function(){
        $('#preview').attr('src','./files/medien/'+$('#input-media-new-img').val());
    });
    $('#input-media-new-img').change();
    
    $('#btn-media-new-insert').click(function(){
        var type = $('#input-media-new-type').val();
        var order = $('#input-media-new-order').val();
        var title = $('#input-media-new-title').val();
        var img = $('#input-media-new-img').val();
        var link = $('#input-media-new-link').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_media',
                action: 'insert',
                data: {
                    type: type,
                    order: order,
                    title: title,
                    img: img,
                    link: link
                }
            },
            success: function(data){
                if(data.status){
                    system.load('media');
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

function init_saimod_media_edit() {
    $('#input-media-img').change(function(){
        $('#preview').attr('src','./files/medien/'+$('#input-media-img').val());
    });
    $('#input-media-img').change();
    
    $('#btn-media-update').click(function(){
        var id = $(this).attr('media');
        var type = $('#input-media-type').val();
        var order = $('#input-media-order').val();
        var title = $('#input-media-title').val();
        var img = $('#input-media-img').val();
        var link = $('#input-media-link').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_media',
                action: 'update',
                data: {
                    id: id,
                    type: type,
                    order: order,
                    title: title,
                    img: img,
                    link: link
                }
            },
            success: function(data){
                if(data.status){
                    system.load('media(edit);id.'+id);
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