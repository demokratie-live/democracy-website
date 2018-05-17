var upload_files = {};

function init_engeneering(){
    $(".nav-item").removeClass("active");
    $("#menu_engeneering").parent().addClass("active");
    $(".navbar").removeClass("startpage");
    $('[data-toggle="tooltip"]').tooltip();
    
    $(".icon-app-store-outline2").hover(
        function(){$(this).toggleClass("icon-app-store-filled2");}
    );
    $(".icon-google-play-outline2").hover(
        function(){$(this).toggleClass("icon-google-play-filled2");}
    );
    
    $("#bug-send").click(function(){
        var data =  {   type: 'bugreport',
                        name: $('#bug-name').val(),
                        email: $('#bug-email').val(),
                        title: $('#bug-title').val(),
                        platform: $('#bug-platform').val(),
                        version: $('#bug-version').val(),
                        text: $('#bug-text').val(),
                        files: JSON.stringify(upload_files)};

        if (data.name.length < 3 ){
            alert( "Bitte einen Vornamen eingeben");
            $("#bug-name").focus();
            return null;
        }
        if (!validateEmail(data.email)){
            alert( "Bitte einen gültige E-Mail eingeben");
            $("#bug-email").focus();
            return null;
        }
        if (data.title.length < 3 ){
            alert( "Bitte einen Text eingeben");    
            $("#bug-title").focus();
            return null;
        }
        if (data.text.length < 3 ){
            alert( "Bitte einen Text eingeben");    
            $("#bug-text").focus();
            return null;
        }

        sendMail(data,function(data){
            if(data && data.status){
                $('#bug-form').trigger("reset");
                $('#bug-file-list').html('');
                $('#bug-file-list').hide();
                alert("Danke! Deine Nachricht wurde versendet.");
            } else {
                alert("Deine Nachricht konnte nicht versendet weden. Bitte versuche es später noch einmal. Danke.");
            }
        });
    });
    
    $("#vol-send").click(function(){
        var data =  {   type: 'volunteer',
                        name: $('#vol-name').val(),
                        email: $('#vol-email').val(),
                        check_uiux: $('#vol-uiux').is(':checked') ? true : null,
                        check_frontend: $('#vol-frontend').is(':checked') ? true : null,
                        check_backend: $('#vol-backend').is(':checked') ? true : null,
                        check_kryptologe: $('#vol-kryptologe').is(':checked') ? true : null,
                        check_marketing: $('#vol-marketing').is(':checked') ? true : null,
                        check_redakteur: $('#vol-redakteur').is(':checked') ? true : null,
                        check_botschafter: $('#vol-botschafter').is(':checked') ? true : null,
                        check_feature: $('#vol-feature').is(':checked') ? true : null,
                        text: $('#vol-text').val()};

        if (data.name.length < 3 ){
            alert( "Bitte einen Vornamen eingeben");
            $("#vol-name").focus();
            return null;
        }
        if (!validateEmail(data.email)){
            alert( "Bitte einen gültige E-Mail eingeben");
            $("#vol-email").focus();
            return null;
        }   
        if (data.text.length < 3 ){
            alert( "Bitte einen Text eingeben");    
            $("#vol-text").focus();
            return null;
        }

        sendMail(data,function(data){
            if(data && data.status){
                $('#vol-form').trigger("reset");
                alert("Danke! Deine Nachricht wurde versendet.");
            } else {
                alert("Deine Nachricht konnte nicht versendet weden. Bitte versuche es später noch einmal. Danke.");
            }
        });
    });
    
    $("#bug-select-files").click(function(e){
        e.preventDefault();
        $("#bug-files").trigger('click');
    });
    $("#bug-form").on("dragover", function(event) {
        event.preventDefault();  
        event.stopPropagation();
    });

    $("#bug-form").on("dragleave", function(event) {
        event.preventDefault();  
        event.stopPropagation();
    });

    $("#bug-form").on("drop", function(event) {
        event.preventDefault();  
        event.stopPropagation();
        if (event.originalEvent.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < event.originalEvent.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (event.originalEvent.dataTransfer.items[i].kind === 'file') {
                  upload(event.originalEvent.dataTransfer.items[i].getAsFile());
                }
            }
        }
    });
    $("#bug-files").change(function (){
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
            upload($(this).get(0).files[i]);
        }
     });
}

function upload(file) {
    if(!file) return;
    
    if(!upload_files[file.lastModified]){
        upload_files[file.lastModified] = {};
    }
    upload_files[file.lastModified]['file'] = file;
    //FormData Objekt erzeugen
    var formData = new FormData();
    //XMLHttpRequest Objekt erzeugen
    var client = new XMLHttpRequest();
    client.responseType = 'json';
 
    $('#bug-progress .progress-bar').css('width', '0%').attr('aria-valuenow', 0); 
    $('#bug-progress').show(); 
    $('#bug-file-list').show();
    $('#bug-file-list').append('<a target="_blank" class="'+file.lastModified+' list-group-item list-group-item-warning"><span class="badge alert-success pull-right hidden">Success</span>'+file.name+'</a>');
    
    //Fügt dem formData Objekt unser File Objekt hinzu
    formData.append("datei", file);
 
    client.onerror = function(e) {
        $('.'+file.lastModified).removeClass('list-group-item-warning');
        $('.'+file.lastModified).removeClass('list-group-item-success');
        $('.'+file.lastModified).addClass('list-group-item-danger');
    };
 
    client.onload = function(e) {
        //$('#bug-progress .progress-bar').css('width', '100%').attr('aria-valuenow', 100);
        $('#bug-progress').hide();
    };
    
    client.onreadystatechange = function() {
        if (client.readyState == XMLHttpRequest.DONE) {
            upload_files[file.lastModified]['response'] = client.response;
            if(client.response.status){
                $('.'+file.lastModified).removeClass('list-group-item-warning');
                $('.'+file.lastModified).removeClass('list-group-item-danger');
                $('.'+file.lastModified).addClass('list-group-item-success');
                $('.'+file.lastModified+' span').removeClass('hidden');
                $('.'+file.lastModified).attr('href','./files/upload/'+client.response.result.file_name);
                upload_files[file.lastModified]['url'] = 'https://www.democracy-deutschland.de/files/upload/'+client.response.result.file_name;
            } else {
                $('.'+file.lastModified).removeClass('list-group-item-warning');
                $('.'+file.lastModified).removeClass('list-group-item-success');
                $('.'+file.lastModified).addClass('list-group-item-danger');
            }
        }
    }
 
    client.upload.onprogress = function(e) {
        var p = Math.round(100 / e.total * e.loaded);
        $('#bug-progress .progress-bar').css('width', p+'%').attr('aria-valuenow', p);
    };
 
    client.onabort = function(e) {
        $('.'+file.lastModified).removeClass('list-group-item-warning');
        $('.'+file.lastModified).removeClass('list-group-item-success');
        $('.'+file.lastModified).addClass('list-group-item-danger');
    };
 
    client.open("POST", "./api.php?call=upload");
    client.send(formData);
}