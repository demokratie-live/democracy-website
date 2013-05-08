<?php

namespace SYSTEM\DBD;

class PAGETable {

    const NAME_PG  = 'system.page_calls';
    const NAME_MYS = 'system_page_calls';

    const FIELD_ID = 'ID';
    const FIELD_FLAG = 'flag';
    const FIELD_PARENTID = 'parentID';
    const FIELD_PARENTVALUE = 'parentValue';
    const FIELD_NAME = 'name';
    // const FIELD_ISCHACHED = 'IsCached'; use flagfield!
    const FIELD_ALLOWEDVALUES = 'allowedValues';

    const VALUE_FLAG_COMMAND = 0;
    const VALUE_FLAG_PARAM = 1;
}