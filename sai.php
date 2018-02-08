<?php
require_once 'lib/autoload.inc';                                                //SYSTEM Classes
require_once 'democracy/autoload.inc';                                         //Project Classes
require_once 'config.php';

\SYSTEM\system::start(\WEBCRAFT\democracy_deutschland_config());

echo (new SYSTEM\SAI\sai_gui())->html();