<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TEXT_GETTEXT_LANG extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
            //pg            
            '',
            //mys
            "SELECT * FROM system_text WHERE id = ? AND language = ?"
);}}
