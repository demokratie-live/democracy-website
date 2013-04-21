<?php

require_once 'system/autoload.inc.php';
require_once 'dbd/autoload.inc.php';
require_once 'dasense/autoload.inc.php';

//Debug
error_reporting(E_ALL);
ini_set('display_errors', TRUE); // evtl. hilfreich

$call = new DBD\dasensedata();
/*$call = array(  array(\DBD\PAGETable::FIELD_ID=>6,  \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>5,  \DBD\PAGETable::FIELD_PARENTVALUE=>'sensor',    \DBD\PAGETable::FIELD_NAME=>'sensorIDs',    \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>5,  \DBD\PAGETable::FIELD_FLAG=>0,  \DBD\PAGETable::FIELD_PARENTID=>-1, \DBD\PAGETable::FIELD_PARENTVALUE=>NULL,        \DBD\PAGETable::FIELD_NAME=>'action',       \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>0,  \DBD\PAGETable::FIELD_FLAG=>0,  \DBD\PAGETable::FIELD_PARENTID=>-1, \DBD\PAGETable::FIELD_PARENTVALUE=>NULL,        \DBD\PAGETable::FIELD_NAME=>'module',       \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>1,  \DBD\PAGETable::FIELD_FLAG=>0,  \DBD\PAGETable::FIELD_PARENTID=>0,  \DBD\PAGETable::FIELD_PARENTVALUE=>NULL,        \DBD\PAGETable::FIELD_NAME=>'action',       \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>2,  \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>1,  \DBD\PAGETable::FIELD_PARENTVALUE=>'sensor',    \DBD\PAGETable::FIELD_NAME=>'sensorIDs',    \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>3,  \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>1,  \DBD\PAGETable::FIELD_PARENTVALUE=>'login',     \DBD\PAGETable::FIELD_NAME=>'old_module',   \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>4,  \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>1,  \DBD\PAGETable::FIELD_PARENTVALUE=>'login',     \DBD\PAGETable::FIELD_NAME=>'old_action',   \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>7,  \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>1,  \DBD\PAGETable::FIELD_PARENTVALUE=>'geopoint',  \DBD\PAGETable::FIELD_NAME=>'coord',        \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>8,  \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>1,  \DBD\PAGETable::FIELD_PARENTVALUE=>'geopoint',  \DBD\PAGETable::FIELD_NAME=>'datatype',     \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>9,  \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>1,  \DBD\PAGETable::FIELD_PARENTVALUE=>'geopoint',  \DBD\PAGETable::FIELD_NAME=>'radius',       \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>10, \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>5,  \DBD\PAGETable::FIELD_PARENTVALUE=>'geopoint',  \DBD\PAGETable::FIELD_NAME=>'coord',        \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>11, \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>5,  \DBD\PAGETable::FIELD_PARENTVALUE=>'geopoint',  \DBD\PAGETable::FIELD_NAME=>'datatype',     \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                array(\DBD\PAGETable::FIELD_ID=>12, \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>5,  \DBD\PAGETable::FIELD_PARENTVALUE=>'geopoint',  \DBD\PAGETable::FIELD_NAME=>'radius',       \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'));*/

$page = new \SYSTEM\PAGE\PageApi( $call, new SYSTEM\verifyclass(), new PageApi());

try{
    echo $page->CALL(array_merge($_POST,$_GET))->html();
} catch(Exception $e) {
    echo $e;
    $page = new default_page();
    echo $page->html();
}

?>