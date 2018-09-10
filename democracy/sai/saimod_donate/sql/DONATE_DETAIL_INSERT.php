<?php
namespace SQL;

class DONATE_DETAIL_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO donate (`order`,type,value,max,text_cost,text_description,text_description_subtext,text_date)VALUES(?,?,?,?,?,?,?,?);';
    }
}