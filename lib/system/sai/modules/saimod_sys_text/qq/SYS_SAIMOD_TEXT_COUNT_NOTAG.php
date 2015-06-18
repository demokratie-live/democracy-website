<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_TEXT_COUNT_NOTAG extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return 
'SELECT COUNT(*) as `count`'.
' FROM system_text'.
' LEFT JOIN system_user as a ON system_text.author = a.id'.
' LEFT JOIN system_user as ae ON system_text.author_edit = ae.id'.
' WHERE (a.username LIKE ? OR ae.username LIKE ? OR system_text.text LIKE ?)'.
' AND NOT EXISTS'.
' (SELECT id'.
'  FROM system_text_tag'.
'  WHERE system_text_tag.id = system_text.id);';
    }
}