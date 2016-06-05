<?php
\SYSTEM\autoload::registerFolder(dirname(__FILE__),'SYSTEM\TOKEN');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/qq','SYSTEM\SQL');

\SYSTEM\TOKEN\token::register('\SYSTEM\TOKEN\token_change_email');
\SYSTEM\TOKEN\token::register('\SYSTEM\TOKEN\token_confirm_email');
\SYSTEM\TOKEN\token::register('\SYSTEM\TOKEN\token_reset_password');