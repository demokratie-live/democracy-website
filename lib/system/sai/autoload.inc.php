<?php

$autoload = SYSTEM\autoload::getInstance();
$autoload->registerFolder(dirname(__FILE__).'/sai','SYSTEM\SAI');

$autoload->registerFolder(dirname(__FILE__).'/page','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/page/default_page','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/page/default_module','SYSTEM\SAI');

$autoload->registerFolder(dirname(__FILE__).'/modules','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/modules/saimod_sys_sai','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/modules/saimod_sys_login','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/modules/saimod_sys_log','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/modules/saimod_sys_security','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/modules/saimod_sys_mod','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/modules/saimod_sys_config','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/modules/saimod_sys_calls','SYSTEM\SAI');
$autoload->registerFolder(dirname(__FILE__).'/modules/saimod_sys_locale','SYSTEM\SAI');

require_once dirname(__FILE__).'/modules/register_modules.php';