<?php
class default_faq implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_faq');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_faq');}
    public static function js(){
        return array();}//   new PPAGE('default_faq/js/default_faq.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_faq/css/default_faq.css'));}
    public function html(){
        $vars = array();
        $vars['questions'] = '';
        $vars['in_css'] = 'transform: rotate(180deg);';
        $vars['in'] = 'show';
        $faqs = array(  array(  'question'  =>  'Gebt ihr meine Daten an Dritte weiter?',
                                'answer'    =>  'Die Betreiber der App DEMOCRACY nehmen den Schutz Deiner persönlichen Daten sehr ernst.<br>
                                                Unserer Meinung nach sind Nutzerdaten gerade keine handelbaren Wirtschaftsgüter, sondern im Sinne des Grundgesetzes zu schützen. Deshalb behandeln wir Deine personenbezogenen wie Abstimmungs-Daten vertraulich entsprechend den gesetzlichen Datenschutzrichtlinien und geben sie selbstverständlich nicht an Dritte weiter.<br>
                                                Damit Du Dich bei der Nutzung unserer App sicher fühlst, informieren wir Dich <a href="#!datenschutz">hier</a> zusätzlich zu den gesetzlichen Bestimmungen darüber, welche Daten wir warum erheben und wie wir diese verarbeiten und nutzen.<br>
                                                Unser Konzept zur Aufrechterhaltung des Abstimmungs- bzw. Wahlgeheimnis innerhalb der App DEMOCRACY kannst du hier nachlesen: <a href="https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität" target="_blank">https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität</a>.',
                                'category'  =>  'datenschutz'),
                        array(  'question'  =>  'Wie stellt ihr meine Stimmanonymität sicher?',
                                'answer'    =>  'Wahlgeheimnis bedeutet, dass während und nach einer Wahl keine Information bekannt werden darf, die darauf schließen lässt, was ein Wähler gewählt hat. Im Konkreten geht es also um die Trennung von Person und Stimme in Urnenbuch und Auszählung. Die Aufrechterhaltung dieses Abstimmungs- bzw. Wahlgeheimnis ist zentraler Bestandteil der DNA der DEMOCRACY App.<br>
                                                <br>
                                                Unser Konzept sieht dafür vor, jede Deiner Abstimmungsentscheidungen (Ja, Enthaltung, Nein als Stimme) von Deinen personenbezogenen Identifikationsdaten ( – dem Urnenbuch) zu trennen. Technisch lösen wir das ganze durch eine sogenannte serverseitige Profiling-Daten-Vermeidung. Praktisch wird dabei eine Quittung Deiner Abstimmungsentscheidung lediglich lokal auf Deinem Handy gespeichert, während Ihre Stimme serverseitig von Anfang an nur akkumuliert gespeichert wird.<br>
                                                <br>
                                                Deine Stimmnonymität stellen wir also sicher, indem
                                                <ul>
                                                <li>wir Deine Stimme serverseitig nur akkumuliert speichern (für Dich besteht dennoch die Möglichkeit eine Quittung über Deine Stimme auf Deinem Handy unakkumuliert zu speichern)</li>
                                                <li>wir keinen Servertraffic loggen</li>
                                                <li>und wir kein Datum zu Deiner Stimmabgabe speichern.</li>
                                                </ul>
                                                Dieses Verfahren führt, und das sei der Vollständigkeit halber gesagt, in Grenzfällen zu Deanonymisierung, nämlich wenn<br>
                                                <ul>
                                                <li>nur Du abgestimmt hast</li>
                                                <li>wenige Nutzer inklusive Dir abgestimmt haben und die Stimme der anderen bekannt ist, so dass Deine Stimme ermittelt werden kann</li>
                                                <li>Der Netzwerkverkehr überwacht wird und das SSL Zertifikat gebrochen wird.</li>
                                                </ul>
                                                Das vollständige Konzept zur Stimmanonymisierung kannst du hier <a href="https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität" target="_blank">https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität</a> nachlesen.',
                                                'category' => 'datenschutz'),
                        array(  'question'  =>  'Sensible Daten und Open Source – geht das?',
                                'answer'    =>  'Open Source bedeutet, dass der Quellcode frei und offen ist. Die Daten der Nutzer sind kein Bestandteil des Quellcodes, sondern der entsprechenden Installation des freien Programms auf einem Server. Insofern ist der unberechtigte Zugriff auf Nutzerdaten durch Dritte durch unsere Open-Source-Eigenschaft nicht angetastet. Überdies wird jede Änderung im Code, bevor sie in den Betrieb übergeht, von uns geprüft. Somit wird der hohe Anspruch an guter Programmierung gewahrt und auch verhindert, dass dubioser Code einfließen kann.',
                                'category'  =>  'datenschutz'),
                        array(  'question'  =>  'Auf welchen Plattformen kann ich teilnehmen?',
                                'answer'    =>  'An der Beta teilnehmen kannst Du via Smartphone mit<br>
                                                iOS- oder Android-Betriebssystem',
                                'category'  =>  'beta'),
                        array(  'question'  =>  'Wie kann ich die Beta installieren?',
                                'answer'    =>  'Wir verwenden während des Prototyping die Store-eigenen Testkanäle des App- sowie Google PlayStore.<br>
                                                Über dieses <a href="./invite/02C67F34">Bewerbungsformular</a> kannst Du uns Deine Apple-ID bzw. Google-Play-Store-Email-Adresse sowie die Informationen, welche Plattform (iOS/Android) Du benutzt mitteilen, sodass wir Dich auf die jeweilige Test-Liste setzen können.<br>
                                                <br>
                                                Nach entsprechender Freischaltung bekommst Du von uns einen Zugangscode sowie Deine Plattform-spezifische Installationsanleitung per Mail übersendet.',
                                'category'  =>  'beta'),
                        array(  'question'  =>  'Welche Funktionen sind in der BETA enthalten?',
                                'answer'    =>  'DEMOCRACY bedeutet 1. Live Daten aus dem Bundestag, 2. eigene AppStimmung durch Dich als Nutzer und 3. eine crowdmodierte Diskussion zu den Anträgen. Im Prototyp realisiert sind davon die Live-Anbindung an die Bundestagsdaten sowie die Nutzerabstimmung. Die vollständige <a href="#!engineering">Funktionsübersicht</a> kannst Du dieser Tabelle entnehmen.',
                                'category'  =>  'beta'),
                        array(  'question'  =>  'Wann kommt der Public MVP?',
                                'answer'    =>  'Wir möchten so schnell wie möglich mit DEMOCRACY online gehen – wenn es nach uns geht, noch diesen Herbst. Bis zu diesem Zeitpunkt müssen allerdings noch einige Meilensteine erreicht werden. Dafür brauchen wir Deine Hilfe  – Gestalte DEMOCRACY mit Deiner Spende oder Deinen Fähigkeiten. Fragen zum Stand der Entwicklung kannst Du gerne an <a href="mailto:prototyping@democracy-deutschland.de">prototyping@democracy-deutschland.de</a> adressieren. Bis zum Public MVP werden Dir Erweiterungen regelmäßig als Beta-Updates präsentiert.',
                                'category'  =>  'mvp'),
                        array(  'question'  =>  'Wie wird DEMOCRACY finanziert?',
                                'answer'    =>  'DEMOCRACY ist eine gemeinnützige App, das heißt von Menschen, für Menschen, um unsere Politik transparenter und bürgernaher zu machen. Da wir DEMOCRACY als eine werbefreie Plattform ohne Datenverkauf realisieren wollen, kann unser Joker nur die gemeinschaftliche Finanzierung sein. Insofern wird DEMOCRACY, um die laufenden Kosten zu decken, auch nach dem initialen Crowdfunding durch Spenden finanziert.',
                                'category'  =>  'finanzen'),
                        array(  'question'  =>  'Warum braucht ihr Geld?',
                                'answer'    =>  'Während die Konzeption der Plattform bislang hauptsächlich von freiwilliger Arbeit gestemmt wurde, hat der Crowdfundingerfolg DEMOCRACY Deutschland e.V. das Privileg verschafft, 3 Vollzeitangestellte für 6 Monate beschäftigen zu können, die ihre gesamte Zeit und Energie dem Projekt widmen  – das hat die Entwicklung von DEMOCRACY extrem vorangebracht.<br>
                                                <br>
                                                Wenn es nach uns geht, möchten wir so schnell wie möglich mit dem DEMOCRACY MVP an den Start gehen, allerdings müssen bis dahin noch einige Meilensteine in der Entwicklung erreicht werden. Und dafür brauchen wir Deine finanzielle Unterstützung, um das Nötige zum Leben zu erhalten.',
                                'category'  =>  'finanzen'),
                        array(  'question'  =>  'Wie ist Bankverbindung von DEMOCRACY Deutschland e.V.?',
                                'answer'    =>  'Kontoinhaber: DEMOCRACY Deutschland e.V.<br>
                                                IBAN: DE33 5003 1000 1049 7560 00<br>
                                                BIC: TRODDEF1',
                                'category'  =>  'finanzen'),
        );
        $i = 0;
        foreach($faqs as $faq){
            $faq['in'] = $i == 0 ? 'show' : '';
            $faq['in_css'] = $i == 0 ? 'transform: rotate(180deg);' : '';
            $faq['n'] = $i;
            $vars['questions'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_faq/tpl/question.tpl'))->SERVERPATH(), $faq);
            $i++;
        }
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'),$faqs);
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_faq/tpl/default_faq.tpl'))->SERVERPATH(), $vars);
    }
}