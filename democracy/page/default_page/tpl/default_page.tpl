<!DOCTYPE html>
<html lang="de">
<head>
    <title>${title_start}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${css}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109296340-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-109296340-1');
    </script>

    <meta name="author" content="Democracy Deutschland e.V.">
    <meta name="publisher" content="Democracy Deutschland e.V.">
    <meta name="copyright" content="Democracy Deutschland e.V.">
    <meta name="description" content="DEMOCRACY ist eine Initiative für mehr Basisdemokratie in Deutschland.">
    <meta name="keywords" content="Volksabstimmung, Mitbestimmung, Basisdemokratie, Bundestag, Bundestagsabstimmungen, Abstimmungsinitiativen, Demokratie,Bürgerwünsche, Politik, Stimme, Diskussionsforum, Wahlstimmen, abstimmen, appstimmen">
    <meta name="page-topic" content="Gesellschaft">
    <meta name="page-type" content="Bericht Reportage">
    <meta name="audience" content="Anfänger, Azubis, Erwachsene, Experten, Fortgeschrittene, Frauen, Jugendliche, Männer, Profis, Schüler, Studenten">
    <meta name="robots" content="index, follow">
    <meta name="DC.Creator" content="Democracy Deutschland e.V.">
    <meta name="DC.Publisher" content="Democracy Deutschland e.V.">
    <meta name="DC.Rights" content="Democracy Deutschland e.V.">
    <meta name="DC.Description" content="${meta_start_DC.Description}">
    <meta name="DC.Language" content="de">
    <meta name="revisit-after" content="3 DAYS" />
    <meta property="og:url" content="${meta_start_og:url}"/>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content="${title_start}"/>
    <meta property="og:description" content="${meta_start_og:description}"/>
    <meta property="og:image" content="${meta_start_og:image}" />
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta name="fragment" content="!">

    <style>
        /*@font-face {
          font-family: 'helvetica';
          src: url('./files/font/HelveticaLt.ttf') format('truetype');
        }*/
        /*  font-family: 'helvetica', serif; */

        @font-face {
          font-family: 'isabelle_layne';
          src: url('./files/font/Isabelle_Layne_Bold.ttf') format('truetype');
        }
        /*  font-family: 'isabelle_layne', serif; */

        /*@font-face {
          font-family: 'raleway';
          src: url('fonts/Raleway-Light.ttf') format('truetype');
        }*/
        /*  font-family: 'raleway', serif; */

        /*@font-face {
          font-family: 'playfair_display';
          src: url('./files/font/playfair_display.tff') format('truetype');
        }*/
        /*  font-family: 'playfair_display', serif; */

        @font-face {
          font-family: 'edosz';
          src: url('./files/font/edosz.ttf') format('truetype');
        }
        /*  font-family: 'edosz', serif; */

        @font-face {
          font-family: 'TravelingTypewriter';
          src: url('./files/font/TravelingTypewriter.ttf') format('truetype');
        }
        /*  font-family: 'TravelingTypewriter', serif; */
        .callbacks_nav {
              background:transparent url(./files/images/arrows.png) no-repeat right top;
        }
        #toTop {
          background:url(./files/images/arrow.png) no-repeat 0 0;
        }
    </style>
  
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" href="./favicon.ico" type="image/x-icon" />
    <link rel="icon" type="image/x-icon" sizes="192x192"  href="./files/icons/android-icon-192x192.png">
    <link rel="icon" type="image/x-icon" sizes="32x32" href="./files/icons/favicon-32x32.png">
    <link rel="icon" type="image/x-icon" sizes="96x96" href="./files/icons/favicon-96x96.png">
    <link rel="icon" type="image/x-icon" sizes="16x16" href="./favicon.ico">
  
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <![endif]-->
</head>
<body>
    <!-- banner -->
    <div id="banner" class="banner banner_nonpure">
        <div class="header">
            <div class="container">
                <div class="header-left">
                    <div class="w3layouts-logo">
                        <h1><img class="logox" src="./files/images/logo.png" alt="DEMOCRACY Deutschland Logo"></h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
                <div class="top-nav">
                    <nav class="navbar navbar-default">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li><a id="m_idee" class="m_mm active" href="#!start">Idee</a></li>
                <li><a id="m_wir" class="m_mm" href="#!wir">Wir</a></li>
                <li><a id="m_medien" class="m_mm" href="#!medien">Medien</a></li>
                <li><a id="m_prototyp" class="m_mm" href="#!prototyp">Prototyp</a></li>
                <li><a id="m_help" class="m_mm" href="#!help">Mithelfen</a></li>
              </ul> 
              <div class="clearfix"> </div>
            </div>  
          </nav>    
        </div>
        <!-- w3-banner -->
        <div class="w3-banner" style="position: relative; right: -3500px">
            <h1 class="headtxt" >DEMOCRACY</h1>
            <div class="isabelle_layne" >Demokratie_live</div>
            <p class="crowdfunding_details">
                ${main_startnext_status}
            </p>
            <a href="http://startnext.com/democracy" class="call_to_action">
                Unterstütze unser Projekt auf<br>
                <img src="./files/images/startnext_logo.png" alt="Startnext Logo">
            </a>
        </div>
        <!-- //w3-banner -->
      </div>
    </div>
  </div>
  <!-- //banner -->
  <section id="content"></section>
  <!-- footer -->
  <div class="footer" >
    <div class="container" >
      <div class="w3agile_footer_grids" style="padding-left:20px">
        <div class="col-md-3 agileinfo_footer_grid">
          <div class="agileits_w3layouts_footer_logo">
            <div class="logobox">
                <div class="edzofont">DEMOCRACY</div>
                <div class="isabelle_layne">Demokratie_live</div>
            </div>
            <div class="agileinfo-social-grids">
                <ul>
                    <li><a href="https://www.youtube.com/channel/UC2R4cGTq1LjFZ2DvDaVhDyg" target="_blank"><i id="youtube_" class="fa fa-youtube"></i></a></li>
                    <li><a href="https://www.facebook.com/democracygermany/" target="_blank"><i id="facebook_" class="facebook_ fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/democracy_de" target="_blank"><i id="twitter_" class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/democracy_deutschland/" target="_blank"><i id="insta_" class="insta_ fa fa-instagram"></i></a></li>
                    <li><a href="https://github.com/demokratie-live/" target="_blank"><i id="github_" class="insta_ fa fa-github"></i></a></li>
                    <li><a href="https://discord.gg/Pdu3ZEV" target="_blank"><i id="discord_" class="insta_ fa fa-weixin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-3 agileinfo_footer_grid">
          <h3>Kontakt Info</h3>
                    <h2 style="color: white;  font-size: 18px"><span class="" >DEMOCRACY</span><br> <small style="font-size: 15px"> Deutschland e.V.</small> </h2>
                    <small class="foot_gem" style="font-size: 15px">(gemeinnützig)</small>
          <br>
                    <div style="color:white">
                    <div style="font-size: small">Industriestr. 10</div>
          <div style="font-size: small">37079 Göttingen </div>
          <div style="font-size: small">Deutschland</div>
          <div style="font-size: small">contact@democracy-deutschland.de</div>
          <div style="font-size: small">Fon: +49 176 470 40 213</div>
                    </div>
        </div>
                <div class="col-md-3 agileinfo_footer_grid" >
          <h3>Impressum</h3>
                    <div style="color:white">
                        <div style="font-size: small">Amtsgericht Göttingen</div>
                        <div style="font-size: small">VR 201924</div>
             <div></div>    
                    </div>
                    <br>       
          <h3>Spenden</h3>
            <div style="color:white">
                <a  href="https://www.startnext.com/democracy" target="_blank" > 
                    <img src="./files/images/startnext_logo.png" width="120" style="margin-top: -7px" alt="Startnext Logo">
                </a>
                <!--
                <div style="font-size: small">Bank: Triodos Bank</div>
                <div style="font-size: small">IBAN:</div>
                <div style="font-size: small">BIC:</div>
                -->
            </div>
          <div class="clearfix"> </div>
        </div>
        <div class="col-md-3 agileinfo_footer_grid agileinfo_footer_grid1" style="padding-right:20px">
          <h3>Navigation</h3>
          <ul class="w3layouts_footer_nav">
            <li><a href="#!start" onclick="$('#toTopHover').click()"><i class="fa fa-angle-right" aria-hidden="true"></i>Idee</a></li>
            <li><a href="#!wir" onclick="$('#toTopHover').click()"><i class="fa fa-angle-right" aria-hidden="true"></i>Wir</a></li>
            <li><a href="#!medien" onclick="$('#toTopHover').click()"><i class="fa fa-angle-right" aria-hidden="true"></i>Medien</a></li>
            <li><a href="#!prototyp" onclick="$('#toTopHover').click()"><i class="fa fa-angle-right" aria-hidden="true"></i>Prototyp</a></li>
            <li><a href="#!help" onclick="$('#toTopHover').click()"><i class="fa fa-angle-right" aria-hidden="true"></i>Mithelfen</a></li>
          </ul>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
    <div class="w3_agileits_footer_copy">
      <div class="container">
        <p>
          <i class="fa fa-creative-commons"></i> BY NC ND 4.0
          &mdash; 2017
          <span class="edzofont">DEMOCRACY</span>
          Deutschland e.V.</p>
      </div>
    </div>
    </div>
    <!-- //footer -->
    ${js}
</body> 
</html>