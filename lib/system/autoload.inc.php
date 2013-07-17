<?php
//include autoloadclass
require_once dirname(__FILE__).'/system/path.php';
require_once dirname(__FILE__).'/system/autoload.php';

//autoload hook -> refers to autoload class singleton
function __autoload_system($class_name) {
    return system\autoload::getInstance()->autoload($class_name);
}

//Register autoload
spl_autoload_register('__autoload_system');

//Register system classes
$autoload = \SYSTEM\autoload::getInstance();
$autoload->registerFolder(dirname(__FILE__).'/system','SYSTEM');

$autoload->registerFolder(dirname(__FILE__).'/log/result','SYSTEM\LOG');
$autoload->registerFolder(dirname(__FILE__).'/log','SYSTEM\LOG');
$autoload->registerFolder(dirname(__FILE__).'/log/exceptions','SYSTEM\LOG');
$autoload->registerFolder(dirname(__FILE__).'/log/error_handler','SYSTEM\LOG');

$autoload->registerFolder(dirname(__FILE__).'/api','SYSTEM\API');
$autoload->registerFolder(dirname(__FILE__).'/page','SYSTEM\PAGE');

$autoload->registerFolder(dirname(__FILE__).'/dbd/tbl/','SYSTEM\DBD');
$autoload->registerFolder(dirname(__FILE__).'/db','SYSTEM\DB');
$autoload->registerFolder(dirname(__FILE__).'/db/dbinfo','SYSTEM\DB');
$autoload->registerFolder(dirname(__FILE__).'/db/connection','SYSTEM\DB');
$autoload->registerFolder(dirname(__FILE__).'/db/result','SYSTEM\DB');

$autoload->registerFolder(dirname(__FILE__).'/security','SYSTEM\SECURITY');

$autoload->registerFolder(dirname(__FILE__).'/config','SYSTEM\CONFIG');

$autoload->registerFolder(dirname(__FILE__).'/cache','SYSTEM\CACHE');

$autoload->registerFolder(dirname(__FILE__).'/sai','SYSTEM\SAI');