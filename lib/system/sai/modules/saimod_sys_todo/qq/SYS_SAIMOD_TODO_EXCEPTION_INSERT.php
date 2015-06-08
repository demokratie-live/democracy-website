<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_EXCEPTION_INSERT extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'INSERT INTO '.\SYSTEM\DBD\system_todo::NAME_PG.
'("'.\SYSTEM\DBD\system_todo::FIELD_CLASS.'","'.\SYSTEM\DBD\system_todo::FIELD_MESSAGE.'","'.
    \SYSTEM\DBD\system_todo::FIELD_CODE.'","'.\SYSTEM\DBD\system_todo::FIELD_FILE.'","'.
    \SYSTEM\DBD\system_todo::FIELD_LINE.'","'.\SYSTEM\DBD\system_todo::FIELD_TRACE.'","'.
    \SYSTEM\DBD\system_todo::FIELD_IP.'","'.\SYSTEM\DBD\system_todo::FIELD_QUERYTIME.'","'.
    \SYSTEM\DBD\system_todo::FIELD_SERVER_NAME.'","'.\SYSTEM\DBD\system_todo::FIELD_SERVER_PORT.'","'.
    \SYSTEM\DBD\system_todo::FIELD_REQUEST_URI.'","'.\SYSTEM\DBD\system_todo::FIELD_POST.'","'.
    \SYSTEM\DBD\system_todo::FIELD_HTTP_REFERER.'","'.\SYSTEM\DBD\system_todo::FIELD_HTTP_USER_AGENT.'","'.
    \SYSTEM\DBD\system_todo::FIELD_USER.'","'.\SYSTEM\DBD\system_todo::FIELD_THROWN.'","'.\SYSTEM\DBD\system_todo::FIELD_MESSAGE_HASH.'")'.
'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)'.
';',//'ON DUPLICATE KEY UPDATE '.\SYSTEM\DBD\system_todo::FIELD_COUNT.'='.\SYSTEM\DBD\system_todo::FIELD_COUNT.'+1, '.\SYSTEM\DBD\system_todo::FIELD_TIME.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_TIME.'), '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_OPEN.';',
//mys
'INSERT INTO '.\SYSTEM\DBD\system_todo::NAME_MYS.
'('.\SYSTEM\DBD\system_todo::FIELD_CLASS.','.\SYSTEM\DBD\system_todo::FIELD_MESSAGE.','.
    \SYSTEM\DBD\system_todo::FIELD_CODE.','.\SYSTEM\DBD\system_todo::FIELD_FILE.','.
    \SYSTEM\DBD\system_todo::FIELD_LINE.','.\SYSTEM\DBD\system_todo::FIELD_TRACE.','.
    \SYSTEM\DBD\system_todo::FIELD_IP.','.\SYSTEM\DBD\system_todo::FIELD_QUERYTIME.','.
    \SYSTEM\DBD\system_todo::FIELD_TIME.','.\SYSTEM\DBD\system_todo::FIELD_SERVER_NAME.','.
    \SYSTEM\DBD\system_todo::FIELD_SERVER_PORT.','.\SYSTEM\DBD\system_todo::FIELD_REQUEST_URI.','.
    \SYSTEM\DBD\system_todo::FIELD_POST.','.\SYSTEM\DBD\system_todo::FIELD_HTTP_REFERER.','.
    \SYSTEM\DBD\system_todo::FIELD_HTTP_USER_AGENT.','.\SYSTEM\DBD\system_todo::FIELD_USER.','.
    \SYSTEM\DBD\system_todo::FIELD_THROWN.','.\SYSTEM\DBD\system_todo::FIELD_MESSAGE_HASH.')'.
'VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, SHA1(?))'.
'ON DUPLICATE KEY '.
' UPDATE '. \SYSTEM\DBD\system_todo::FIELD_COUNT.'='.\SYSTEM\DBD\system_todo::FIELD_COUNT.'+1, '.
            \SYSTEM\DBD\system_todo::FIELD_TIME.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_TIME.'), '.
            \SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_OPEN.', '.
            \SYSTEM\DBD\system_todo::FIELD_CODE.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_CODE.'), '.
            \SYSTEM\DBD\system_todo::FIELD_TRACE.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_TRACE.'), '.
            \SYSTEM\DBD\system_todo::FIELD_IP.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_IP.'), '.
            \SYSTEM\DBD\system_todo::FIELD_QUERYTIME.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_QUERYTIME.'), '.
            \SYSTEM\DBD\system_todo::FIELD_TIME.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_TIME.'), '.
            \SYSTEM\DBD\system_todo::FIELD_SERVER_NAME.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_SERVER_NAME.'), '.
            \SYSTEM\DBD\system_todo::FIELD_SERVER_PORT.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_SERVER_PORT.'), '.
            \SYSTEM\DBD\system_todo::FIELD_REQUEST_URI.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_REQUEST_URI.'), '.
            \SYSTEM\DBD\system_todo::FIELD_POST.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_POST.'), '.
            \SYSTEM\DBD\system_todo::FIELD_HTTP_REFERER.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_HTTP_REFERER.'), '.
            \SYSTEM\DBD\system_todo::FIELD_HTTP_USER_AGENT.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_HTTP_USER_AGENT.'), '.
            \SYSTEM\DBD\system_todo::FIELD_USER.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_USER.'), '.
            \SYSTEM\DBD\system_todo::FIELD_THROWN.'=VALUES('.\SYSTEM\DBD\system_todo::FIELD_THROWN.');'
);}}