<?php
namespace SYSTEM\DBD;

class SYS_TEXT_RENAME_TAGS extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'UPDATE system_text_tag SET id = ? WHERE id = ?;'
);}}