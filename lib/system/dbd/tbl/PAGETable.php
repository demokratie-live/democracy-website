<?php

namespace DBD;

class PAGETable {

    const NAME = 'PAGECalls';

    const FIELD_ID = 'ID';
    const FIELD_FLAG = 'Flag';
    const FIELD_PARENTID = 'ParentID';
    const FIELD_PARENTVALUE = 'ParentValue';
    const FIELD_NAME = 'Name';
    // const FIELD_ISCHACHED = 'IsCached'; use flagfield!
    const FIELD_ALLOWEDVALUES = 'AllowedValues';

    const VALUE_FLAG_COMMAND = 0;
    const VALUE_FLAG_PARAM = 1;
}