<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\CRON
 */
namespace SYSTEM\CRON;

/**
 * Conjob Class provided by System to delete System Cache.
 */
class cron_cache_delete implements \SYSTEM\CRON\cronjob{
    /**
     * Run the Cronjob and delete all Cache entries.
     *
     * @return int Return a Cronstatus for the Cron Class to update the db.
     */
    public static function run(){
        if(!\SYSTEM\SQL\SYS_CACHE_DELETE_ALL::QI()){
            return cronstatus::CRON_STATUS_FAIL;}
        return cronstatus::CRON_STATUS_SUCCESFULLY;
    }
}