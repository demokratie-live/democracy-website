<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TEXT_TEXT_TAG extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
            //pg            
            'todo',
            //mys
'SELECT system_text_tag.tag, system_text.*, a.username as author_name, ae.username as author_edit_name'.
' FROM system_text_tag'.
' LEFT JOIN system_text ON system_text_tag.id = system_text.id'.
' LEFT JOIN system_user as a ON system_text.author = a.id'.
' LEFT JOIN system_user as ae ON system_text.author_edit = ae.id'.
' WHERE tag = ?'.
' AND (a.username LIKE ? OR ae.username LIKE ? OR text LIKE ?)'.
' GROUP BY id, lang'.
' ORDER BY time_edit DESC;'
);}}
