<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_PAGE_DEL extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return           
'DELETE FROM '.\SYSTEM\DBD\system_page::NAME_PG.' WHERE `ID` = $1 AND group = $2;';
    }
    public static function mysql(){return 
'DELETE FROM '.\SYSTEM\DBD\system_page::NAME_MYS.' WHERE `ID` = ? AND `group` = ?;';
    }
}