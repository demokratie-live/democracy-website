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
 * DBInfo Abstract Class provided by System to hold Database Information.
 */
abstract class DBInfo {
    /** string Variable to store Database name */
    public $m_database = null;
    /** string Variable to store Database user */
    public $m_user = null;
    /** string Variable to store Database password */
    public $m_password = null;
    /** string Variable to store Database host */
    public $m_host = null;
    /** int Variable to store Database port */
    public $m_port = null;

    /**
     * Store Data upon Construction.
     *
     * @param string $database Database name
     * @param string $user Database user
     * @param string $password Database password
     * @param string $host Database host
     * @param int $port Database port
     */
    abstract public function __construct($database , $user , $password, $host, $port = null);
}