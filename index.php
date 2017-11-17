<?php
require_once 'lib/autoload.inc';                                                //SYSTEM Classes
require_once 'democracy/autoload.inc';                                         //Project Classes
require_once 'config.php';

\SYSTEM\system::start(\WEBCRAFT\democracy_deutschland_config());

echo \SYSTEM\API\api::run('\SYSTEM\API\verify', 'page_democracy', array_merge($_POST,$_GET), 1, false, true);
new \SYSTEM\LOG\COUNTER("Page was called sucessfully.");