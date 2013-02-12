<?php

$autoload = SYSTEM\autoload::getInstance();

$autoload->registerFolder(dirname(__FILE__).'/db/','DBD');
$autoload->registerFolder(dirname(__FILE__).'/tbl/','DBD');
$autoload->registerFolder(dirname(__FILE__).'/tbl/analysis/','DBD\ANALYSIS');