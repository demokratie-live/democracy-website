<?php
namespace SYSTEM\DBD;

class SYS_TEXT_SAVE extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`)
 VALUES (?, ?, ?, ?, ?, NOW(), NOW())
 ON DUPLICATE KEY UPDATE text=VALUES(text), author_edit = VALUES(author_edit), time_edit = NOW();'
);}}