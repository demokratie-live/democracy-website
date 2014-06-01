<?php

namespace SYSTEM\DBD;

class system_locale_string {
    const NAME_PG  = 'system.locale_string';
    const NAME_MYS = 'system_locale_string';

    const FIELD_ID = 'id';
    const FIELD_CATEGORY = 'category';
    const FIELD_EN_US = 'enUS';
    const FIELD_DE_DE = 'deDE';

    const VALUE_CATEGORY_BASIC                  = 1;

    const VALUE_CATEGORY_SYSTEM                 = 10;
    const VALUE_CATEGORY_SYSTEM_ERROR           = 11;
    const VALUE_CATEGORY_SYSTEM_SAI             = 42;
    const VALUE_CATEGORY_SYSTEM_SAI_ERROR       = 43;
    
    const VALUE_CATEGORY_SYSTEM_ENDCAT          = 99;   
}