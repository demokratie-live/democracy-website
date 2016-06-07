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
 * Conjob Class provided by System to derive from for custom Cronjobs.
 */
abstract class cronjob{
    /**
     * Run the Cronjob and execute its task
     *
     * @return int Return a Cronstatus for the Cron Class to update the db.
     */
    public abstract static function run();
}