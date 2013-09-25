<?php
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/sai','SYSTEM\SAI');

SYSTEM\autoload::registerFolder(dirname(__FILE__).'/page','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/page/default_page','SYSTEM\SAI');

require_once dirname(__FILE__).'/modules/autoload_modules.php';
require_once dirname(__FILE__).'/modules/register_modules.php';