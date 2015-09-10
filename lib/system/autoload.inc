<?php
//include autoload class
require_once dirname(__FILE__).'/system/path.php';
require_once dirname(__FILE__).'/system/autoload.php';

//Register autoload
\SYSTEM\autoload::register_autoload();

//Autoload submodules
require_once dirname(__FILE__).'/system/autoload.inc';
require_once dirname(__FILE__).'/db/autoload.inc';
require_once dirname(__FILE__).'/log/autoload.inc';
require_once dirname(__FILE__).'/api/autoload.inc';
require_once dirname(__FILE__).'/page/autoload.inc';
require_once dirname(__FILE__).'/sql/autoload.inc';
require_once dirname(__FILE__).'/security/autoload.inc';
require_once dirname(__FILE__).'/config/autoload.inc';
require_once dirname(__FILE__).'/cache/autoload.inc';
require_once dirname(__FILE__).'/docu/autoload.inc';
require_once dirname(__FILE__).'/files/autoload.inc';
require_once dirname(__FILE__).'/cron/autoload.inc';
require_once dirname(__FILE__).'/sai/autoload.inc';
require_once dirname(__FILE__).'/html/autoload.inc';
require_once dirname(__FILE__).'/lib/autoload.inc';