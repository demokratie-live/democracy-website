<?php
namespace SQL;

class CONTACT_EMAIL_LIST_DELETE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'DELETE FROM contact_email_list WHERE email=?;';
    }
}