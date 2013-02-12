<?php

namespace SYSTEM\DB;

class DBInfo {
    public $m_database = null;
    public $m_user = null;
    public $m_password = null;
    public $m_host = null;

    public function __construct($database , $user , $password, $host){
        $this->m_database = $database;
        $this->m_user = $user;
        $this->m_password = $password;
        $this->m_host = $host;

        if( $this->m_database == null ||
            $this->m_user == null ||
            $this->m_password == null ||
            $this->m_host == null){
            throw new \Exception("DBInfo not correct, database, user, password or host are null");}
    }

}