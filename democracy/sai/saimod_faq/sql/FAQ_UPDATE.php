<?php
namespace SQL;

class FAQ_UPDATE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE faq SET `order` = ?, `question` = ?, `answer` = ?, `categories` = ? WHERE `id` = ?;';
    }
}