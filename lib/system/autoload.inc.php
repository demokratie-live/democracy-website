<?php
//include autoloadclass
require_once dirname(__FILE__).'/system/path.php';
require_once dirname(__FILE__).'/system/autoload.php';

//autoload hook -> refers to autoload class singleton
function __autoload_system($class_name) {
    return system\autoload::autoload($class_name);
}

//Register autoload
spl_autoload_register('__autoload_system');

//Register system classes
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/system','SYSTEM');

\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/log/result','SYSTEM\LOG');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/log','SYSTEM\LOG');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/log/exceptions','SYSTEM\LOG');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/log/error_handler','SYSTEM\LOG');

\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/api','SYSTEM\API');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/page','SYSTEM\PAGE');

\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/dbd/tbl/','SYSTEM\DBD');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/db','SYSTEM\DB');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/db/dbinfo','SYSTEM\DB');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/db/connection','SYSTEM\DB');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/db/result','SYSTEM\DB');

\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/security','SYSTEM\SECURITY');

\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/config','SYSTEM\CONFIG');

\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/cache','SYSTEM\CACHE');

\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/sai','SYSTEM\SAI');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/docu','SYSTEM\DOCU');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/img','SYSTEM\IMG');

require_once dirname(__FILE__).'/lib/autoload.inc.php';
require_once dirname(__FILE__).'/docu/register_sys_docu.php';