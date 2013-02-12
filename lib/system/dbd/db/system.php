<?php
namespace DBD;

class system extends \SYSTEM\DB\DBInfo {

    public function  __construct() {
        throw new Exception('DEFINE ME ADMIN! NOW!');
        parent::__construct('DBNAME', 'USER', 'PASSWORD', 'HOST');}
}