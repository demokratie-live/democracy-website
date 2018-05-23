<?php
class default_donate implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_donate');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_donate');}
    public static function js(){
        return array();}//   new PPAGE('default_donate/js/default_donate.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_donate/css/default_donate.css'));}
    public static function donate_box(){
        $vars = \SYSTEM\PAGE\text::tag('donation');
        //Donations
        /*$vars['donation_paten'] = 9;
        $vars['donation_value'] = 61;
        $vars['donation_date'] = '14.05.2018 * 18:45 Uhr';*/
        $vars['donation_percentage'] = round($vars['donation_value']/100,0);
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/donate_box.tpl'))->SERVERPATH(), $vars);
    }
    public function html(){
        $vars = array();
        //donate box
        $vars['donate_box'] = self::donate_box();
        //team
        $vars['team'] = '';
        $team = array(  array(  'name' => 'Marius Krüger', 'text' => 'Mädchen für alles<br>Initiator & UI', 'img' => './files/wir/marius_krueger.jpg', 'aktiv' => 'lightgreen',
                                'links' => array(   array('icon' => 'fa-facebook', 'url' => 'https://www.facebook.com/kruegermarius'))),
                        array(  'name' => 'Manuel Ruck', 'text' => 'React-Experte<br>Baut den Code für die App', 'img' => './files/wir/manuel_ruck.jpg', 'aktiv' => 'lightgreen',
                                'links' => array(   array('icon' => 'fa-xing', 'url' => 'https://www.xing.com/profile/Manuel_Ruck'))),
                        array(  'name' => 'Ulf Gebhardt', 'text' => '笑い男<br>Entwicklung & Planung', 'img' => './files/wir/ulf_gebhardt.jpg', 'aktiv' => 'lightgreen',
                                'links' => array(   array('icon' => 'fa-globe', 'url' => 'https://www.webcraft-media.de/#!ulf_gebhardt'))));
        foreach($team as $member){
            $links = $member['links'];
            $member['links'] = '';
            foreach($links as $link){
                $member['links'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/team_link.tpl'))->SERVERPATH(), $link);}
            $vars['team'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/team_member.tpl'))->SERVERPATH(), $member);}
        //icons
        $vars['icons'] = '';
        $icons = array( array('icon' => 'gear', 'text' => 'GEMEINSCHAFTLICH', 'subtext' => 'Solidarische Kooperation'),
                        array('icon' => 'heart2', 'text' => 'ALLGEMEINNÜTZIG', 'subtext' => 'Zum Vorteil Aller'),
                        array('icon' => 'ledger', 'text' => 'FAIR', 'subtext' => 'mit gleichen Rechten für Alle'),
                        array('icon' => 'magnify', 'text' => 'ÖFFENTLICH', 'subtext' => 'Open Source, Open Book, Open Data'),
                        array('icon' => 'dialog', 'text' => 'DIALOGFÖRDERND', 'subtext' => 'bemüht Trennung zu überwinden'),
                        array('icon' => 'shield', 'text' => 'NICHT PROFITORIENTIERT', 'subtext' => 'kein Datenverkauf, keine Werbung'));
        $i = 1;
        foreach($icons as $icon){
            $vars['icons'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/icon.tpl'))->SERVERPATH(), $icon);
            if($i % 2 == 0){
                $vars['icons'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/icon_space.tpl'))->SERVERPATH());}
            $i++;
        }

        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/default_donate.tpl'))->SERVERPATH(), $vars);
    }
}