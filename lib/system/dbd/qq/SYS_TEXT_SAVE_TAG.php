<?php
namespace SYSTEM\DBD;

class SYS_TEXT_SAVE_TAG extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'INSERT IGNORE `system_text_tag` (`id`, `tag`)
 VALUES (?, ?);'
);}}