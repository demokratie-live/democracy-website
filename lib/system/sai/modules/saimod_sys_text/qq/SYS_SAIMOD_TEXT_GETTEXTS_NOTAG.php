<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TEXT_GETTEXTS_NOTAG extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
            //pg            
            '',
            //mys
            'SELECT * 
                FROM (
                    SELECT system_text.*, a.username as author_name, ae.username as author_edit_name
                        FROM   system_text 
                        LEFT JOIN system_user as a ON system_text.author = a.id
                        LEFT JOIN system_user as ae ON system_text.author_edit = ae.id
                        WHERE  NOT EXISTS
                            (SELECT id
                                FROM   system_text_tag
                                WHERE  system_text_tag.id = system_text.id)
                        ORDER BY time_edit DESC
                ) AS sub
                GROUP BY sub.id;'
);}}
