<?php

$autoload = SYSTEM\autoload::getInstance();

$autoload->registerFolder(dirname(__FILE__).'/db/','DBD');
$autoload->registerFolder(dirname(__FILE__).'/tbl/system/','DBD\SYSTEM');
//$autoload->registerFolder(dirname(__FILE__).'/tbl/definitions/','DBD\DEFINITIONS');
//$autoload->registerFolder(dirname(__FILE__).'/tbl/data/','DBD\DATA');
//$autoload->registerFolder(dirname(__FILE__).'/tbl/data_processed/','DBD\DATA_PROCESSED');