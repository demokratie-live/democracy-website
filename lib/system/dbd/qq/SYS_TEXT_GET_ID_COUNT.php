<?php
namespace SYSTEM\DBD;

class SYS_TEXT_GET_ID_COUNT extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'SELECT count(*) as count FROM system_text
 WHERE id = ?;'
);}}