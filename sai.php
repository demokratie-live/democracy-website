<?php
require_once 'lib/autoload.inc';                                                //SYSTEM Classes
require_once 'democracy/autoload.inc';                                         //Project Classes
require_once '/home/web/web/config/get_config.php';

\SYSTEM\system::start(\WEBCRAFT\get_config(dirname(__FILE__)));

echo (new SYSTEM\SAI\saigui())->html();