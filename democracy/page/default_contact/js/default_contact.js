function init_contact(){
    $(".nav-item").removeClass("active");
    $(".navbar").removeClass("startpage");

    $("#send_contact").click(function(){
        var data =  {   type: 'contact',
                        vorname: $('#vorname').val(),
                        nachname: $('#nachname').val(),
                        email: $('#email').val(),
                        text: $('#text').val()};

        if (data.vorname.length < 3 ){
            alert( "Bitte einen Vornamen eingeben");
            $("#vorname").focus();
            return null;
        }
        if (data.nachname.length < 3 ){
            alert( "Bitte einen Nachname eingeben");
            $("#nachname").focus();
            return null;
        }
        if (!validateEmail(data.email)){
            alert( "Bitte einen gültige E-Mail eingeben");
            $("#email").focus();
            return null;
        }   
        if (data.text.length < 3 ){
            alert( "Bitte einen Text eingeben");    
            $("#text").focus();
            return null;
        }

        sendMail(data,function(data){
            if(data && data.status){
                $('#form').trigger("reset");
                alert("Danke! Deine Nachricht wurde versendet.");
            } else {
                alert("Deine Nachricht konnte nicht versendet weden. Bitte versuche es später noch einmal. Danke.");
            }
        });
    });
}