<?php
namespace SQL;

class MEDIA_SELECT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM media WHERE id = ?;';
    }
}