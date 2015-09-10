<?php
namespace SYSTEM\SQL;
class SCHEMA_SYSTEM_API extends \SYSTEM\DB\QI {
    public static function get_class(){return \get_class();}
    public static function files_mysql(){
        return array(   \SYSTEM\SERVERPATH(new \SYSTEM\PSQL(),'/qt/mysql/schema/system_api.sql'));
    }    
}