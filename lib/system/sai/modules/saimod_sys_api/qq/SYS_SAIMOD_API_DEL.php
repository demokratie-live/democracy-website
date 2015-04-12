<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_API_DEL extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'DELETE FROM '.\SYSTEM\DBD\system_api::NAME_PG.' WHERE `ID` = $1 AND group = $2;',
//mys
'DELETE FROM '.\SYSTEM\DBD\system_api::NAME_MYS.' WHERE `ID` = ? AND `group` = ?;'
);}}
