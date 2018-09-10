<?php
namespace SQL;

class DONATE_DETAIL_UPDATE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE donate SET `order`=?, type=?, value=?, max=?, text_cost=?, text_description=?, text_description_subtext=?, text_date=? WHERE id=?;';
    }
}