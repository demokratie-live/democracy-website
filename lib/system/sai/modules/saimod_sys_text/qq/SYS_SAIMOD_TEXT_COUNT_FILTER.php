<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TEXT_COUNT_FILTER extends \SYSTEM\DB\QP {
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
' AND (a.username LIKE ? OR ae.username LIKE ? OR text LIKE ?);'
);}}
