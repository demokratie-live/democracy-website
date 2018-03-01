<?php
SYSTEM\autoload::registerFolder(dirname(__FILE__));
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/sql/','SQL');

\SYSTEM\TOKEN\token::register('token_confirm_subscribe');