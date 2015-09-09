<?php
namespace SYSTEM\SQL;
class INSTALL_SAI extends \SYSTEM\DB\QI {
    public static function get_class(){return \get_class();}
    public static function files_mysql(){
        return array(
        \SYSTEM\SERVERPATH(new \SYSTEM\PSQL(),'sql/mysql/data/system_sai_api.sql')
        );
    }    
}