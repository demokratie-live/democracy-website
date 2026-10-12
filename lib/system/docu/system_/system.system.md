####autoload

  Komuniktationsprobleme der Neuzeit ;-)

  * E: Entwickler
  * A: Admin

  * ##### Lösung

  * ##### *  Lösung Ignorieren

-----

  * E: 23:36:01: Hi A
  * E: 23:36:13: ich habe noch mal eine Frage an dich wegen Project21
  * E: 23:36:32: ich habe es ja soweit hinbekommen die Visualisierung auf unser Handy zu bekommen
  * E: 23:36:58: ich dachte mir nun, das ich jetzt am Besten einen bestehenden Algorithmus kopiere - in umbenenne und dann daran unsere Modifikationen vornehme
  * E: 23:37:20: aber leider scheint das mit dem kopieren und hinzufügen in der api.php nicht getan zu sein
  * E: 23:37:33: muss ich dabei sonst noch etwas beachten ?
  * E: 23:37:52: weil derzeit bekomme ich in der autoload.php unter system/system

  - A: 23:37:54: in der tabelle system.api müssen zeilen hinzugefügt werden

  * E: 23:38:01: den fehler class not found

  - A: 23:38:09: dann fehlt wohl ne klasse^^

  * E: 23:38:48: mmh ich will keine neuen parameter einfügen wenn du das meinst
  * E: 23:38:54: leidiglich z.b. statt heatmapRect
  * E: 23:39:02: heatMapRectCoverage callen z.B.

  - ##### A: 23:39:17: die klasse muss so heißen wie die datei
  - A: 23:39:23: und geautoloaded werden

  * E: 23:40:22: mmh ich habe jetzt im ordner preprocessing in die autload.inc.php eine zeile hinzugefügt gehabt
  * E: 23:40:28: das scheint dann aber wohl nicht die richtige zu sein 
  * E: 23:40:35: für die visualisierungs algorithmen
  * ##### * E: 23:40:42: weil Datei und Ordner heißen schon gleich

  * ##### * E: 23:40:45: das habe ich berücksichtigt

  - A: 23:41:01: dann ist der ordner in der die klasse liegt wohl nicht registriert

  * E: 23:42:28: mmh das stimmt
  * E: 23:42:39: aber in welcher autload.inc.php mache ich das bekannt ?

  - A: 23:42:48: in der nächsten^^
  - A: 23:42:55: die die am nächsten dran liegt
  - A: 23:42:59: aber prinzipiell egal

  * ##### * E: 23:43:20: mmh dann hätte ich das aber richtig gemacht

  - A: 23:43:39: kp er sagt dir ja class not found
  - A: 23:43:47: sprich er kann die klasse nicht laden

  * E: 23:43:52: korrekt
  * E: 23:43:59: den ordner scheint er aber zu finden

  - A: 23:44:26: sonst schmiert der autoload mit nem fehler ab, ja
  - A: 23:44:47: kp -> vll ist es einfach nicht hochgeladen, großkleinschreibeung...

  * E: 23:45:05: mmh
  * E: 23:45:07: ich schau mal 
  * E: 23:45:10: vielleicht mal alles klein schreiben
  * E: 23:47:02: mmh nein
  * E: 23:47:06: auch das hat nichts gebracht

  - A: 23:52:23: kp
  - A: 23:52:29: sonst fällt mir nix ein

  * E: 23:52:50: aber in der Datenbank muss dafür nichts geändert werden oder ?

  - A: 23:52:58: nö

  * E: 23:52:58: die Parameter die ich übergebe sollen ja die selben bleiben
  * E: 23:53:01: kk

  - A: 23:53:06: hats n namespace?

  * E: 23:53:09: das ist schon mal gut zu wissen

  - A: 23:53:13: den musst du beim autloaden angeben

  * E: 23:53:20: mmh wie meinst du das ?

  - A: 23:53:27: namespace SYSTEM/LOG
  - A: 23:53:41: dann musste beim autoload SYSTEM/LOG mit angeben

  * E: 23:54:20: in der algorithmen klasse selbst nicht nein

  - A: 23:54:31: dann müsste es passen

  * E: 23:54:59: mmh seltsam seltsam
  * E: 23:55:06: ich stelle ich wahrscheinlich nur zu blöd an ^^

  - A: 23:55:16: xD ich hab keinen plan was du da schaffst
  - ##### A: 23:55:27: aber prüfe nochmal genau groß und kleinschreibung

  * E: 23:55:30: eigentlich sollte es doch nicht so kompliziert sein

  - ##### A: 23:55:31: KlassenName.php

  * E: 23:55:40: den ordner kopiern umbenennen
  * E: 23:55:41: ne is eientlich ziemlich simpel

  - A: 23:56:00: der pfad im autoload haste angepasst?!^^

  * E: 23:56:23: ja da hab ich noch einen hinzugefügt

  - A: 23:56:36: ajo
  - A: 23:56:46: wenn er den ordner net findet schreit er auch

  * E: 23:56:54: genau
  * E: 23:56:59: das hab ich ja auch ausprobiert
  * E: 23:57:02: durch umbennenn vom ordner
  * E: 23:57:07: den findet er also scheints

  - A: 23:57:12: vll ist es beim aufruf falsch geschrieben?

  * E: 23:59:06: /home/mona-srv/da-sense/test2/system/system/autoload.php
  * E: 23:59:11: in der datei schmiert das system dann ab
  * E: 23:59:30: aber das hilft mir auch nicht so richtig weiter

  - A: 23:59:32: joa mit der message class not found?

  * E: 23:59:37: exakt

  - A: 23:59:41: geb dir mal den klassennamen aus
  - A: 23:59:50: und schau obs der gleiche ist

  * E: 00:00:41:   public static function autoload($class){        
        $classns = self::getClassNamespaceFromClass($class);
        
        if(!self::autoload_($classns[0],$classns[1]) || (!class_exists($class) && !interface_exists($class))){
            throw new \SYSTEM\LOG\ERROR("Class not found: ".$class);}
        
        return true;
    }
  * E: 00:00:48: mmh was davon ist der klassenname ? :D 
  * E: 00:00:55: classns[0] ?

  - A: 00:00:57: throw new \SYSTEM\LOG\ERROR("Class not found: ".$class);}
  - A: 00:01:05: sollte dir den klassennamen schon sagen

  * E: 00:01:17: Class not found: s_algo

  - A: 00:01:22: ajo

  * E: 00:01:23: habs mal auf 1 buchstaben reduziert

  - ##### A: 00:01:26: da haste dein problem

  * E: 00:01:31: um schreibfehler auszuschließen
  * E: 00:01:33: mmh ?

  - ##### A: 00:01:38:  s_algo

  - ##### A: 00:01:45: so soll die klasse heißen

  - ##### A: 00:01:56: s_algo.php

  * ##### * E: 00:01:58: ja so heißt sie
  * E: 00:02:03: und der ornder heißt auch s_algo

  - ##### A: 00:02:11: und die klasse heißt auch s_algo?

  * E: 00:02:41: oh man - ja ich bin echt zu blöd :(

  - A: 00:03:00: das war das erste, zweite und dritte was ich dich gefragt hab

  * E: 00:03:05: zu viele namen :/

  - ##### A: 00:03:07: ob die klasse wie die datei heißt

  * E: 00:03:12: tut mir leid

  - A: 00:03:15: np

  * E: 00:03:30: ich habe dateinamen als ordnernamen fehl interpretiert

  - A: 00:03:46: kk^^

  * E: 00:03:50: jetzt gehts - besten Dank. 
  * E: 00:04:04: bin mit blödheit geschlagen echt 
  * E: 00:04:53: danke - dann kann ich nämlich jetzt so nach herzenslust modifizieren
  * E: 00:04:57: ohne das es was macht

  - A: 00:06:47: super, wenns läuft ;-)