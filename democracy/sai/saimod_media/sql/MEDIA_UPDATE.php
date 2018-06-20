<?php
namespace SQL;

class MEDIA_UPDATE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE media SET `type` = ?, `order` = ?, `title`=?, `img` = ?, `link` = ? WHERE `id` = ?;';
    }
}