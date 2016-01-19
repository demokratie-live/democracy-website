<?php
namespace SYSTEM\SQL;
class SYS_SAIMOD_TEXT_TEXT_NOTAG extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return 
'SELECT system.text.*, MAX(a.username) as author_name, MAX(ae.username) as author_edit_name'.
' FROM system.text'.
' LEFT JOIN system.user as a ON system.text.author = a.id'.
' LEFT JOIN system.user as ae ON system.text.author_edit = ae.id'.
' WHERE (a.username LIKE $1 OR ae.username LIKE $2 OR text LIKE $3)'.
' AND NOT EXISTS'.
' (SELECT id'.
'  FROM system.text_tag'.
'  WHERE system.text_tag.id = system.text.id)'.
' GROUP BY system.text.id, lang'.
' ORDER BY time_edit DESC;';
    }
    public static function mysql(){return 
'SELECT system_text.*, a.username as author_name, ae.username as author_edit_name'.
' FROM system_text'.
' LEFT JOIN system_user as a ON system_text.author = a.id'.
' LEFT JOIN system_user as ae ON system_text.author_edit = ae.id'.
' WHERE (a.username LIKE ? OR ae.username LIKE ? OR text LIKE ?)'.
' AND NOT EXISTS'.
' (SELECT id'.
'  FROM system_text_tag'.
'  WHERE system_text_tag.id = system_text.id)'.
' GROUP BY id, lang'.
' ORDER BY time_edit DESC;';
    }
}