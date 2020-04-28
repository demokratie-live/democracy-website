<?php
class default_donate implements SYSTEM\PAGE\Page
{

    const DONATION_TYPE_HEAD = 0;
    const DONATION_TYPE_DATA = 1;

    public static function title()
    {
        return \SYSTEM\PAGE\text::get('title_donate');
    }
    public static function meta()
    {
        return \SYSTEM\PAGE\text::tag('meta_donate');
    }
    public static function js()
    {
        return array();
    } //   new PPAGE('default_donate/js/default_donate.js'));}
    public static function css()
    {
        return array();
    } //   new PPAGE('default_donate/css/default_donate.css'));}
    public static function donate_details()
    {
        $vars = \SYSTEM\PAGE\text::tag('donation');
        $vars['donation_percentage'] = round($vars['donation_value'] / $vars['donation_value_goal'] * 100, 0);
        $vars['donation_value_goal'] = number_format($vars['donation_value_goal'], 0, ',', '.');
        $vars['donation_value'] = number_format($vars['donation_value'], 0, ',', '.');

        $vars['donation_data'] = '';
        $res = \SQL\DONATE_SELECT::QQ();
        while ($row = $res->next()) {
            $row['percentage'] = $row['type'] == self::DONATION_TYPE_DATA ? round($row['value'] / $row['max'] * 100, 0) : 0;
            $row['max'] = number_format($row['max'], 0, ',', '.');
            $vars['donation_data'] .= $row['type'] == self::DONATION_TYPE_HEAD ?
                \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/donate_details_head.tpl'))->SERVERPATH(), $row) :
                \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/donate_details_data.tpl'))->SERVERPATH(), $row);
        }

        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/donate_details.tpl'))->SERVERPATH(), $vars);
    }
    public static function donate_box()
    {
        $vars = \SYSTEM\PAGE\text::tag('donation');
        //Donations
        $vars['donation_percentage'] = round($vars['donation_value'] / $vars['donation_value_goal'] * 100, 0);
        $vars['donation_paten_goal'] = number_format($vars['donation_paten_goal'], 0, ',', '.');
        $vars['donation_value_goal'] = number_format($vars['donation_value_goal'], 0, ',', '.');
        $vars['donation_value'] = number_format($vars['donation_value'], 0, ',', '.');
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/donate_box.tpl'))->SERVERPATH(), $vars);
    }
    public function html()
    {
        $vars = array();
        //donate box
        $vars['donate_box'] = self::donate_box();
        $vars['donate_details'] = self::donate_details();
        //team
        $vars['team'] = '';
        $team = array(
            array(
                'name' => 'Marius Krüger',
                'text' => 'Mädchen für alles<br>Initiator & UI',
                'img' => './files/wir/Marius1.png',
                'img_hover' => './files/wir/Marius2.png',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:m.krueger@democracy-deutschland.de'),
                    array('icon' => 'fa fa-phone',   'url' => 'tel:+4917647040213'),
                    array('icon' => 'fab fa-facebook', 'url' => 'https://www.facebook.com/kruegermarius')
                )
            ),
            array(
                'name' => 'Manuel Ruck',
                'text' => 'React-Experte<br>Baut den Code für die App',
                'img' => './files/wir/Manu1.png',
                'img_hover' => './files/wir/Manu2.png',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:m.ruck@democracy-deutschland.de'),
                    array('icon' => 'fab fa-xing', 'url' => 'https://www.xing.com/profile/Manuel_Ruck')
                )
            ),
            array(
                'name' => 'DU!',
                'text' => 'Marketingstratege /<br/>React/NodeJS-Developerin',
                'img' => './files/wir/du.png',
                'img_hover' => './files/wir/du.png',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:contact@democracy-deutschland.de'),
                )
            )
        );
        foreach ($team as $member) {
            $links = $member['links'];
            $member['links'] = '';
            foreach ($links as $link) {
                $member['links'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/team_link.tpl'))->SERVERPATH(), $link);
            }
            $vars['team'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/team_member.tpl'))->SERVERPATH(), $member);
        }
        //icons
        $vars['icons'] = '';
        $icons = array(
            array('icon' => 'gear', 'text' => 'GEMEINSCHAFTLICH', 'subtext' => 'Solidarische Kooperation'),
            array('icon' => 'heart2', 'text' => 'ALLGEMEINNÜTZIG', 'subtext' => 'Zum Vorteil Aller'),
            array('icon' => 'ledger', 'text' => 'FAIR', 'subtext' => 'mit gleichen Rechten für Alle'),
            array('icon' => 'magnify', 'text' => 'ÖFFENTLICH', 'subtext' => 'Open Source, Open Book, Open Data'),
            array('icon' => 'dialog', 'text' => 'DIALOGFÖRDERND', 'subtext' => 'bemüht Trennung zu überwinden'),
            array('icon' => 'shield', 'text' => 'NICHT PROFITORIENTIERT', 'subtext' => 'kein Datenverkauf, keine Werbung')
        );
        $i = 1;
        foreach ($icons as $icon) {
            $vars['icons'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/icon.tpl'))->SERVERPATH(), $icon);
            if ($i % 2 == 0) {
                $vars['icons'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/icon_space.tpl'))->SERVERPATH());
            }
            $i++;
        }

        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_donate/tpl/default_donate.tpl'))->SERVERPATH(), $vars);
    }
}
