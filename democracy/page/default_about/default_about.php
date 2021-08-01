<?php
class default_about implements SYSTEM\PAGE\Page
{
    public static function title()
    {
        return \SYSTEM\PAGE\text::get('title_about');
    }
    public static function meta()
    {
        return \SYSTEM\PAGE\text::tag('meta_about');
    }
    public static function js()
    {
        return array();
    } //   new PPAGE('default_about/js/default_about.js'));}
    public static function css()
    {
        return array();
    } //   new PPAGE('default_about/css/default_about.css'));}

    public function html()
    {
        $vars = array();
        //team
        $vars['team'] = '';
        $team = array(
            array(
                'name' => 'Marius Krüger',
                'text' => 'Gründer<br>Organisation & Produkt',
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
                'text' => 'Softwareentwickler<br>Programmierer des Projektes',
                'img' => './files/wir/Manu1.png',
                'img_hover' => './files/wir/Manu2.png',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:m.ruck@democracy-deutschland.de'),
                    array('icon' => 'fab fa-xing', 'url' => 'https://www.xing.com/profile/Manuel_Ruck')
                )
            ),
            array(
                'name' => 'Katrin Engler',
                'text' => 'Sprecherin<br>Pressearbeit & PR',
                'img' => './files/wir/Katy.jpg',
                'img_hover' => '',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:k.engler@democracy-deutschland.de'),
                    // array('icon' => 'fab fa-xing', 'url' => 'https://www.xing.com/profile/Manuel_Ruck')
                )
            ),
            array(
                'name' => 'Fabian B.',
                'text' => 'Grafiker<br>Contentgestaltung',
                'img' => './files/wir/ohneBild.png',
                'img_hover' => '',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:f.boenig@democracy-deutschland.de'),
                    // array('icon' => 'fab fa-xing', 'url' => 'https://www.xing.com/profile/Manuel_Ruck')
                )
            ),
            array(
                'name' => 'Jascha Fabian',
                'text' => 'Markenstratege<br>Kampagnenplanung',
                'img' => './files/wir/Jascha.jpg',
                'img_hover' => '',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:j.fabian@democracy-deutschland.de'),
                )
            ),
            array(
                'name' => 'Elisa Menne',
                'text' => 'Administration<br>Kommunikation & Buchhaltung',
                'img' => './files/wir/Elisa.jpg',
                'img_hover' => '',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:e.menne@democracy-deutschland.de'),
                )
            ),
            array(
                'name' => 'Robert Schäfer',
                'text' => 'Softwareentwickler<br>Bundestagsschnittstelle',
                'img' => './files/wir/Robert.png',
                'img_hover' => '',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:r.schaefer@democracy-deutschland.de'),
                )
            ),
            // array(
            //     'name' => 'DU!',
            //     'text' => 'Marketingstratege /<br/>React/NodeJS-Developerin',
            //     'img' => './files/wir/ohneBild.png',
            //     'img_hover' => './files/wir/ohneBild.png',
            //     'links' => array(
            //         array('icon' => 'fa fa-envelope', 'url' => 'mailto:contact@democracy-deutschland.de'),
            //     )
            // )
        );
        foreach ($team as $member) {
            $links = $member['links'];
            $member['links'] = '';
            foreach ($links as $link) {
                $member['links'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_about/tpl/team_link.tpl'))->SERVERPATH(), $link);
            }
            $vars['team'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_about/tpl/team_member.tpl'))->SERVERPATH(), $member);
        }

        //volunteers
        $vars['volunteers'] = '';
        $volunteers = array(
            array(
                'name' => 'Léon Trothe',
                'text' => 'Praktikantin<br>Social Media Marketing',
                'img' => './files/wir/Leon.png',
                'img_hover' => '',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:l.trothe@democracy-deutschland.de'),
                )
            ),
            array(
                'name' => 'Leyla Niederberger',
                'text' => 'Praktikantin<br>Social Media Marketing',
                'img' => './files/wir/Leyla.png',
                'img_hover' => '',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:l.niederberger@democracy-deutschland.de'),
                )
            ),
            array(
                'name' => 'Timo Sieg',
                'text' => 'Redaktion<br>Newsletter & Blog',
                'img' => './files/wir/Timo.jpg',
                'img_hover' => '',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:t.sieg@democracy-deutschland.de'),
                )
            ),
            array(
                'name' => 'Jasper Bennink',
                'text' => 'Redaktion<br>Blog',
                'img' => './files/wir/Jasper.jpg',
                'img_hover' => '',
                'links' => array(
                    array('icon' => 'fa fa-envelope', 'url' => 'mailto:j.bennink@democracy-deutschland.de'),
                )
            ),
        );
        foreach ($volunteers as $member) {
            $links = $member['links'];
            $member['links'] = '';
            foreach ($links as $link) {
                $member['links'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_about/tpl/team_link.tpl'))->SERVERPATH(), $link);
            }
            $vars['volunteers'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_about/tpl/team_member.tpl'))->SERVERPATH(), $member);
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
            $vars['icons'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_about/tpl/icon.tpl'))->SERVERPATH(), $icon);
            if ($i % 2 == 0) {
                $vars['icons'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_about/tpl/icon_space.tpl'))->SERVERPATH());
            }
            $i++;
        }

        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_about/tpl/default_about.tpl'))->SERVERPATH(), $vars);
    }
}
