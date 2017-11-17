function init_help(){
    $(".w3-banner").css("display", "none");
    $(".banner").addClass("banner_nonpure2");
    $(".banner").removeClass("banner_nonpure");
    $("#content").css('position', 'relative').css("right", "-3500px");
    $("#content").animate({"right":"0"}, 500);
    // txt zeichen zählen 
    $("#exampleTextarea").keyup(function(){
        var txt = parseInt( $("#exampleTextarea").val().length);
        // console.log( txt < 120);
        //    console.log( "txt= "+ txt  );
        if ( txt < 120 ) {
            $("#txtsincebox").html(' ( -<span id="txtsince">'+  (120 - txt)  +'</span> Zeichen )');
            $("#submitx").removeClass("btn-success");
        } else {
            $("#txtsincebox").html("ok");
            $("#submitx").addClass("btn-success");
        }
    });

    $("#submitx").click(function(){
        var formserial = $("#form").serialize();
        var fvorname = $("#fvorname").val();
        var fnachname = $("#fnachname").val();
        var femail = $("#femail").val();
        var txt = $("#exampleTextarea").val();

        if (fvorname == "" || fvorname.length < 3 ){
            alert( "bitte einen Vornamen eingeben");
            $("#fvorname").focus();
            return null;
        }
        if (fnachname == "" || fnachname.length < 3 ){
            alert( "bitte einen Nachname eingeben");
            $("#fnachname").focus();
            return null;
        }
        if (femail == "" || femail.length < 11 ){
            alert( "bitte einen E-Mail eingeben");    
            $("#femail").focus();
            return null;
        }   
        if (txt == "" || txt.length < 120 ){
            alert( "bitte einen Text eingeben");    
            $("#exampleTextarea").focus();
            return null;
        }

        $.ajax({
          method: "POST",
          url: "sendmail.php",
          data: formserial
        }).done(function( msg ) {
            if ( msg == "Message sent") {
                $('#form').trigger("reset");
                alert("Danke! Deine Nachricht wurde versendet.");
            } else {
                alert("Deine Nachricht konnte nicht versendet weden. Bitte versuche es später noch einmal. Danke.")
            }
        });
    });
}