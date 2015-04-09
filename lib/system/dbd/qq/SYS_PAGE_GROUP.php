<?php
namespace SYSTEM\DBD;

class SYS_PAGE_GROUP extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_page::NAME_PG
.' WHERE "'.\SYSTEM\DBD\system_page::FIELD_GROUP.'" = $1'
.' AND "'.\SYSTEM\DBD\system_page::FIELD_STATE.'" = $2'
.' ORDER BY "'.\SYSTEM\DBD\system_page::FIELD_ID.'" ASC;',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_page::NAME_MYS
.' WHERE `'.\SYSTEM\DBD\system_page::FIELD_GROUP.'` = ?'
.' AND `'.\SYSTEM\DBD\system_page::FIELD_STATE.'` = ?'
.' ORDER BY '.\SYSTEM\DBD\system_page::FIELD_ID.' ASC;'
);}}