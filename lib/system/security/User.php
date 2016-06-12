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
    /** int user creation date*/
    public $creationDate = NULL;
    /** int users last login*/
    public $lastLoginDate = NULL;
    /** string users last login IP*/
    public $lastLoginIP = NULL;
    /** int users amunt of wrong passwords*/
    public $passwordWrongCount = NULL;
    /** array users rights*/
    public $rights = NULL;
    /** string users language*/
    public $locale = NULL;
    /** string websiteurl*/
    public $base_url = NULL;
    /** bool users email confirm status*/
    public $email_confirmed = NULL;

    /**
     * Create a new User Session Store.
     *
     * @param int $id User id
     * @param string $username Username
     * @param string $email Users Email
     * @param int $creationDate user creation date
     * @param int $lastLoginDate users last login
     * @param string $lastLoginIP users last login IP
     * @param int $passwordWrongCount users amunt of wrong passwords
     * @param array $rights users rights
     * @param string $locale Users Language
     * @param string $base_url websiteurl
     * @param bool $email_confirmed users email confirm status
     */
    public function __construct($id, $username, $email, $creationDate, $lastLoginDate, $lastLoginIP, $passwordWrongCount, $rights, $locale, $base_url, $email_confirmed){
        $this->id = $id;
        $this->username = $username;
        $this->email = $email;
        $this->creationDate = $creationDate;
        $this->lastLoginDate = $lastLoginDate;
        $this->lastLoginIP = $lastLoginIP;
        $this->passwordWrongCount = $passwordWrongCount;
        $this->rights = $rights;
        $this->locale = $locale;
        $this->base_url = $base_url;
        $this->email_confirmed = $email_confirmed;
    }
}