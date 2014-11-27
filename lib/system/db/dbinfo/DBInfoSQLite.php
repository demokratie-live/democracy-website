<?php
namespace SYSTEM\DB;

class DBInfoSQLite extends \SYSTEM\DB\DBInfo {
    public function __construct($database , $permissions , $password = null, $host = null, $port = null){
        $this->m_database = $database;
        $this->m_user = $permissions;
        $this->m_password = $password;
        $this->m_host = $host;
        $this->m_port = $port;

        if( $this->m_database == null ||
            $this->m_user == null){
            throw new \Exception("DBInfo not correct, database, permissions are null");}
    }
}