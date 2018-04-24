function init_saimod_beta_all() {
    $("#table_beta_all").tablesorter();
    $('#tabs_beta li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_beta').addClass('active');
    email_delete();
};

function init_saimod_beta_code() {
    $("#table_beta_code").tablesorter();
    $('#tabs_beta li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_code').addClass('active');
    $('#code_generate').click(function(){
        var comment = $('#code_comment').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'GET',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_beta',
                action: 'generate',
                comment: comment
            },
            success: function(){
                system.reload();
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
    $('.code_setcomment').click(function(){
        var code = $(this).attr('code');
        var i = $(this).attr('i');
        var comment = $('#comment_'+i).val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'GET',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_beta',
                action: 'comment',
                code: code,
                comment: comment
            },
            success: function(){
                system.reload();
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
    $('.code_delete').click(function(){
        var code = $(this).attr('code');
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'GET',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_beta',
                action: 'code_delete',
                code: code
            },
            success: function(){
                system.reload();
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
}
function init_saimod_beta_store_android() {
    $("#table_beta_store_android").tablesorter();
    $('#tabs_beta li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_store_android').addClass('active');
    $('.code_android').click(function(){
        var email = $(this).attr('email');
        var android = $(this).attr('android');
        var ios = $(this).attr('ios');
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'GET',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_beta',
                action: 'store',
                email: email,
                android: android,
                ios: ios
            },
            success: function(){
                system.reload();
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
    $('.copy_email').click(function(){
        var i = $(this).attr('i');
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#email_'+i).text()).select();
        document.execCommand("copy");
        $temp.remove();
    });
    email_delete();
};
function init_saimod_beta_store_ios() {
    $("#table_beta_store_ios").tablesorter();
    $('#tabs_beta li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_store_ios').addClass('active');
    $('.code_ios').click(function(){
        var email = $(this).attr('email');
        var android = $(this).attr('android');
        var ios = $(this).attr('ios');
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'GET',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_beta',
                action: 'store',
                email: email,
                android: android,
                ios: ios
            },
            success: function(){
                system.reload();
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
    $('.copy_email').click(function(){
        var i = $(this).attr('i');
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#email_'+i).text()).select();
        document.execCommand("copy");
        $temp.remove();
    });
    email_delete();
};
/* function init_saimod_beta_mail() {
    $("#table_beta_mail").tablesorter();
    $('#tabs_beta li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_tag_mail').addClass('active');
    $('.beta_mail').click(function(){
        var email = $(this).attr('email');
        var android = $(this).attr('android');
        var ios = $(this).attr('ios');
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'GET',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_beta',
                action: 'email',
                email: email,
                android: android,
                ios: ios
            },
            success: function(){
                system.reload();
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
    email_delete();
}; */

function email_delete(){
    $('.email_delete').click(function(){
        if (confirm('Are you sure you want to delete this user PERMANENTLY?')) {
            var email = $(this).attr('email');
            $.ajax({
                async: true,
                url: this.endpoint,
                type: 'GET',
                dataType: 'JSON',
                data: {
                    sai_mod: '.SAI.saimod_beta',
                    action: 'email_delete',
                    email: email
                },
                success: function(){
                    system.reload();
                },
                error: function(){
                    alert('Something happend - try again!');
                }
            });
        }
    });
}