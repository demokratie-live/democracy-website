<?php
namespace SYSTEM\DBD;

class SYS_TEXT_DELETE_TAGS extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'DELETE FROM `system_text_tag` WHERE id = ?;'
);}}