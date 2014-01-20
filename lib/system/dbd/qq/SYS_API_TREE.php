<?php
namespace SYSTEM\DBD;

class SYS_API_TREE extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_api::NAME_PG
.' WHERE "'.\SYSTEM\DBD\system_api::FIELD_GROUP.'" = $1'
.' ORDER BY "'.\SYSTEM\DBD\system_api::FIELD_ID.'"',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_api::NAME_MYS
.' WHERE `'.\SYSTEM\DBD\system_api::FIELD_GROUP.'` = ?'
.' ORDER BY '.\SYSTEM\DBD\system_api::FIELD_ID
);}}