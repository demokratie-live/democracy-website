<?php
namespace SYSTEM\SQL;
class DATA_SYSTEM_API extends \SYSTEM\DB\QI {
    public static function get_class(){return \get_class();}
    public static function files_mysql(){
        return array(   \SYSTEM\SERVERPATH(new \SYSTEM\PSQL(),'/qt/mysql/data/system_api.sql'),
                        \SYSTEM\SERVERPATH(new \SYSTEM\PSQL(),'/qt/mysql/data/system_api_default.sql'),
                        \SYSTEM\SERVERPATH(new \SYSTEM\PSQL(),'/qt/mysql/data/system_sai_api.sql'));
    }    
}