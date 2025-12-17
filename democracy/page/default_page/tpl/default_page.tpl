<!DOCTYPE html>
<html lang="de">

<head>
    <title>${title_start}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${css}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <!--<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109296340-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-109296340-1');
        </script>-->

    <meta name="author" content="Democracy Deutschland e.V.">
    <meta name="publisher" content="Democracy Deutschland e.V.">
    <meta name="copyright" content="Democracy Deutschland e.V.">
    <meta name="description"
        content="Mach Dich zum Abgeordneten! Ganz einfach: Mit DEMOCRACY. Kontrolliere das Stimmverhalten Deiner Politiker. Stimme zu den gleichen Themen selbst ab. Finde Übereinstimmungen & Abweichungen. Erhalte faktenbasierte Hilfe für Deine nächste Wahlentscheidung. Alles in einer kostenlosen und gemeinnützigen App.">
    <meta name="keywords"
        content="Democracy App, DEMOCRACY App, democracy app, democracyapp, DEMOCRACYApp, Volksabstimmung, Mitbestimmung, Basisdemokratie, Bundestag, Bundestagsabstimmungen, Abstimmungsinitiativen, Demokratie,Bürgerwünsche, Politik, Stimme, Diskussionsforum, Wahlstimmen, abstimmen, appstimmen">
    <meta name="page-topic" content="Gesellschaft">
    <meta name="page-type" content="Bericht Reportage">
    <meta name="audience"
        content="Politiker, Bürger, Interessierte, Lobbyisten, Anfänger, Azubis, Erwachsene, Experten, Fortgeschrittene, Frauen, Jugendliche, Männer, Profis, Schüler, Studenten">
    <meta name="robots" content="index, follow">
    <meta name="DC.Creator" content="Democracy Deutschland e.V.">
    <meta name="DC.Publisher" content="Democracy Deutschland e.V.">
    <meta name="DC.Rights" content="Democracy Deutschland e.V.">
    <meta name="DC.Description" content="${meta_start_DC.Description}">
    <meta name="DC.Language" content="de">
    <meta name="revisit-after" content="3 DAYS" />
    <meta property="og:url" content="${meta_start_og:url}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title_start}" />
    <meta property="og:description" content="${meta_start_og:description}" />
    <meta property="og:image" content="${meta_start_og:image}" />
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta name="fragment" content="!">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/demokratie-live/YouTubeHDThumbnail@master/css/YouTube.HD.Thumbnail.css">

    <link rel="manifest" href="/manifest.json">
    <link rel="apple-touch-icon" sizes="57x57" href="./files/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./files/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./files/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./files/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./files/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./files/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./files/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./files/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./files/icons/apple-icon-180x180.png">
    <link rel="icon" href="./favicon.ico" type="image/x-icon" />
    <link rel="icon" type="image/x-icon" sizes="192x192" href="./files/icons/android-icon-192x192.png">
    <link rel="icon" type="image/x-icon" sizes="32x32" href="./files/icons/favicon-32x32.png">
    <link rel="icon" type="image/x-icon" sizes="96x96" href="./files/icons/favicon-96x96.png">
    <link rel="icon" type="image/x-icon" sizes="16x16" href="./favicon.ico">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top startpage">
        <div class="container">
            <a class="navbar-brand" href="#!home">
                <img src="./files/images/logo.png" alt="DEMOCRACY Deutschland Logo" />&nbsp;&nbsp;DEMOCRACY<h3
                    id="navbar-brand-suffix">App</h3>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse"
                aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item active"><a id="menu_wahlometer" class="nav-link"
                            href="#!wahlometer">Wahl-O-Meter</a></li>
                    <li class="nav-item active"><a id="menu_home" class="nav-link" href="#!home">DEMOCRACY</a></li>
                    <li class="nav-item active"><a id="menu_about" class="nav-link" href="#!about">Über Uns</a></li>
                    <li class="nav-item active"><a id="menu_press" class="nav-link" href="#!press">Presse</a></li>
                    <!--- 
                        <li class="nav-item"><a id="menu_citizen" class="nav-link" href="#!citizen">Für Bürger</a></li>
                        <li class="nav-item"><a id="menu_politicians" class="nav-link" href="#!politicians">Für Politiker</a></li>
                        <li class="nav-item"><a id="menu_engineering" class="nav-link" href="#!engineering">Engineering</a></li>
                        --->
                    <li class="nav-item"><a id="menu_donate" class="nav-link menu-important" href="#!donate">Spenden</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    <section id="content"></section>
    <div class="container-fluid">
        <div class="footer row">
            <div class="col-lg-4 footer-newsletter">
                <div class="logobox">
                    <div class="edosz">DEMOCRACY</div>
                    <div class="isabelle_layne">Demokratie_live</div>
                </div>
                <br>
                <div class="newsletterbox">
                    <a href="https://listmonk.democracy-app.de/subscription/form" target="_blank" rel="noopener noreferrer" class="btn-democracy" role="button" aria-label="Newsletter abonnieren - öffnet in neuem Tab">
                        <div>NEWSLETTER ABONNIEREN</div>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 footer-rechtliches">
                <h3>RECHTLICHES</h3>
                <ul>
                    <li><a href="#!nutzungsbedingungen">Nutzungsbedingungen</a></li>
                    <li><a href="#!datenschutz">Datenschutz</a></li>
                    <li><a href="#!impressum">Impressum</a></li>
                    <li><a href="#!contact">Kontakt</a></li>
                </ul>
            </div>
            <div class="col-lg-2 footer-in-touch">
                <h3>IN TOUCH</h3>
                <ul>
                    <li><a href="#!engineering">Programmieren</a></li>
                    <li><a href="#!engineering#help">Mithelfen</a></li>
                    <li><a href="#!blog">Blog</a></li>
                    <li><a href="#!faq">FAQ</a></li>
                </ul>
            </div>
            <div class="col-lg-3 footer-sm">
                <h3>SOCIAL MEDIA</h3>
                <ul id="sm">
                    <li>
                        <a href="https://www.facebook.com/democracygermany/" target="_blank"><i
                                class="fab fa-facebook facebook"></i></a>
                        &nbsp;
                        <a href="https://twitter.com/democracy_de" target="_blank"><i
                                class="fab fa-twitter twitter"></i></a>
                        &nbsp;
                        <a href="https://www.youtube.com/channel/UC2R4cGTq1LjFZ2DvDaVhDyg" target="_blank"><i
                                class="fab fa-youtube youtube"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/demokratie-live/" target="_blank"><i
                                class="fab fa-github github"></i></a>
                        &nbsp;
                        <a href="https://discord.gg/ZWcFrEc" target="_blank"><i class="fab fa-discord discord"></i></a>
                        &nbsp;
                        <a href="mailto:contact@democracy-deutschland.de" target="_blank"><i
                                class="fa fa-envelope mail"></i></a>
                    </li>
                    <li>
                        <a href="mailto:contact@democracy-deutschland.de" target="_blank" style="display: none;"><i
                                class="fa fa-envelope mail"></i></a>
                        &nbsp;
                        <a href="https://instagram.com/democracy_app" target="_blank"><img
                                src="./files/images/instagram-icon.svg"
                                onerror="this.onerror=null; this.src='./files/images/instagram-icon.png'"></a>
                        &nbsp;
                        <a href="mailto:contact@democracy-deutschland.de" target="_blank" style="display: none;"><i
                                class="fa fa-envelope mail"></i></a>
                        <!--<a href="https://www.tiktok.com/@democracy_app" target="_blank">t</a>-->
                    </li>
                </ul>
            </div>
        </div>
        <div class="copyright row">
            <div class="col-12">
                <i class="fab fa-creative-commons"></i> BY NC ND 4.0 &mdash; 2024 <span
                    class="edzofont">DEMOCRACY</span> Deutschland e.V.
            </div>
        </div>
    </div>
    ${js}
    <script src="https://cdn.jsdelivr.net/gh/demokratie-live/YouTubeHDThumbnail@master/js/jQuery.YouTube.HD.Thumbnail_democracy.js"></script>
</body>

</html>
