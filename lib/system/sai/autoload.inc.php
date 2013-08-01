<?php
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/sai','SYSTEM\SAI');

SYSTEM\autoload::registerFolder(dirname(__FILE__).'/page','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/page/default_page','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/page/default_module','SYSTEM\SAI');

SYSTEM\autoload::registerFolder(dirname(__FILE__).'/modules','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/modules/saimod_sys_sai','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/modules/saimod_sys_login','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/modules/saimod_sys_log','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/modules/saimod_sys_security','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/modules/saimod_sys_mod','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/modules/saimod_sys_config','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/modules/saimod_sys_calls','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/modules/saimod_sys_locale','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/modules/saimod_sys_cache','SYSTEM\SAI');

require_once dirname(__FILE__).'/modules/register_modules.php';