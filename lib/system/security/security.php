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
 * security Class provided by System to manage website user and its attributes
 */
class security {
    /**
     * Create a new User. Permanently saved to the Database
     *
     * @param string $username Username of the new User
     * @param string $password_sha1 Hashed Password of the new User
     * @param string $email Email of the new User
     * @param string $locale Language of the new User
     * @param bool $json_result Return data as JSON or Array
     * @return mixed Returns json with status true or Error or Array with userinfo.
     */
    public static function create($username, $password_sha1, $email, $locale = 'enUS',$json_result = false){
        self::startSession();
        if(!self::available($username)){
            throw new \SYSTEM\LOG\ERROR("Username unavailable");}                        
        $result = \SYSTEM\SQL\SYS_SECURITY_CREATE::QI(array( $username , $password_sha1, $email, $locale));
        $row = true;
        if(!$result || !($row = self::login($username, $password_sha1, $locale))){            
            throw new \SYSTEM\LOG\ERROR("Error during Registration process.");}                 
        return $json_result ? \SYSTEM\LOG\JsonResult::ok() : $row;
    }
    
    /**
     * Login a User.
     *
     * @param string $username Username of the User
     * @param string $password_sha1 Hashed Password of the User
     * @param string $locale Language of the User on login.
     * @param bool $json_result Return data as JSON or Array
     * @return mixed Returns json with status true or Error or Array with userinfo.
     */
    public static function login($username, $password_sha1, $locale=NULL,$json_result = false){
        self::startSession();
        $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)] = NULL;
                
        //Database check
        $row = \SYSTEM\SQL\SYS_SECURITY_LOGIN_USER_EMAIL_SHA1::Q1(array($username, $username, $password_sha1));         
        if(!$row){
            throw new \SYSTEM\LOG\WARNING("Login Failed, User was not found in db");}
           
        // set session variables
        $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)] =
                            new User(   $row[\SYSTEM\SQL\system_user::FIELD_ID],
                                        $row[\SYSTEM\SQL\system_user::FIELD_USERNAME],
                                        $row[\SYSTEM\SQL\system_user::FIELD_EMAIL],
                                        $row[\SYSTEM\SQL\system_user::FIELD_JOINDATE],
                                        time(),
                                        getenv('REMOTE_ADDR'),0,NULL,
                                        $row[\SYSTEM\SQL\system_user::FIELD_LOCALE],
                                        \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL),
                                        $row[\SYSTEM\SQL\system_user::FIELD_EMAIL_CONFIRMED]);        
        if(isset($locale)){
            \SYSTEM\locale::set($locale);}                
        \SYSTEM\SQL\SYS_SECURITY_UPDATE_LASTACTIVE::QI(array($row[\SYSTEM\SQL\system_user::FIELD_ID]));
        return $json_result ? \SYSTEM\LOG\JsonResult::ok() : $row;
    }       
        
    /**
     * Determine if username is already in use.
     *
     * @param string $username Username to be checked
     * @param string $email EMail to be checked
     * @param bool $json_result Return data as JSON or Array
     * @return mixed Returns json with status true or Error or Array with userinfo.
     */
    public static function available($username,$email=null,$json_result=false){
        if($email){
            $res = \SYSTEM\SQL\SYS_SECURITY_AVAILABLE_EMAIL::Q1(array($username,$email));
        } else {
            $res = \SYSTEM\SQL\SYS_SECURITY_AVAILABLE::Q1(array($username));}
        if(!$res){
            if($json_result){
                throw new \SYSTEM\LOG\ERRROR("Cannot determine the availability of username!");
            } else{ return false;}
        }
        if($res['count'] != 0){
            if($json_result){
                throw new \SYSTEM\LOG\ERRROR("Username or Email is not avilable.");
            } else{ return false;}
        }
        return $json_result ? \SYSTEM\LOG\JsonResult::ok() : true;
    }

    /**
     * Checks for a right for a logged in user
     *
     * @param int $rightid Right ID to be checked
     * @param bool $json_result Return data as JSON or Array
     * @return mixed Returns json with status true or false or true or false.
     */
    public static function check($rightid,$json_result=false){
        //Not logged in? Go away.
        //If you think you need rights for your guests ur doing smth wrong ;-)
        $user = null;
        if(!($user = self::getUser())){
            return $json_result ? \SYSTEM\LOG\JsonResult::fail() : false;}
        $res = \SYSTEM\SQL\SYS_SECURITY_CHECK::Q1(array($user->id, $rightid));
        if(!$res || $res['count'] == 0){
            return $json_result ? \SYSTEM\LOG\JsonResult::fail() : false;}
        return $json_result ? \SYSTEM\LOG\JsonResult::ok() : true;
    }
    
    /**
     * Change users Password
     *
     * @param string $username Username whos subject to the passwordchange
     * @param string $old_password_sha1 Users old hashed Password
     * @param string $new_password_sha1 Users new hashed Password
     * @return json Returns json with status true or false
     */
    public static function change_password($username,$old_password_sha1,$new_password_sha1){        
        $row = \SYSTEM\SQL\SYS_SECURITY_LOGIN_USER_SHA1::Q1(array($username, $old_password_sha1));                        
        if(!$row){
            throw new \SYSTEM\LOG\ERROR("No such User Password combination.");}        
        $result = \SYSTEM\SQL\SYS_SECURITY_UPDATE_PW::QI(array($new_password_sha1, $row['id']));        
        return $result ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();
    }
    
    /**
     * Change users Email.
     * This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
     * a token and send it to the users email using php mailinc function.
     * 
     * This function can only be invoked if the user is logged in and uses the
     * function on himself or \SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT
     * is present for the invoking user.
     * 
     * This function will fail if the Email of the user is unconfirmed. You can
     * only change the email of a confirmed account.
     *
     * @param string $username Username whos subject to the emailchange
     * @param string $new_email New Email for the given Username
     * @return bool Returns true or false
     */
    public static function change_email($username, $new_email) {
        if(!self::isLoggedIn() || (self::getUser()->username !== $username && self::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT))){
            throw new \SYSTEM\LOG\ERROR("You need to be logged in to trigger this function on your account.");}
        //find all userdata
        $vars = \SYSTEM\SQL\SYS_SECURITY_USER_INFO::Q1(array($username));
        if(!$vars || $vars['email_confirmed'] !== 1){
            throw new \SYSTEM\LOG\ERROR("Username not found or Email unconfirmed.");}
            
        //generate pw & token
        $vars['email'] = $new_email;
        $vars['token'] = \SYSTEM\TOKEN\token::request('\SYSTEM\TOKEN\token_change_email',array('user' => $vars['id'],'email' => $vars['email']));
        $vars['base_url'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL);
        $vars['newline'] = "\r\n";
        
        //mail
        $to     = $vars['email'];
        $subject= \SYSTEM\PAGE\replace::replace(\SYSTEM\PAGE\text::get('mail_change_email_subject'), $vars);
        $message= \SYSTEM\PAGE\replace::replace(\SYSTEM\PAGE\text::get('mail_change_email'), $vars);
        $header = 'From: '. \SYSTEM\PAGE\text::get('mail_change_email_from')."\r\n" .
                  'Reply-To: '.\SYSTEM\PAGE\text::get('mail_change_email_replyto');

        return \mail($to, $subject, $message, $header) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();
    }
    
    /**
     * Reset users Password.
     * This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
     * a token and send it to the users email using php mailinc function.
     * A new password is generated on invoke and sent with the email.
     * After confirming the token the new password given in the email is valid.
     *
     * @param string $username Username whos subject to the password reset
     * @return bool Returns true or false
     */
    public static function reset_password($username) {
        //find all userdata
        $vars = \SYSTEM\SQL\SYS_SECURITY_USER_INFO::Q1(array($username));
        if(!$vars){
            throw new \SYSTEM\LOG\ERROR("Username not found.");}
            
        //generate pw & token
        $vars['pw'] = substr(sha1(time().rand(0, 4000)), 1,10);
        $vars['token'] = \SYSTEM\TOKEN\token::request('\SYSTEM\TOKEN\token_reset_password',array('user' => $vars['id'],'pw_sha1' => sha1($vars['pw'])));
        $vars['base_url'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL);
        $vars['newline'] = "\r\n";
        
        //mail
        $to     = $vars['email'];
        $subject= \SYSTEM\PAGE\replace::replace(\SYSTEM\PAGE\text::get('mail_reset_password_subject'), $vars);
        $message= \SYSTEM\PAGE\replace::replace(\SYSTEM\PAGE\text::get('mail_reset_password'), $vars);
        $header = 'From: '. \SYSTEM\PAGE\text::get('mail_reset_password_from')."\r\n" .
                  'Reply-To: '.\SYSTEM\PAGE\text::get('mail_reset_password_replyto');

        return \mail($to, $subject, $message, $header) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();
    }
    
    /**
     * Request an Confirm-Email for given Username.
     * This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
     * a token and send it to the users email using php mailinc function.
     * 
     * This function can only be invoked if the user is logged in and uses the
     * function on himself or \SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT
     * is present for the invoking user.
     *
     * @param string $username Username whos subject to the email confirm request
     * @return bool Returns true or false
     */
    public static function confirm_email($username) {
        if(!self::isLoggedIn() || (self::getUser()->username !== $username && self::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT))){
            throw new \SYSTEM\LOG\ERROR("You need to be logged in to trigger this function on your account.");}
        //find all userdata
        $vars = \SYSTEM\SQL\SYS_SECURITY_USER_INFO::Q1(array($username));
        if(!$vars || $vars['email_confirmed'] == 1){
            throw new \SYSTEM\LOG\ERROR("Username not found or already confirmed.");}
        
        //generate token
        $vars['token'] = \SYSTEM\TOKEN\token::request('\SYSTEM\TOKEN\token_confirm_email',array('user' => $vars['id']));
        $vars['base_url'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL);
        $vars['newline'] = "\r\n";
        
        //mail
        $to     = $vars['email'];
        $subject= \SYSTEM\PAGE\replace::replace(\SYSTEM\PAGE\text::get('mail_confirm_email_subject'), $vars);
        $message= \SYSTEM\PAGE\replace::replace(\SYSTEM\PAGE\text::get('mail_confirm_email'), $vars);
        $header = 'From: '. \SYSTEM\PAGE\text::get('mail_confirm_email_from')."\r\n" .
                  'Reply-To: '.\SYSTEM\PAGE\text::get('mail_confirm_email_replyto');

        return \mail($to, $subject, $message, $header) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();
    }
    
    /**
     * Confirm a token sent using @see \SYSTEM\TOKEN\token utility
     * (email confirm, email change, password reset)
     *
     * @param string $token Token given in eg an email.
     * @param bool $json_result Return data as JSON or Array
     * @return bool Returns json with status true or false or a bool
     */
    public static function confirm($token,$json_result = false) {
        return \SYSTEM\TOKEN\token::confirm($token) ? 
                ($json_result ? \SYSTEM\LOG\JsonResult::ok() : true) :
                ($json_result ? \SYSTEM\LOG\JsonResult::fail() : false);}
    
    /**
     * Get Userinfo stored in the current Session.
     *
     * @return User Returns User object or NULL
     */
    public static function getUser(){
        if(!self::isLoggedIn(false)){
            return NULL;}
        return $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)];
    }

    /**
     * End the current Session and logout the User
     *
     * @param bool $json_result Return data as JSON or Array
     * @return mixed Returns Json status true or true
     */
    public static function logout($json_result = false){
        self::startSession();
        session_destroy();
        return $json_result ? \SYSTEM\LOG\JsonResult::ok() : true;}
    
    /**
     * Save a key=>value into the current session(not preserved)
     *
     * @param string $key key for the given value
     * @param mixed $value Value for the given Key to be saved
     * @return null Returns null.
     */
    public static function save($key,$value){
        self::startSession();
        $_SESSION['values'][$key] = $value;}
        
    /**
     * Save the value of a key from the current session(not preserved)
     *
     * @param string $key key to be queried
     * @return mixed Returns Value or null.
     */
    public static function load($key){
        self::startSession();
        if(!isset($_SESSION['values'][$key])){
            return NULL;}
        return $_SESSION['values'][$key];}
    
    /**
     * Check if the current session is a logged in user
     *
     * @param bool $json_result Return data as JSON or Array
     * @return mixed Returns json with status true or false or a bool.
     */
    public static function isLoggedIn($json_result = false){
        self::startSession();
        return (isset($_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]) &&
                $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)] instanceof User) ?
                ($json_result ? \SYSTEM\LOG\JsonResult::ok() : true) : ($json_result ? \SYSTEM\LOG\JsonResult::fail() : false);}
    
    /**
     * State the Session for the current request
     *
     * @return null Returns null.
     */
    protected static function startSession(){
        if(!isset($_SESSION) && !headers_sent()){
            \session_start();}
        //respect locale from db if not set(right place here?)
        if( isset($_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]) &&
            $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)] instanceof User){
                $_SESSION['values'][\SYSTEM\locale::SESSION_KEY] = $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]->locale;}
    }
}