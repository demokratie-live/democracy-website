<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOCALE_TAGS extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT "tag", COUNT(*) as "count" FROM system_text_tag GROUP BY "tag" ORDER BY "tag" ASC;',
//mys
'SELECT `tag`, COUNT(*) as `count` FROM system_text_tag GROUP BY `tag` ORDER BY `tag` ASC;'
);}}
