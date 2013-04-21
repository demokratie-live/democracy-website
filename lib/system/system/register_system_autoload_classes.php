<?php
$autoload = \SYSTEM\autoload::getInstance();

$autoload->registerFolder(dirname(__FILE__),'SYSTEM');

$autoload->registerFolder(dirname(__FILE__).'/../log/result','SYSTEM\LOG');
$autoload->registerFolder(dirname(__FILE__).'/../log','SYSTEM\LOG');
$autoload->registerFolder(dirname(__FILE__).'/../log/exceptions','SYSTEM\LOG');
$autoload->registerFolder(dirname(__FILE__).'/../log/error_handler','SYSTEM\LOG');

$autoload->registerFolder(dirname(__FILE__).'/../api','SYSTEM\API');

$autoload->registerFolder(dirname(__FILE__).'/../page','SYSTEM\PAGE');

$autoload->registerFolder(dirname(__FILE__).'/../db','SYSTEM\DB');
$autoload->registerFolder(dirname(__FILE__).'/../db/dbinfo','SYSTEM\DB');
$autoload->registerFolder(dirname(__FILE__).'/../db/connection','SYSTEM\DB');
$autoload->registerFolder(dirname(__FILE__).'/../db/result','SYSTEM\DB');

$autoload->registerFolder(dirname(__FILE__).'/../security','SYSTEM\SECURITY');

$autoload->registerFolder(dirname(__FILE__).'/../cache','SYSTEM\CACHE');

$autoload->registerFolder(dirname(__FILE__).'/../sai','SYSTEM\SAI');