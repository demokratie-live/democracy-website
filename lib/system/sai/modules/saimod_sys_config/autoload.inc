<?php
\SYSTEM\autoload::registerFolder(dirname(__FILE__),'SYSTEM\SAI');
//\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/qq/','SYSTEM\SQL');

\SYSTEM\SAI\sai::register_sys('\SYSTEM\SAI\saimod_sys_config');