<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SECURITY
 */
namespace SYSTEM\SECURITY;

/**
 * User Class provided by System to manage website user session values
 */
class User {
    /** int user id*/
    public $id = NULL;
    /** string username*/
    public $username = NULL;
    /** string email*/
    public $email = NULL;
    /** int user join date*/
    public $joindate = NULL;
    /** int users last active*/
    public $last_active = NULL;
    /** string users language*/
    public $locale = NULL;
    /** bool users email confirm status*/
    public $email_confirmed = NULL;
}