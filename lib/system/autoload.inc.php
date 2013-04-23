<?php

//includ autoloadclass
require_once dirname(__FILE__).'/system/path.php';
require_once dirname(__FILE__).'/system/autoload.php';

//autoload hook -> refers to autoload class singleton
function __autoload_system($class_name) {
    return system\autoload::getInstance()->autoload($class_name);
}

//Register autoload
spl_autoload_register('__autoload_system');

//Register system classes
require_once dirname(__FILE__).'/system/register_system_autoload_classes.php';
require_once dirname(__FILE__).'/dbd/autoload.inc.php';