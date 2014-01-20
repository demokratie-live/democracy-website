<?php
namespace SYSTEM\DB;

class QQuery{
    public $name = null;
    public $sql_pg = null;
    public $sql_mys = null;
    public $dbinfo = null;
    
    public function __construct($name,$sql_pg=null,$sql_mys=null,$dbinfo = null){
        $this->name = $name;
        $this->sql_pg = $sql_pg;
        $this->sql_mys = $sql_mys;
        $this->dbinfo = $dbinfo;
    }
}
