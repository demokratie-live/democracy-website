<?php
\SYSTEM\autoload::registerFolder(dirname(__FILE__),'SYSTEM\SQL');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/tbl','SYSTEM\SQL');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/qt','SYSTEM\SQL');

\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_API');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_CACHE');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_CRON');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_LOG');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_PAGE');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_RIGHTS');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_TEXT');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_TEXT_TAG');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_TODO');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_TODO_ASSIGN');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_USER');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM_USER_TO_RIGHTS');

\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_SYSTEM_API');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_SYSTEM_CRON');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_SYSTEM_PAGE');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_SYSTEM_RIGHTS');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_SYSTEM_TEXT');