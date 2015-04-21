<?php
\SYSTEM\autoload::registerFolder(dirname(__FILE__),'SYSTEM\SAI');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/qq/','SYSTEM\DBD');

\SYSTEM\SAI\sai::register_sys('\SYSTEM\SAI\saimod_sys_git');