<?php
\SYSTEM\autoload::registerFolder(dirname(__FILE__));
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_page');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_home');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_citizen');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_politicians');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_engineering');
require_once dirname(__FILE__).'/default_donate/autoload.inc';

\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_datenschutz');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_nutzungsbedingungen');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_impressum');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_contact');

\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_press');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_faq');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_blog');

\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_unsubscribe');
// SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_prototyp');
\SYSTEM\autoload::registerFolder(dirname(__FILE__).'/default_invite');