<?php
class default_medien implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_medien');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_medien');}
    public static function js(){
        return array(   new PPAGE('default_medien/js/default_medien.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_medien/css/default_medien.css'));}
    public function html(){
        $vars = array();
        
        $vars['articles'] = '';
        $articles = array(  array(  'img' => './files/medien/youtube_idealism_prevails.jpg', 'alt' => 'Idealism Prevails - Marius Krüger',
                                    'day' => '22', 'month' => 'November 2017', 'link' => 'https://www.youtube.com/watch?v=5_QGl2S4CWQ',
                                    'title' => 'Demokratie im 21. Jahrhundert - Marius Krüger B.A.', 'text' => 'Zu Gast bei Paula P’Cay erklärt Marius Krüger, was er mit vielen Gleichgesinnten und der DEMOCRACY App erreichen möchte.',
                                    'links' => array(   array( 'icon' => 'fa-youtube', 'link' => 'https://www.youtube.com/watch?v=5_QGl2S4CWQ'),
                                                        array( 'icon' => 'fa-facebook-square', 'link' => 'https://www.facebook.com/idealismprevails/posts/310388876033747'),
                                                        array( 'icon' => 'fa-twitter', 'link' => 'https://twitter.com/IdealismPrevail/status/933399378840211458'))),
                            array(  'img' => './files/medien/sputnik.jpg', 'alt' => 'MDR Sputnik Bildschirmfoto',
                                    'day' => '09', 'month' => 'November 2017', 'link' => 'http://www.sputnik.de/sendungen/tagesupdate/audio-539944.html',
                                    'title' => 'Per App in den Bundestag', 'text' => 'Politische Mitsprache war noch nie so einfach. Wie genau DEMOCRACY funktioniert – im MDR Sputnik Tagesupdate',
                                    'links' => array(   array( 'icon' => 'fa-twitter', 'link' => 'https://twitter.com/democracy_de/status/929327720617730048'),
                                                        array( 'icon' => 'fa-facebook-square', 'link' => 'https://www.facebook.com/democracygermany/photos/a.1474235059541656.1073741828.1453504428281386/1500252143606614'),
                                                        array( 'icon' => 'fa-globe', 'link' => 'http://www.sputnik.de/sendungen/tagesupdate/audio-539944.html'))),
                            array(  'img' => './files/medien/spreezeitung.jpg', 'alt' => 'Spreezeitung Bildschirmfoto',
                                    'day' => '07', 'month' => 'November 2017', 'link' => 'http://www.spreezeitung.de/25886/neues-start-up-will-deutsche-politik-verbessern/',
                                    'title' => 'Neues Start-Up will deutsche Politik verbessern', 'text' => 'Mehr Transparenz, politische Bildung und eine umfassende Diskussion über aktuelle Themen braucht das politische System in Deutschland, findet Marius Krüger.',
                                    'links' => array(   array( 'icon' => 'fa-twitter', 'link' => 'https://twitter.com/SPREEZEITUNG/status/927811827878293504'),
                                                        array( 'icon' => 'fa-facebook-square', 'link' => 'https://www.facebook.com/democracygermany/posts/1498977520400743'),
                                                        array( 'icon' => 'fa-globe', 'link' => 'http://www.spreezeitung.de/25886/neues-start-up-will-deutsche-politik-verbessern/'))),
                            array(  'img' => './files/medien/neue_debatte.jpg', 'alt' => 'Neue Debatte DEMOCRACY APP',
                                    'day' => '03', 'month' => 'November 2017', 'link' => 'https://neue-debatte.com/2017/11/03/digitale-medien-mit-der-democracy-app-zur-basisdemokratie/',
                                    'title' => 'Mit der Democracy App zur Basisdemokratie?!', 'text' => 'Günter Sosna von der «Neuen Debatte» interviewt Marius Krüger und Magnus Rembold zur DEMOCRACY App.',
                                    'links' => array(   array( 'icon' => 'fa-twitter', 'link' => 'https://twitter.com/neuedebatte/status/926307781312999424'),
                                                        array( 'icon' => 'fa-facebook-square', 'link' => 'https://www.facebook.com/NeueDebatte/posts/1851079225202666'),
                                                        array( 'icon' => 'fa-globe', 'link' => 'https://neue-debatte.com/2017/11/03/digitale-medien-mit-der-democracy-app-zur-basisdemokratie/'))),
                            array(  'img' => './files/medien/enorm.jpg', 'alt' => 'Enorm Magazin Push Mitteilung Bundestag',
                                    'day' => '25', 'month' => 'Oktober 2017', 'link' => 'https://enorm-magazin.de/push-mitteilung-aus-dem-bundestag',
                                    'title' => 'Push-Mitteilung aus dem Bundestag', 'text' => '«enorm Magazin» berichtet - Demokratie und Democracy haben gemeinsam: Entscheidend ist, wie viele mitmachen.',
                                    'links' => array(   array( 'icon' => 'fa-twitter', 'link' => 'https://twitter.com/enorm_magazin/status/922480348512116737"'),
                                                        array( 'icon' => 'fa-facebook-square', 'link' => 'https://www.facebook.com/enormmagazin/posts/10155331705522732'),
                                                        array( 'icon' => 'fa-globe', 'link' => 'https://enorm-magazin.de/push-mitteilung-aus-dem-bundestag'))),
                            array(  'img' => './files/medien/medium.jpg', 'alt' => 'Medium Bildschirmfoto',
                                    'day' => '23', 'month' => 'Oktober 2017', 'link' => 'https://medium.com/@ulf.gebhardt/wege-zur-demokratie-276e2d9363e3',
                                    'title' => 'Wege zur Demokratie', 'text' => 'Ulf Gebhardt hat einen Vorschlag zu mehr Demokratie für Dich',
                                    'links' => array(   array( 'icon' => 'fa-twitter', 'link' => 'https://twitter.com/democracy_de/status/923548838333485057'),
                                                        array( 'icon' => 'fa-facebook-square', 'link' => 'https://www.facebook.com/democracygermany/posts/1495432317421930'),
                                                        array( 'icon' => 'fa-globe', 'link' => 'https://medium.com/@ulf.gebhardt/wege-zur-demokratie-276e2d9363e3'))),
                            array(  'img' => './files/medien/cf_laenger.jpg', 'alt' => 'Democracy Crowfunding Verlängerung',
                                    'day' => '19', 'month' => 'Oktober 2017', 'link' => 'https://www.startnext.com/democracy/blog/beitrag/eintrag-21--crowdfundingverlaengerung-p73455.html',
                                    'title' => 'Crowdfunding Verlängerung', 'text' => 'Das Crowdfunding auf Startnext wurde um 35 Tage bis zum 26.11. verlängert.',
                                    'links' => array(   array( 'icon' => 'fa-youtube', 'link' => 'ttps://www.youtube.com/watch?v=-6pdnFqnaWY&t=2s'),
                                                        array( 'icon' => 'fa-facebook-square', 'link' => 'https://www.facebook.com/democracygermany/videos/1493352617629900/'),
                                                        array( 'icon' => 'fa-globe', 'link' => 'https://www.startnext.com/democracy/blog/beitrag/eintrag-21--crowdfundingverlaengerung-p73455.html'))),
                            array(  'img' => './files/medien/kenfm_pm.jpg', 'alt' => 'Democracy KenFM Pressemitteilung',
                                    'day' => '04', 'month' => 'Oktober 2017', 'link' => 'https://kenfm.de/politische-mitsprache-app-democracy/',
                                    'title' => 'Pressemitteilung bei KenFM', 'text' => '«KenFM» veröffentlicht als erste Plattform die 1. Pressemitteilung des Projekts DEMOCRACY',
                                    'links' => array(   array( 'icon' => 'fa-twitter', 'link' => 'https://twitter.com/TeamKenFM/status/915466281935089664'),
                                                        array( 'icon' => 'fa-facebook-square', 'link' => 'https://www.facebook.com/KenFM.de/posts/10154782936936583'),
                                                        array( 'icon' => 'fa-globe', 'link' => 'https://kenfm.de/politische-mitsprache-app-democracy/'))),
                            array(  'img' => './files/medien/mweisband.jpg', 'alt' => 'Marina Weisband unterstützt DEMOCRACY',
                                    'day' => '10', 'month' => 'September 2017', 'link' => 'http://marinaweisband.de/der-wahl-o-mat-fuer-immer/',
                                    'title' => 'Wahl-O-Mat, aber für immer', 'text' => 'Marina Weisband wirbt in Ihrem Blog mit einem tollen Artikel für die Idee von DEMOCRACY.',
                                    'links' => array(   array( 'icon' => 'fa-twitter', 'link' => 'https://twitter.com/Afelia/status/906977361865973760'),
                                                        array( 'icon' => 'fa-facebook-square', 'link' => 'https://www.facebook.com/democracygermany/photos/a.1474235059541656.1073741828.1453504428281386/1480745095557319/?type=3&theater'),
                                                        array( 'icon' => 'fa-globe', 'link' => 'http://marinaweisband.de/der-wahl-o-mat-fuer-immer/'))),
                            array(  'img' => './files/medien/crowdfunding.jpg', 'alt' => 'DEMOCRACY Crowdfunding start',
                                    'day' => '09', 'month' => 'September 2017', 'link' => 'https://www.startnext.com/democracy/blog/beitrag/eintrag-1--democracy-goes-crowdfunding-p72551.html',
                                    'title' => 'Start des Crowdfunding bei Startnext', 'text' => 'Mit einem Knall startet das Crowdfunding bei «Startnext» und sammelt in den ersten 3 Tagen fast 3000€ ein.',
                                    'links' => array(   array( 'icon' => 'fa-youtube', 'link' => 'https://www.youtube.com/watch?v=q0frFha7QE8'),
                                                        array( 'icon' => 'fa-facebook-square', 'link' => 'https://www.facebook.com/democracygermany/videos/1480574098907752/'),
                                                        array( 'icon' => 'fa-globe', 'link' => 'https://www.startnext.com/democracy/blog/beitrag/eintrag-1--democracy-goes-crowdfunding-p72551.html')))
                        );
        $i = 1;
        foreach($articles as $article){
            $article['sub'] = ($i % 2 == 0) ? '_sub' : '';
            $links = $article['links'];
            $article['links'] = '';
            foreach($links as $link){
                $article['links'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_medien/tpl/article_link.tpl'))->SERVERPATH(), $link);}
            $vars['articles'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_medien/tpl/article.tpl'))->SERVERPATH(), $article);
            $i++;
        }
        
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_medien/tpl/default_medien.tpl'))->SERVERPATH(), $vars);
    }
}