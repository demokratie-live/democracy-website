<?php
namespace SQL;

class CONTACT_UPDATE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE contact SET sex=?, name_first=?, name_last=?, organization=? WHERE email=?;';
    }
}