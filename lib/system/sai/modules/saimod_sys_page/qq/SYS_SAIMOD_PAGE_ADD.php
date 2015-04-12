<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_PAGE_ADD extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'INSERT INTO '.\SYSTEM\DBD\system_page::NAME_PG.' (ID, group, type, parentID, parentValue, name, verify) VALUES ($1, $2, $3, $4, $5, $6, $7);',
//mys
'INSERT INTO '.\SYSTEM\DBD\system_page::NAME_MYS.' (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (?, ?, ?, ?, ?, ?, ?);'
);}}
