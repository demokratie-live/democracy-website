<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\DB
 */
namespace SYSTEM\DB;

/**
 * DBInfoMYS Class provided by System to hold MYSQL Database Information.
 */
class DBInfoMYS extends \SYSTEM\DB\DBInfo {
    /**
     * Store Data upon Construction.
     *
     * @param string $database Database name
     * @param string $user Database user
     * @param string $password Database password
     * @param string $host Database host
     * @param int $port Database port
     */
    public function __construct($database , $user , $password, $host, $port = null){
        $this->m_database = $database;
        $this->m_user = $user;
        $this->m_password = $password;
        $this->m_host = $host;
        $this->m_port = $port;

        if( $this->m_database == null ||
            $this->m_user == null ||
            $this->m_password == null ||
            $this->m_host == null){
            throw new \Exception("DBInfo not correct, database, user, password or host are null");}
    }    
}