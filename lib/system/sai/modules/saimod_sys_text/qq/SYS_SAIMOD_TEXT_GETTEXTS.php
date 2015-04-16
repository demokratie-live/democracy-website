<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TEXT_GETTEXTS extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
            //pg            
            '',
            //mys
            'SELECT *, count(sub.id) as count
                FROM (
                    SELECT system_text_tag.tag, system_text.*, a.username as author_name, ae.username as author_edit_name 
                        FROM system_text_tag 
                        LEFT JOIN system_text ON system_text_tag.id = system_text.id
                        LEFT JOIN system_user as a ON system_text.author = a.id
                        LEFT JOIN system_user as ae ON system_text.author_edit = ae.id
                        WHERE tag = ?
                        ORDER BY time_edit DESC
                ) AS sub
                GROUP BY sub.id
                ORDER BY time_edit ASC;'
);}}
