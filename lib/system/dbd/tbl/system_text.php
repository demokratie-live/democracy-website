<?php

namespace SYSTEM\DBD;

class system_text {
    const NAME_PG  = 'system.text';
    const NAME_MYS = 'system_text';

    const FIELD_ID = 'id';
    const FIELD_TEXT = 'text';

    //todo rename shit
    const VALUE_CATEGORY_BASIC                  = 1;

    const VALUE_CATEGORY_SYSTEM                 = 10;
    const VALUE_CATEGORY_SYSTEM_ERROR           = 11;
    const VALUE_CATEGORY_SYSTEM_SAI             = 42;
    const VALUE_CATEGORY_SYSTEM_SAI_ERROR       = 43;
    
    const VALUE_CATEGORY_SYSTEM_ENDCAT          = 99;   
}