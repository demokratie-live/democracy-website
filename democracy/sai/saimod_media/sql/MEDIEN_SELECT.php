<?php
namespace SQL;

class MEDIEN_SELECT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM media WHERE type = ? ORDER by `order` DESC;';
    }
}