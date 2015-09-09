<?php
namespace SYSTEM\DB;
class QI {                       
    public static function QI($dbinfo = null){
        if(!$dbinfo){
            $dbinfo = \SYSTEM\system::getSystemDBInfo();}
        
        if($dbinfo instanceof \SYSTEM\DB\DBInfoPG){
            $files = static::files_pg();
        } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoMYS){
            $files = static::files_mysql();
        } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoAMQP){
            $files = static::files_amqp();
        } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoSQLite){
            $files = static::files_sqlite();
        } else {
            throw new \SYSTEM\LOG\ERROR(static::get_class().' Could not understand Database Settings. Check ur Database Settings');}
        
        $command =  'mysql'.
                    ' --host=' . $dbinfo->m_host.
                    ' --user=' . $dbinfo->m_user.
                    ' --password=' . $dbinfo->m_password.
                    ' --database=' . $dbinfo->m_database.
                    ' --execute="SOURCE ';
        $result = array();
        foreach($files as $file){
            $result[] = shell_exec($command .$file. '"');}
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
}