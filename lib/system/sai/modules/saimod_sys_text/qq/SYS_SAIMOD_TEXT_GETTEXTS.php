<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TEXT_GETTEXTS extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
            //pg            
            '',
            //mys
            "SELECT system_text_tag.tag, system_text.* FROM system_text_tag
                        LEFT JOIN system_text ON system_text_tag.id = system_text.id
                        WHERE tag = '?' AND language = '?'"
);}}
