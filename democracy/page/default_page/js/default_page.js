$(document).ready(function() {
    new SYSTEM('./api.php',1,'start');
    
    /* init Jarallax */
    $('.jarallax').jarallax({
      speed: 0.5,
      imgWidth: 1366,
      imgHeight: 768
    });
    
    $(".scroll").click(function(event){   
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
    
    /*
        var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear' 
        };
      */
      
      $().UItoTop({ easingType: 'easeOutQuart' });
/*
      setTimeout(function(){
          $("#iframe").attr("src","https://projects.invisionapp.com//share/XHCNO67CA#/screens");
      },1000);
*/
      
      var prepareSwitch = function() {
        $(".w3-banner ").css("display", "none");
        
        $(".m_mm").removeClass("active");
        $(".m_mm").css("color","#fff");
        $(this).addClass("active");          
        
        $("#wrapperx").css('position', 'relative').css("right", "-3500px");
        $("#wrapperx").animate({"right":"0"}, 500);
        setTimeout( function() {
          var toggler = $(".navbar-toggle")
          if ( toggler.attr( 'aria-expanded' ) == 'true' ) {
            toggler.click();
          }
        }, 500);
      };
      
      $("#m_idee").click(function(){
        prepareSwitch();
        $(".w3-banner ").css("display", "block");
        $("#wrapperx").load("m_idee.html");
        
        $(".banner")
            .addClass("banner_nonpure")
            .removeClass("banner_nonpure2");
        $(".footer").addClass("footer_bg_grey");                
      });
      
      $("#m_wir").click(function(){
        prepareSwitch();
        $("#wrapperx").load("m_wir.html");
        // $(".banner").removeClass("banner_nonpure");
        $(".banner").addClass("banner_nonpure2");                
      });
      
      $("#m_medien").click(function(){
        prepareSwitch();
        $("#wrapperx").load("m_medien.html");
        $(".banner").addClass("banner_nonpure2");
      });
      
      $("#m_proto").click(function(){
        prepareSwitch();
        $("#wrapperx").load("m_proto.html");
        $(".banner").removeClass("banner_nonpure");
        $(".banner").addClass("banner_nonpure2");   
      });
      
      $("#m_help").click(function(){
        prepareSwitch();          
        $(".banner").removeClass("banner_nonpure");
        $(".banner").addClass("banner_nonpure2"); 
        $("#wrapperx").load("m_help.html", function(){
               
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
          })
            .done(function( msg ) {
              // console.log(  msg );
              if ( msg == "Message sent") {
                $('#form').trigger("reset");
                alert("Danke! Deine Nachricht wurde versendet.");
              } else {
                alert("Deine Nachricht konnte nicht versendet weden. Bitte versuche es später noch einmal. Danke.")
              }
            });
          
          });
        });
      });
      
      //start
      var hash = window.location.hash;
      switch(hash){
        
        case "#idee" : 
          $("#m_idee").click();
          break;
        case "#wir" :
          $("#m_wir").click();
          break;    
        case "#medien" :
          $("#m_medien").click();
          break;    
        case "#prototyp" :
          $("#m_proto").click();
          break;   
        case "#mithelfen" :
          $("#m_help").click();
          break; 
          
        default:
          $("#m_idee").click();
      }
    
});