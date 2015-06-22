<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_TODO_PRIORITY extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_MYS.' SET '.\SYSTEM\DBD\system_todo::FIELD_PRIORITY.' = '.\SYSTEM\DBD\system_todo::FIELD_PRIORITY.' + ?'.
' WHERE '.\SYSTEM\DBD\system_todo::FIELD_ID.'= ?;';
    }
}

