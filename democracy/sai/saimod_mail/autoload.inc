<?php
require_once dirname(__FILE__).'/sql/autoload.inc';
\SYSTEM\autoload::registerFolder(dirname(__FILE__),'SAI');
\SYSTEM\SAI\sai::register('\SAI\saimod_mail');
\SYSTEM\FILES\files::registerFolder(dirname(__FILE__).'/files/','email','*.*');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/token');
\SYSTEM\TOKEN\token::register('token_saimod_mail_unsubscribe');