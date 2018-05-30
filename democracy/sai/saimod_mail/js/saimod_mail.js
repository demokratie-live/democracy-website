function init_saimod_mail() {}

function init_saimod_mail_overview() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_overview').addClass('active');
};

function init_saimod_mail_contacts() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_contacts').addClass('active');
    
    $('#btn-mail-contact-del').click(function(){
        var emails = [];
        $('.mail-contact-check:checked').each(function() {
            emails.push($(this).attr('email'));
        });
        if (confirm('Are you sure you want to delete '+emails.length+' Contacts PERMANENTLY?')) {
            $.ajax({
                async: true,
                url: this.endpoint,
                type: 'POST',
                dataType: 'JSON',
                data: {
                    sai_mod: '.SAI.saimod_mail',
                    action: 'delete_contact',
                    data: emails
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

function init_saimod_mail_contact() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_contacts').addClass('active');
    
    $('#btn-contact-update').click(function(){
        var email = $('#input-contact-email').val();
        var sex = $('#input-contact-sex').val();
        var name_first = $('#input-contact-name-first').val();
        var name_last = $('#input-contact-name-last').val();
        var email_lists = [];
        $(".list-check").each(function(){
            email_lists.push({id: $(this).attr('list'), subscribed: $(this).prop('checked') === true ? 1 : 0});
        });
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_mail',
                action: 'update_contact',
                data: {
                    email: email,
                    sex: sex,
                    name_first: name_first,
                    name_last: name_last,
                    email_lists: email_lists
                }
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
    });
}

function init_saimod_mail_contact_new() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_contacts').addClass('active');
    
    $('#btn-contact-new-insert').click(function(){
        var email = $('#input-contact-new-email').val();
        var sex = $('#input-contact-new-sex').val();
        var name_first = $('#input-contact-new-name-first').val();
        var name_last = $('#input-contact-new-name-last').val();
        var email_lists = [];
        $(".list-check").each(function(){
            email_lists.push({id: $(this).attr('list'), subscribed: $(this).prop('checked') === true ? 1 : 0});
        });
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_mail',
                action: 'insert_contact',
                data: {
                    email: email,
                    sex: sex,
                    name_first: name_first,
                    name_last: name_last,
                    email_lists: email_lists
                }
            },
            success: function(data){
                if(data.status){
                    system.load('mail(contact);email.'+email);
                } else {
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
}

function init_saimod_mail_lists() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_lists').addClass('active');
    
    $('#btn-mail-list-del').click(function(){
        var lists = [];
        $('.mail-list-check:checked').each(function() {
            lists.push($(this).attr('list'));
        });
        if (confirm('Are you sure you want to delete '+lists.length+' Lists PERMANENTLY?')) {
            $.ajax({
                async: true,
                url: this.endpoint,
                type: 'POST',
                dataType: 'JSON',
                data: {
                    sai_mod: '.SAI.saimod_mail',
                    action: 'delete_list',
                    data: lists
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

function init_saimod_mail_list() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_lists').addClass('active');
    
    $('#btn-list-update').click(function(){
        var id = $('#input-list-id').val();
        var name = $('#input-list-name').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_mail',
                action: 'update_list',
                data: {
                    id: id,
                    name: name
                }
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
    });
}

function init_saimod_mail_list_new() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_lists').addClass('active');
    
    $('#btn-list-new-insert').click(function(){
        var name = $('#input-list-new-name').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_mail',
                action: 'insert_list',
                data: {
                    name: name
                }
            },
            success: function(data){
                if(data.status){
                    system.load('mail(lists)');
                } else {
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
}

function init_saimod_mail_emails() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_emails').addClass('active');
    
    $('#btn-mail-email-del').click(function(){
        var emails = [];
        $('.mail-email-check:checked').each(function() {
            emails.push($(this).attr('email'));
        });
        if (confirm('Are you sure you want to delete '+emails.length+' EMails PERMANENTLY?')) {
            $.ajax({
                async: true,
                url: this.endpoint,
                type: 'POST',
                dataType: 'JSON',
                data: {
                    sai_mod: '.SAI.saimod_mail',
                    action: 'delete_email',
                    data: emails
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

function init_saimod_mail_email() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_emails').addClass('active');
    
    $('#btn-email-update').click(function(){
        var id = $('#input-email-id').val();
        var account = $('#select-email-account').val();
        var sender = $('#input-email-sender').val();
        var name = $('#input-email-name').val();
        var subject = $('#input-email-subject').val();
        var text_template = $('#select-email-text-template').val();
        var html_template = $('#select-email-html-template').val();
        var placeholders = [];
        $('.email-placeholder').not('.email-placeholder-new').each(function() {
            var id = $(this).attr('placeholder');
            var name = $(this).find('.email-placeholder-name').val();
            var type = $(this).find('.email-placeholder-type').val();
            var deleted = $(this).hasClass('placeholder_deleted') ? 1 : 0
            var data = {};
            switch(type){
                case "2":
                    data.table = $(this).find('.email-placeholder-data-switch-table').val();
                    data.field = $(this).find('.email-placeholder-data-switch-field').val();
                    data.default = $(this).find('.email-placeholder-data-switch-default').val();
                    var switch_values = {};
                    $(this).find('.email-placeholder-switch-value').not('.email-placeholder-switch-value-new').each(function(){
                        switch_values[$(this).find('.email-placeholder-data-switch-value-key').val()] = $(this).find('.email-placeholder-data-switch-value-value').val();
                    }) 
                    data.values = switch_values;
                   break;
                case "3":
                    data.default = $(this).find('.email-placeholder-data-name-value').val();
                    break;
                default:
                    data.value = $(this).find('.email-placeholder-data-text-value').val();
            }
            placeholders.push({
                id: id,
                name: name,
                type: type,
                data: data,
                deleted: deleted
            });
        });
        var images = [];
        $('.email-image').not('.email-image-new').each(function() {
            images.push({
                id: $(this).attr('image'),
                name: $(this).find('.email-image-name').val(),
                file: $(this).find('.email-image-file').val(),
                mime: $(this).find('.email-image-mime').val(),
                deleted: $(this).hasClass('image_deleted') ? 1 : 0
            });
        });
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_mail',
                action: 'update_email',
                data: {
                    id: id,
                    account: account,
                    sender: sender,
                    name: name,
                    subject: subject,
                    text_template: text_template ? text_template : null,
                    html_template: html_template ? html_template : null,
                    placeholders: placeholders,
                    images: images
                }
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
    });
    
    $('.btn-email-send').click(function(){
        var email = $(this).attr('email');
        var list = $(this).attr('list');
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_mail',
                action: 'send_email',
                data: {
                    email: email,
                    list: list
                }
            },
            success: function(data){
                if(data.status){
                    alert('Sent EMails');
                } else {
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
    
    $('#btn-email-template-text').click(function(){
        var template = $('#select-email-text-template').val();
        if(template === ""){
            system.load('mail(template_new)');
        } else {
            system.load('mail(template);id.'+template);
        }
    });
    
    $('#btn-email-template-html').click(function(){
        var template = $('#select-email-html-template').val();
        if(template === ""){
            system.load('mail(template_new)');
        } else {
            system.load('mail(template);id.'+template);
        }
    });
    
    $('#btn-email-image-new').click(function(){
        var $new = $('.email-image-new').clone().removeClass('email-image-new');
        $('#tbody_mail_email_images').append($new);
    });
    
    $('#btn-email-placeholder-new').click(function(){
        var $new = $('.email-placeholder-new').clone().removeClass('email-placeholder-new');
        $('#tbody_mail_email_placeholders').append($new);
    });
    
    $('.btn-email-placeholder-switch-value-new').click(function(){
    });
    
    $('.email-placeholder-type').trigger('change');
}

function placeholder_switch_new(e){
    var $new = $(e).parent().parent().parent().find('.email-placeholder-switch-value-new').clone().removeClass('email-placeholder-switch-value-new');
    $(e).parent().parent().parent().append($new);
}

function placeholder_type(e){
    switch(e.val()){
        case '2':
            $(e).parent().parent().find('.email-placeholder-data-text').hide();
            $(e).parent().parent().find('.email-placeholder-data-switch').show();
            $(e).parent().parent().find('.email-placeholder-data-name').hide();
            break;
        case '3':
            $(e).parent().parent().find('.email-placeholder-data-text').hide();
            $(e).parent().parent().find('.email-placeholder-data-switch').hide();
            $(e).parent().parent().find('.email-placeholder-data-name').show();
            break;
        default:
            $(e).parent().parent().find('.email-placeholder-data-text').show();
            $(e).parent().parent().find('.email-placeholder-data-switch').hide();
            $(e).parent().parent().find('.email-placeholder-data-name').hide();
    }
    
}

function init_saimod_mail_email_new() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_emails').addClass('active');
    
    $('#btn-email-new-insert').click(function(){
        var name = $('#input-email-new-name').val();
        var account = $('#select-email-new-account').val();
        var sender = $('#input-email-new-sender').val();
        var subject = $('#input-email-new-subject').val();
        var text_template = $('#select-email-new-text-template').val();
        var html_template = $('#select-email-new-html-template').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_mail',
                action: 'insert_email',
                data: {
                    name: name,
                    account: account,
                    sender: sender,
                    subject: subject,
                    text_template: text_template,
                    html_template: html_template
                }
            },
            success: function(data){
                if(data.status){
                    system.load('mail(emails)');
                } else {
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
}

function init_saimod_mail_templates() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_templates').addClass('active');
    
    $('#btn-mail-template-del').click(function(){
        var templates = [];
        $('.mail-template-check:checked').each(function() {
            templates.push($(this).attr('template'));
        });
        if (confirm('Are you sure you want to delete '+templates.length+' Templates PERMANENTLY?')) {
            $.ajax({
                async: true,
                url: this.endpoint,
                type: 'POST',
                dataType: 'JSON',
                data: {
                    sai_mod: '.SAI.saimod_mail',
                    action: 'delete_template',
                    data: templates
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

function init_saimod_mail_template() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_templates').addClass('active');
    
    $('#btn-template-update').click(function(){
        var id = $('#input-template-id').val();
        var type = $('#input-template-type').val();
        var name = $('#input-template-name').val();
        var value = $('#input-template-value').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_mail',
                action: 'update_template',
                data: {
                    id: id,
                    type: type,
                    name: name,
                    value: value
                }
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
    });
}

function init_saimod_mail_template_new() {
    $('#tabs_mail li a').each(function(){
        $(this).removeClass('active');});
    $('#menu_mail_templates').addClass('active');
    
    $('#btn-template-new-insert').click(function(){
        var type = $('#input-template-new-type').val();
        var name = $('#input-template-new-name').val();
        var value = $('#input-template-new-value').val();
        $.ajax({
            async: true,
            url: this.endpoint,
            type: 'POST',
            dataType: 'JSON',
            data: {
                sai_mod: '.SAI.saimod_mail',
                action: 'insert_template',
                data: {
                    type: type,
                    name: name,
                    value: value
                }
            },
            success: function(data){
                if(data.status){
                    system.load('mail(templates)');
                } else {
                    alert('Something happend - try again!');
                }
            },
            error: function(){
                alert('Something happend - try again!');
            }
        });
    });
}