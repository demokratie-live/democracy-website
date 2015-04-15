<?php
namespace SYSTEM\DBD;

class SYS_TEXT_GET_ID extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'SELECT id,text FROM system_text WHERE id = ? and lang = ?;'
);}}