<?php
namespace SYSTEM;

const C_ROOT                = '<root>';
const C_SUBPATH             = '<subpath>';

abstract class PATH {
    static public function getPath(){
        throw new \RuntimeException("Not Implemented");}
}

class PROOT extends PATH {
    static public function getPath(){
        return C_ROOT.C_SUBPATH;}
}

class PSYSTEM extends PATH {
    static public function getPath(){
        return C_ROOT.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL).C_SUBPATH;}
}

class PSAI extends PATH {
    static public function getPath(){
        return C_ROOT.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL).'sai/'.C_SUBPATH;}
}

class PLIB extends PATH {
    static public function getPath(){
        return C_ROOT.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL).'lib/'.C_SUBPATH;}
}

class PSQL extends PATH {
    static public function getPath(){
        return C_ROOT.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL).'sql/'.C_SUBPATH;}
}

function SERVERPATH(\SYSTEM\PATH $basepath, $subpath = ''){
    return str_replace(    array(C_ROOT,C_SUBPATH),
                           array(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH),$subpath),
                           $basepath->getPath());
}
function WEBPATH(\SYSTEM\PATH $basepath, $subpath = ''){
    return str_replace(    array(C_ROOT,C_SUBPATH),
                           array(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL) ,$subpath),
                           $basepath->getPath());
}