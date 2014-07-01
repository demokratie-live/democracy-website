<?php
//include autoloadclass
require_once dirname(__FILE__).'/system/path.php';
require_once dirname(__FILE__).'/system/autoload.php';

//Register autoload
\SYSTEM\autoload::register_autoload();

//Register system classes
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/system','SYSTEM');

require_once dirname(__FILE__).'/log/autoload.inc.php';
require_once dirname(__FILE__).'/api/autoload.inc.php';
require_once dirname(__FILE__).'/page/autoload.inc.php';

require_once dirname(__FILE__).'/db/autoload.inc.php';
require_once dirname(__FILE__).'/dbd/autoload.inc.php';

require_once dirname(__FILE__).'/security/autoload.inc.php';
require_once dirname(__FILE__).'/config/autoload.inc.php';
require_once dirname(__FILE__).'/cache/autoload.inc.php';
require_once dirname(__FILE__).'/cron/autoload.inc.php';
require_once dirname(__FILE__).'/files/autoload.inc.php';
require_once dirname(__FILE__).'/docu/autoload.inc.php';

require_once dirname(__FILE__).'/lib/autoload.inc.php';
require_once dirname(__FILE__).'/sai/autoload.inc.php';