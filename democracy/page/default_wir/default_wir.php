<?php
class default_wir implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_wir');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_wir');}
    public static function js(){
        return array(   new PPAGE('default_wir/js/default_wir.js'));}
    public static function css(){
    return array();}//   new PPAGE('default_wir/css/default_wir.css'));}
    public function html(){
        $vars = array();
        //icons
        $vars['icons'] = '';
        $icons = array( array('icon' => 'fa-universal-access', 'text' => 'Gemeinschaftlichkeit'),
                        array('icon' => 'fa-heartbeat', 'text' => 'Gemeinnützigkeit'),
                        array('icon' => 'fa-eye', 'text' => 'Transparenz'),
                        array('icon' => 'fa-shield', 'text' => 'nicht profitorientiert'),
                        array('icon' => 'fa-user-times', 'text' => 'kein Datenverkauf'),
                        array('icon' => 'fa-trash', 'text' => 'keine Werbung'));
        $i = 1;
        foreach($icons as $icon){
            $vars['icons'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_wir/tpl/icon.tpl'))->SERVERPATH(), $icon);
            if($i % 2 == 0){
                $vars['icons'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_wir/tpl/icon_space.tpl'))->SERVERPATH());}
            $i++;
        }
        //testimonials
        $vars['testimonials'] = '';
        $testimonials = array(  array('person' => 'Mahatma Gandhi', 'text' => 'Die Demokratie muss dem Schwächsten die gleichen Chancen zusichern wie dem Stärksten.'),
                                array('person' => 'Willy Brandt', 'text' => 'Wir wollen mehr Demokratie wagen.'),
                                array('person' => 'Richard von Weizsäcker', 'text' => 'Die Demokratie ist die einzige Staatsform, die den stets notwendigen Weg zum Wandel in Frieden finden läßt.'),
                                array('person' => 'Thomas  Jefferson', 'text' => 'Information ist die Währung der Demokratie.'));
        foreach($testimonials as $testimonial){
            $vars['testimonials'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_wir/tpl/testimonial.tpl'))->SERVERPATH(), $testimonial);}
        //team
        $vars['team'] = '';
        $team = array(  array(  'name' => 'Marius Krüger', 'text' => 'Mädchen für alles<br>Initiator', 'img' => './files/wir/marius_krueger.jpg',
                                'links' => array(   array('icon' => 'fa-facebook', 'url' => 'https://www.facebook.com/kruegermarius'))),
                        array(  'name' => 'Dr. Annika Götz', 'text' => 'Kommunikatorin<br>Öffentlichkeitsarbeit', 'img' => './files/wir/annika_goetz.jpg',
                                'links' => array(   array('icon' => 'fa-linkedin', 'url' => 'https://www.linkedin.com/in/annikagoetz'))),
                        array(  'name' => 'Julia Suciu', 'text' => 'Quotencoach<br>Öffentlichkeitsarbeit', 'img' => './files/wir/julia_suciu.jpg',
                                'links' => array(   array('icon' => 'fa-facebook', 'url' => 'https://www.facebook.com/julia.suciu'),
                                                    array('icon' => 'fa-instagram', 'url' => 'https://www.instagram.com/mindset_architect/'))),
                        array(  'name' => 'Ulf Gebhardt', 'text' => '笑い男<br>Web-Entwicklung', 'img' => './files/wir/ulf_gebhardt.jpg',
                                'links' => array(   array('icon' => 'fa-globe', 'url' => 'https://www.webcraft-media.de/#!ulf_gebhardt'))),
                        array(  'name' => 'Alexander Friedland', 'text' => 'Bastler<br>Web-Entwicklung', 'img' => './files/wir/alexander_friedland.jpg',
                                'links' => array()),
                        array(  'name' => 'Magnus Rembold', 'text' => 'Teamgeist<br>UX & Software Architektur', 'img' => './files/wir/magnus_rembold.jpg',
                                'links' => array(   array('icon' => 'fa-twitter', 'url' => 'https://twitter.com/magnusmunter'),
                                                    array('icon' => 'fa-xing', 'url' => 'https://www.xing.com/profile/Magnus_Rembold'))),
                        array(  'name' => 'Du', 'text' => '... kannst dabei sein<br>und mithelfen', 'img' => './files/wir/userdefault.jpg',
                                'links' => array(   array('icon' => 'fa-envelope', 'url' => '#!help'))));
        foreach($team as $member){
            $links = $member['links'];
            $member['links'] = '';
            foreach($links as $link){
                $member['links'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_wir/tpl/team_link.tpl'))->SERVERPATH(), $link);}
            $vars['team'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_wir/tpl/team_member.tpl'))->SERVERPATH(), $member);}
        
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_wir/tpl/default_wir.tpl'))->SERVERPATH(), $vars);
    }
}