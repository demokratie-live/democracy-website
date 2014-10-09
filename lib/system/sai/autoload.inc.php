<?php
\SYSTEM\autoload::registerFolder(dirname(__FILE__),'SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/sai','SYSTEM\SAI');
SYSTEM\autoload::registerFolder(dirname(__FILE__).'/page','SYSTEM\SAI');
require_once dirname(__FILE__).'/modules/autoload.inc';