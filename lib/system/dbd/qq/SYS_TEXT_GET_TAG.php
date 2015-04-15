<?php
namespace SYSTEM\DBD;

class SYS_TEXT_GET_TAG extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'SELECT system_text.id,text FROM system_text
 LEFT JOIN system_text_tag ON system_text.id = system_text_tag.id
 WHERE tag = ? and lang = ?;'
);}}