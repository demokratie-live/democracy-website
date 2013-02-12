<?php

require_once 'saigui.php';

//TODO database
$sai = new \SYSTEM\SAI\saigui(/*new \DBD\system()*/ new \DBD\dasenseuser());

echo $sai->html();