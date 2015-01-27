QQ Objects
----------

Referenz: <https://github.com/ulfgebhardt/system/tree/master/db/qq>

QQ-Objekte können von zwei verschiedenen Klassen erben:

  - QQ (quick query)
  - QP (quick prepare)

Class Definitions:

    class MY_QUERY_QQ extends \SYSTEM\DB\QQ {}
    class MY_QUERY_QP extends \SYSTEM\DB\QP {}


Je nachdem was du benutzt kannst du in deinem SQL String $1,$2,$3...
benutzen oder nicht (prepare hat $1..., query hat das nicht).
Folglich mache alle Querys ohne Paramter als QQ, alle mit als QP Klasse!

Der Unterschied der Klassen ist einfach, dass bei allen Funktionen von QP
ein array mit den Parametern übergeben werden muss.

Es gibt 4 Funktionen

  - QQ (selber über die daten loopen)
  - Q1 (geb mir genau eine zeile)
  - QA (geb mir alle Zeilen)
  - QI (Insert/Delete... -> returns true)

Q1
--

    MY_QUERY_QQ::Q1()
    -> array(feld1 => value, feld2 => value...)

    MY_QUERY_QP::Q1(array(param1,param2,...))
    -> array(feld1 => value, feld2 => value...)

QA
--

    MY_QUERY_QQ::QA()
    -> array(array(feld1 => value, feld2 => value...), array(feld1 => ...))
    MY_QUERY_QP::QA(array(param1,param2,...))
    -> array(array(feld1 => value, feld2 => value...), array(feld1 => ...))

QI
--

    MY_QUERY_QQ::QI()
    -> true/false
    MY_QUERY_QP::QI(array(param1,param2,...))
    -> true/false

QQ
--

    $result = array();
    $rows = MY_QUERY_QQ::QQ();
    while($row = $rows->next()){ //1. über alle loopen
            $row[field1] = 5;
            $result[] = $row;
    }

    -> QQ Benutzen, um das Datenbank Ergebnis auszuschmücken ohne zweimal über
    das ergebniss zu loopen:

Wrong
-----
    $result = array();
    $rows = MY_QUERY_QQ::QA(); // 1. über alle loppen
    foreach($rows as $row){ // 2. über alle loopen
            $row[field1] = 5;
            $result[] = $row;
    }