<?php
class default_press implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_press');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_press');}
    public static function js(){
        return array();}//   new PPAGE('default_press/js/default_press.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_press/css/default_press.css'));}
        
    private static function publications(){
        $publications = array(  array(  'link' => 'https://www.youtube.com/watch?v=q0frFha7QE8',
                                        'img' => './files/medien/Crowdfunding.png',
                                        'title' => 'DEMOCRACY goes Crowdfunding'),
                                array(  'link' => 'https://www.youtube.com/watch?v=748FNtwHCzw',
                                        'img' => './files/medien/Anny_Hartmann.png',
                                        'title' => 'Testimonial Anny Hartmann'),
                                array(  'link' => 'https://www.youtube.com/watch?v=-6pdnFqnaWY',
                                        'img' => './files/medien/CF-Verlaengerung.png',
                                        'title' => 'DEMOCRACY verlängert Crowdfunding'),
                                array(  'link' => 'https://www.youtube.com/watch?v=l7v4RtbPafg',
                                        'img' => './files/medien/DEMOCRACYXIP.png',
                                        'title' => 'Highlights DEMOCRACY X IP'),
                                array(  'link' => 'https://www.youtube.com/watch?v=oTX59JhDmXU',
                                        'img' => './files/medien/Sprint_1.png',
                                        'title' => 'Developer Demo Sprint 01'),
                                array(  'link' => 'https://www.youtube.com/watch?v=H6oJA4MUVW0',
                                        'img' => './files/medien/Sprint_4.png',
                                        'title' => 'Developer Demo Sprint 04'),
        );
        $result = '';
        foreach($publications as $p) {
            $result .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_press/tpl/article.tpl'))->SERVERPATH(), $p);
        }
        return $result;
    }
    private static function wordpress(){
        $path = (new \SYSTEM\PROOT('../httpdocs/blog/wp-load.php'))->SERVERPATH();
        $autoloadFuncs = spl_autoload_functions();
        foreach($autoloadFuncs as $unregisterFunc){   
            $unregisterFunc[0] = '\\'.$unregisterFunc[0];
            spl_autoload_unregister($unregisterFunc);
        }
        require $path;
        $autoloadFuncs2 = spl_autoload_functions();
        foreach($autoloadFuncs2 as $unregisterFunc){
            spl_autoload_unregister($unregisterFunc);
        }
        foreach($autoloadFuncs as $registerFunc){
            spl_autoload_register($registerFunc);}
        $wp_query = new \WP_Query();
        

        $result = '';
        $posts = wp_get_recent_posts(array(
                'numberposts' => 9,
                'orderby' => 'post_date',
                'order' => 'DESC',
                'post_type' => 'post',
                'post_status' => 'publish',
        ),ARRAY_A);

        foreach($posts as $post) {
            $p = array();
            $p['link'] = get_post_permalink($post['ID']);
            $p['title'] = $post['post_title'];
            // $p['exerpt'] = get_the_excerpt($post['ID']);
            $p['img'] = get_the_post_thumbnail_url($post['ID'], 'website_blog_thumbnail');
            // $p['date'] = date_i18n( get_option( 'date_format' ), strtotime( $post['post_date'] ) );
            // $p['content'] = wp_trim_words($post['post_content'], 25);
            $result .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_press/tpl/article.tpl'))->SERVERPATH(), $p);
        }
        return $result;
    }
    private static function media(){
        $media = array( array(  'link' => './files/download/DEMOCRACY_Logo.png',
                                'img' => './files/download/DEMOCRACY_Logo.png',
                                'title' => 'DEMOCRACY Bubble'),
                        array(  'link' => './files/download/DEMOCRACY_Logo_Beta.png',
                                'img' => './files/download/DEMOCRACY_Logo_Beta.png',
                                'title' => 'DEMOCRACY Bubble Beta'),
                        array(  'link' => './files/download/Logo_with_sublines_1.png',
                                'img' => './files/download/Logo_with_sublines_1.png',
                                'title' => 'DEMOCRACY LOGO'),
                        array(  'link' => './files/download/Logo_with_sublines_2.png',
                                'img' => './files/download/Logo_with_sublines_2.png',
                                'title' => 'DEMOCRACY Logo quer')
        );
        $result = '';
        foreach($media as $m) {
            $result .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_press/tpl/media.tpl'))->SERVERPATH(), $m);
        }
        return $result;
    }
    private static function articles(){
        $articles = array(  array(  'img' => './files/medien/Stadt_Land.png',
                                    'link' => 'http://ng.infranken.de/epaper/EPaper/PHP-Files/showclust.php?Ref=DText%2F94mvlhvqjm5-m4ssvjtetac&PageRef=DSArchiv%2Fg3~xgnu8amvnb567ftilydq&Clip=47%2C43%2C905%2C417&titel=bs&Spezial=&Display=print',
                                    'title' => 'In Franken - Politische Mitspache bald per App?'),
                            array(  'img' => './files/medien/Startalp.png',
                                    'link' => 'https://start-alp.com/2018/03/06/democracy-digital-im-bundestag-mitbestimmen/',
                                    'title' => 'Start Alp - DEMOCRACY: Digital im Bundestag mitbestimmen'),
                            array(  'img' => './files/medien/StartUpValley.png',
                                    'link' => './files/medien/StartUpValley.pdf',
                                    'title' => 'StartUpValley - DEMOCRACY X StartUpValley'),
                            array(  'img' => './files/medien/IP.png',
                                    'link' => 'https://www.facebook.com/kruegermarius/videos/1565466506855387/',
                                    'title' => 'Idealism Prevails - DEMOCRACY X Idealism Prevails'),
                            array(  'img' => './files/medien/Fabio_Di_Masi.png',
                                    'link' => 'https://www.facebook.com/fabio.d.masi/videos/724139911119044/?hc_ref=ARQOUAwCEBF-BSc3ka28z7nFVaOjJVCYgIxLzJ_DEYH0VZfZpljYV3uPLum3LCkcB2s',
                                    'title' => 'Fabio De Masi - Demokratie in Echtzeit'),
                            array(  'img' => './files/medien/MDR_Sputnik.png',
                                    'link' => 'http://www.sputnik.de/sendungen/tagesupdate/audio-539944.html',
                                    'title' => 'Sputnik - Per App in den Bundestag'),
                            array(  'img' => './files/medien/Spreezeitung.png',
                                    'link' => 'http://www.spreezeitung.de/25886/neues-start-up-will-deutsche-politik-verbessern/',
                                    'title' => 'Spreezeitung - Neues Start-Up will deutsche Politik verbessern'),
                            array(  'img' => './files/medien/Neue_Debatte.png',
                                    'link' => 'https://neue-debatte.com/2017/11/03/digitale-medien-mit-der-democracy-app-zur-basisdemokratie/',
                                    'title' => 'Neue Debatte - Mit der Democracy App zur Basisdemokratie?!'),
                            array(  'img' => './files/medien/enorm_Magazin.png',
                                    'link' => 'https://enorm-magazin.de/push-mitteilung-aus-dem-bundestag',
                                    'title' => 'Enorm-Magazin - Push-Mitteilung aus dem Bundestag'),
                            array(  'img' => './files/medien/Ulf_Gebhardt_in_Medium.png',
                                    'link' => 'https://medium.com/@ulf.gebhardt/wege-zur-demokratie-276e2d9363e3',
                                    'title' => 'Medium - Wege zur Demokratie'),
                            array(  'img' => './files/medien/KenFM.png',
                                    'link' => 'https://kenfm.de/politische-mitsprache-app-democracy/',
                                    'title' => 'KenFM - Pressemitteilung bei KenFM'),
                            array(  'img' => './files/medien/Marina_Weisband.png',
                                    'link' => 'http://marinaweisband.de/der-wahl-o-mat-fuer-immer/',
                                    'title' => 'Marina Weißband - Wahl-O-Mat, aber für immer')
        );
        $result = '';
        foreach($articles as $article){
            $result .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_press/tpl/article.tpl'))->SERVERPATH(), $article);
        }
        return $result;
    }
    public function html(){
        $vars = array();
        
        $vars['articles']       = self::articles();
        $vars['publications']   = self::publications();
        $vars['wordpress']      = self::wordpress();
        $vars['media']          = self::media();
        
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_press/tpl/default_press.tpl'))->SERVERPATH(), $vars);
    }
}