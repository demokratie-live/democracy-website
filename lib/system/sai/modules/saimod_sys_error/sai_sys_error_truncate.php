<?php



if( isset($_GET['truncate'])){
    if(\SYSTEM\SECURITY\Security::check(\SYSTEM::getSystemDBInfo(), \SYSTEM\SECURITY\RIGHTS::SYS_SAI)){
        $con = new \SYSTEM\DB\Connection(\SYSTEM::getSystemDBInfo());
        $res = $con->query('TRUNCATE system.sys_log;');
        echo '1';
        return TRUE;
    }else{
        echo '0';
        return FALSE;
    }

}

?>
