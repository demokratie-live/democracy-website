<?php
namespace SYSTEM\DBD;
class SYS_PAGE_GROUP extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'SELECT * FROM '.\SYSTEM\DBD\system_page::NAME_PG
.' WHERE "'.\SYSTEM\DBD\system_page::FIELD_GROUP.'" = $1'
.' AND "'.\SYSTEM\DBD\system_page::FIELD_STATE.'" = $2'
.' ORDER BY "'.\SYSTEM\DBD\system_page::FIELD_ID.'" ASC;';
    }
    public static function mysql(){return
'SELECT * FROM '.\SYSTEM\DBD\system_page::NAME_MYS
.' WHERE `'.\SYSTEM\DBD\system_page::FIELD_GROUP.'` = ?'
.' AND `'.\SYSTEM\DBD\system_page::FIELD_STATE.'` = ?'
.' ORDER BY '.\SYSTEM\DBD\system_page::FIELD_ID.' ASC;';
    }
}