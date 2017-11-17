<?php
require_once 'lib/autoload.inc';                                                //SYSTEM Classes
require_once 'democracy/autoload.inc';                                         //Project Classes
require_once 'config.php';

\SYSTEM\system::start(\WEBCRAFT\democracy_deutschland_config());

echo \SYSTEM\SQL\setup::install();