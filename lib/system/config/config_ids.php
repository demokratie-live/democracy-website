<?php

namespace SYSTEM\CONFIG;

class config_ids {
    
    const SYS_CONFIG_ERRORREPORTING = 1;    
    const SYS_CONFIG_PATH_BASEURL   = 2;
    const SYS_CONFIG_PATH_BASEPATH  = 3;
    const SYS_CONFIG_PATH_SYSTEMPATHREL = 4;
        
    const SYS_CONFIG_DB_TYPE        = 11; //mys = 1 pg = 2
        const SYS_CONFIG_DB_TYPE_MYS= 1;
        const SYS_CONFIG_DB_TYPE_PG = 2;
    const SYS_CONFIG_DB_HOST        = 12;
    const SYS_CONFIG_DB_PORT        = 13;
    const SYS_CONFIG_DB_USER        = 14;
    const SYS_CONFIG_DB_PASSWORD    = 15;
    const SYS_CONFIG_DB_DBNAME      = 16;    
    
    const SYS_CONFIG_LANGS          = 21;
    const SYS_CONFIG_DEFAULT_LANG   = 22;
    
    const SYS_SAI_CONFIG_BASEURL    = 50;
    const SYS_SAI_CONFIG_NAVIMG     = 51;
    const SYS_SAI_CONFIG_TITLE      = 52;
    const SYS_SAI_CONFIG_COPYRIGHT  = 53;
}