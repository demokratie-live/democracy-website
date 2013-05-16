<?php

$autoload = SYSTEM\autoload::getInstance();
$autoload->registerFolder(dirname(__FILE__).'/sai','SYSTEM\SAI');

$autoload->registerFolder(dirname(__FILE__).'/page','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/page/default_page','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/page/login_page','SYSTEM\SAI');

$autoload->registerFolder(dirname(__FILE__).'/modules','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/modules/badge_creator','SYSTEM\SAI');

require_once dirname(__FILE__).'/modules/register_modules.php';