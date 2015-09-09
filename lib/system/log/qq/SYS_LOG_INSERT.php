<?php
namespace SYSTEM\DBD;
class SYS_LOG_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'INSERT INTO '.\SYSTEM\DBD\system_log::NAME_PG.
'("'.\SYSTEM\DBD\system_log::FIELD_CLASS.'","'.\SYSTEM\DBD\system_log::FIELD_MESSAGE.'","'.
    \SYSTEM\DBD\system_log::FIELD_CODE.'","'.\SYSTEM\DBD\system_log::FIELD_FILE.'","'.
    \SYSTEM\DBD\system_log::FIELD_LINE.'","'.\SYSTEM\DBD\system_log::FIELD_TRACE.'","'.
    \SYSTEM\DBD\system_log::FIELD_IP.'","'.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.'","'.
    \SYSTEM\DBD\system_log::FIELD_SERVER_NAME.'","'.\SYSTEM\DBD\system_log::FIELD_SERVER_PORT.'","'.
    \SYSTEM\DBD\system_log::FIELD_REQUEST_URI.'","'.\SYSTEM\DBD\system_log::FIELD_POST.'","'.
    \SYSTEM\DBD\system_log::FIELD_HTTP_REFERER.'","'.\SYSTEM\DBD\system_log::FIELD_HTTP_USER_AGENT.'","'.
    \SYSTEM\DBD\system_log::FIELD_USER.'","'.\SYSTEM\DBD\system_log::FIELD_THROWN.'")'.
'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);';
    }
    public static function mysql(){return
'INSERT INTO '.\SYSTEM\DBD\system_log::NAME_MYS.
'('.\SYSTEM\DBD\system_log::FIELD_CLASS.','.\SYSTEM\DBD\system_log::FIELD_MESSAGE.','.
    \SYSTEM\DBD\system_log::FIELD_CODE.','.\SYSTEM\DBD\system_log::FIELD_FILE.','.
    \SYSTEM\DBD\system_log::FIELD_LINE.','.\SYSTEM\DBD\system_log::FIELD_TRACE.','.
    \SYSTEM\DBD\system_log::FIELD_IP.','.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.','.
    \SYSTEM\DBD\system_log::FIELD_TIME.','.\SYSTEM\DBD\system_log::FIELD_SERVER_NAME.','.
    \SYSTEM\DBD\system_log::FIELD_SERVER_PORT.','.\SYSTEM\DBD\system_log::FIELD_REQUEST_URI.','.
    \SYSTEM\DBD\system_log::FIELD_POST.','.\SYSTEM\DBD\system_log::FIELD_HTTP_REFERER.','.
    \SYSTEM\DBD\system_log::FIELD_HTTP_USER_AGENT.','.\SYSTEM\DBD\system_log::FIELD_USER.','.
    \SYSTEM\DBD\system_log::FIELD_THROWN.')'.
'VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
    }
}