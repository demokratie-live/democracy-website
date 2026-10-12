<?php
\SYSTEM\autoload::registerFolder(dirname(__FILE__),'SYSTEM\SQL');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/tbl','SYSTEM\SQL');

\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\SCHEMA_SYSTEM');

\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_SYSTEM_API');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_SYSTEM_CRON');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_SYSTEM_PAGE');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_SYSTEM_RIGHTS');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_SYSTEM_TEXT');
\SYSTEM\SQL\setup::register('\SYSTEM\\SQL\\DATA_DEFAULT');