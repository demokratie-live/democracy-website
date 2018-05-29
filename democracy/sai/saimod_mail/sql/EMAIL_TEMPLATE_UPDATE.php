<?php
namespace SQL;

class EMAIL_TEMPLATE_UPDATE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE email_template SET type=?, name=?, value=? WHERE id=?;';
    }
}