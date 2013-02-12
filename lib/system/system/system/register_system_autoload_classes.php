<?php

$autoload = system\autoload::getInstance();

$autoload->registerFolder(dirname(__FILE__),'SYSTEM');
$autoload->registerFolder(dirname(__FILE__).'/../api','SYSTEM\API');
$autoload->registerFolder(dirname(__FILE__).'/../page','SYSTEM\PAGE');
$autoload->registerFolder(dirname(__FILE__).'/../db','SYSTEM\DB');
$autoload->registerFolder(dirname(__FILE__).'/../security','SYSTEM\SECURITY');
$autoload->registerFolder(dirname(__FILE__).'/../sai','SYSTEM\SAI');