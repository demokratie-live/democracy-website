function init_faq(){
    $(".w3-banner").css("display", "none");
    $(".banner").addClass("banner_nonpure2");
    $(".banner").removeClass("banner_nonpure");
    $(".m_mm").css("color","#fff");
    $(".m_mm").removeClass("active");
    $("#m_faq").addClass("active");
    $("#content").css('position', 'relative').css("right", "-3500px");
    $("#content").animate({"right":"0"}, 500);
    $("#slider3").responsiveSlides({speed: 3000});
    $('#toTopHover').click();
    
    $("#submitquestion").click(function(){
        var vorname = $("#fvorname").val();
        var nachname = $("#fnachname").val();
        var email = $("#femail").val();
        var frage = $("#exampleTextarea").val();
        
        //check
        if (vorname === "" || vorname.length < 3 ){
            alert( "bitte einen Vornamen eingeben");
            $("#fvorname").focus();
            return null;
        }
        if (nachname === "" || nachname.length < 3 ){
            alert( "bitte einen Nachname eingeben");
            $("#fnachname").focus();
            return null;
        }
        if (email === "" || email.length < 8 ){
            alert( "bitte einen E-Mail eingeben");    
            $("#femail").focus();
            return null;
        }   
        if (frage == "" || frage.length < 3 ){
            alert( "bitte eine Frage eingeben");    
            $("#exampleTextarea").focus();
            return null;
        }
        
        //send
        $.ajax({
                async: true,
                url: './api.php',
                type: 'GET',
                dataType: 'JSON',
                data: {
                    call: 'send_mail_faq',
                    data: { vorname:    vorname,
                            nachname:   nachname,
                            email:      email,
                            frage:      frage}
                },
                success: function(data){
                    if(!data.status){
                        alert("Deine Frage konnte nicht versendet weden. Bitte versuche es später noch einmal. Danke.");
                    } else {
                        $("#exampleTextarea").val('');
                        alert("Danke! Deine Frage wurde versendet.");
                    }
                },
                error: function(){
                    alert("Deine Frage konnte nicht versendet weden. Bitte versuche es später noch einmal. Danke.");
                }
        });
    });
}