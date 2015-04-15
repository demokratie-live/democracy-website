<?php
namespace SYSTEM\DBD;

class SYS_TEXT_GET_ID_TAGS extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'SELECT tag FROM system_text_tag WHERE id = ?'
);}}