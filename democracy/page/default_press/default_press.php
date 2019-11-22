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

    private static function wordpress(){
        $path = (new \SYSTEM\PROOT('blog/wp-load.php'))->SERVERPATH();
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
    private static function media($type){
        $result = '';
        $media = \SQL\MEDIEN_SELECT::QQ(array($type));
        while($m = $media->next()){
            $m['img'] = './files/medien/'.$m['img'];
            $result .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_press/tpl/article.tpl'))->SERVERPATH(), $m);
        }
        return $result;
    }
    public function html(){
        $vars = array();
        
        $vars['articles']       = self::media(\SAI\saimod_media::MEDIA_PRESS);
        $vars['publications']   = self::media(\SAI\saimod_media::MEDIA_PUBLICATION);
        $vars['wordpress']      = self::wordpress();
        $vars['media']          = self::media(\SAI\saimod_media::MEDIA_DOWNLOAD);
        
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_press/tpl/default_press.tpl'))->SERVERPATH(), $vars);
    }
}