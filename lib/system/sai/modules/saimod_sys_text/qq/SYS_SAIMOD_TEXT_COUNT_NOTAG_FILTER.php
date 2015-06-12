<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TEXT_COUNT_NOTAG_FILTER extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'todo',
//mys
'SELECT COUNT(*) as `count`'.
' FROM system_text'.
' LEFT JOIN system_user as a ON system_text.author = a.id'.
' LEFT JOIN system_user as ae ON system_text.author_edit = ae.id'.
' WHERE lang = ?'.
' AND NOT EXISTS'.
' (SELECT id'.
'  FROM system_text_tag'.
'  WHERE system_text_tag.id = system_text.id)'.
' AND (a.username LIKE ? OR ae.username LIKE ? OR text LIKE ?);'
);}}
