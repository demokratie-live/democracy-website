<?php

namespace SYSTEM\DB;

class QueryString extends Query{

    private $sqlstr = NULL;

    public function __construct($string){
        $this->sqlstr = $string;}

    public function getSQL(){
        return $this->sqlstr;}
}