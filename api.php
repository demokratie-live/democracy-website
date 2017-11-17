<?php
require_once 'lib/autoload.inc';                                                //SYSTEM Classes
require_once 'democracy/autoload.inc';                                         //Project Classes
require_once 'config.php';

\SYSTEM\system::start(\WEBCRAFT\democracy_deutschland_config());

echo \SYSTEM\API\api::run('\SYSTEM\API\verify','api_democracy',array_merge($_POST,$_GET));
new \SYSTEM\LOG\COUNTER("API was called sucessfully.");