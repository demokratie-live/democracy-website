<?php
namespace SYSTEM\DBD;

class SYS_TEXT_RENAME extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'UPDATE system_text SET id = ? WHERE id = ?;'
);}}