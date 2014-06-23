<?php
namespace SYSTEM\DBD;

class SYS_PAGESTATES_GROUP extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_pagestates::NAME_PG
.' WHERE "'.\SYSTEM\DBD\system_pagestates::FIELD_GROUP.'" = $1'
.' ORDER BY "'.\SYSTEM\DBD\system_pagestates::FIELD_ID.'"',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_pagestates::NAME_MYS
.' WHERE `'.\SYSTEM\DBD\system_pagestates::FIELD_GROUP.'` = ?'
.' ORDER BY '.\SYSTEM\DBD\system_pagestates::FIELD_ID
);}}