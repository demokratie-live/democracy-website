<?php
\SYSTEM\autoload::registerFolder(dirname(__FILE__),'SYSTEM\SAI');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/stats','SYSTEM\SAI');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/qq','SYSTEM\SQL');

\SYSTEM\SAI\sai::register('\SYSTEM\SAI\saimod_sys_todo');
\SYSTEM\SAI\saimod_sys_todo::register('\SYSTEM\SAI\todo_stats_gen');
\SYSTEM\SAI\saimod_sys_todo::register('\SYSTEM\SAI\todo_stats_user');
\SYSTEM\SAI\saimod_sys_todo::register('\SYSTEM\SAI\todo_stats_report');
\SYSTEM\SAI\saimod_sys_todo::register('\SYSTEM\SAI\todo_stats_assign');