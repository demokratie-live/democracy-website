<?php
\SYSTEM\autoload::registerFolder(dirname(__FILE__),'SYSTEM\SAI');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/stats','SYSTEM\SAI');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/qq','SYSTEM\DBD');

\SYSTEM\SAI\sai::register_sys('\SYSTEM\SAI\saimod_sys_todo');
\SYSTEM\SAI\saimod_sys_todo::register('\SYSTEM\SAI\todo_stats_gen');
\SYSTEM\SAI\saimod_sys_todo::register('\SYSTEM\SAI\todo_stats_user');
\SYSTEM\SAI\saimod_sys_todo::register('\SYSTEM\SAI\todo_stats_assign');