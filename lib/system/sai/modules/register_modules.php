<?php

\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_sys_sys');
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_sys_api');
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_sys_page');
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_sys_error');
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_sys_security');
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_sys_docu');

//TODO extern, namespace
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_dasense_api_reference');
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_dasense_badge_creator');
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_dasense_bonusarea_creator');
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_dasense_monitoring');
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_dasense_push_message');
\SYSTEM\SAI\sai::getInstance()->register('\SYSTEM\SAI\saimod_dasense_text_handler');