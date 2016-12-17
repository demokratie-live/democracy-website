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
        $row = \SYSTEM\SQL\SYS_SECURITY_LOGIN_USER_SHA1::Q1(array($username, $username, $password_sha1));         
        if(!$row){
            throw new \SYSTEM\LOG\WARNING("Login Failed, User was not found in db");}
           
        // set session variables
        self::update_session_data(array(
            'id' => $row[\SYSTEM\SQL\system_user::FIELD_ID],
            'username' => $row[\SYSTEM\SQL\system_user::FIELD_USERNAME],
            'email' => $row[\SYSTEM\SQL\system_user::FIELD_EMAIL],
            'joindate' => $row[\SYSTEM\SQL\system_user::FIELD_JOINDATE],
            'last_active' => time(),
            'locale' => $row[\SYSTEM\SQL\system_user::FIELD_LOCALE],
            'email_confirmed' => $row[\SYSTEM\SQL\system_user::FIELD_EMAIL_CONFIRMED]
        ));

        if(isset($locale)){
            \SYSTEM\locale::set($locale);}                
        \SYSTEM\SQL\SYS_SECURITY_UPDATE_LASTACTIVE::QI(array(\session_id(),$row[\SYSTEM\SQL\system_user::FIELD_ID]));
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
     * Change logged in users Password
     *
     * @param string $old_password_sha1 Users old hashed Password
     * @param string $new_password_sha1 Users new hashed Password
     * @return json Returns json with status true or false
     */
    public static function change_password($old_password_sha1,$new_password_sha1){
        if(!\SYSTEM\SECURITY\security::isLoggedIn()){
            throw new \SYSTEM\LOG\ERROR("You need to be logged in to change your Password!");}
        $username = \SYSTEM\SECURITY\security::getUser()->username;
        $row = \SYSTEM\SQL\SYS_SECURITY_LOGIN_USER_SHA1::Q1(array($username, $username, $old_password_sha1));                        
        if(!$row){
            throw new \SYSTEM\LOG\ERROR("No such User Password combination.");}
        return \SYSTEM\SQL\SYS_SECURITY_UPDATE_PW::QI(array($new_password_sha1, $row['id'])) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();
    }
    
    /**
     * Change logged in users Email.
     * 
     * This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
     * a token and send it to the logged in users email using php mailinc function.
     * 
     * This function can only be invoked if the user is logged in and uses the
     * function on himself.
     * 
     * This function will fail if the Email of the user is unconfirmed. You can
     * only change the email of a confirmed account.
     *
     * @param string $new_email New Email for the logged in User
     * @param string $post_script Function to be executed AFTER clicking the EMail Link, BEFORE updating the EMail
     * @param string $post_script_data Additional Data for the Postscript
     * @return bool Returns true or false
     */
    public static function change_email($new_email,$post_script=null,$post_script_data=null) {
        if(!\SYSTEM\SECURITY\security::isLoggedIn()){
            throw new \SYSTEM\LOG\ERROR('You need to be logged in to change your EMail!');}
        $res = \SYSTEM\SQL\SYS_SECURITY_AVAILABLE_EMAIL::Q1(array($new_email,$new_email));
        if(!$res || $res['count'] != 0){
            throw new \SYSTEM\LOG\ERROR('The EMail '.$new_email.' is already registered!');}
        //find all userdata
        $username = \SYSTEM\SECURITY\security::getUser()->username;
        $vars = \SYSTEM\SQL\SYS_SECURITY_USER_INFO::Q1(array($username,$username));
        if(!$vars || $vars['email_confirmed'] !== 1){
            throw new \SYSTEM\LOG\ERROR('Username not found or Email unconfirmed.');}
            
        $old_email = $vars['email'];
        $data = array('user' => $vars['id'],'email' => $new_email);
        if($post_script){
             $data['post_script_data'] = $post_script_data;}

        //generate pw & token
        $vars['email'] = $new_email;
        $vars['token'] = \SYSTEM\TOKEN\token::request('\SYSTEM\TOKEN\token_change_email',$data,$post_script);
        $vars['base_url'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL);
        $vars['newline'] = "\r\n";
        
        //mail
        $to     = $old_email;
        $subject= \SYSTEM\PAGE\replace::replace(\SYSTEM\PAGE\text::get('mail_change_email_subject'), $vars);
        $message= \SYSTEM\PAGE\replace::replace(\SYSTEM\PAGE\text::get('mail_change_email'), $vars);
        $header = 'From: '. \SYSTEM\PAGE\text::get('mail_change_email_from')."\r\n" .
                  'Reply-To: '.\SYSTEM\PAGE\text::get('mail_change_email_replyto');

        return \mail($to, $subject, $message, $header) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();
    }
    
    /**
     * Reset given users Password.
     * 
     * This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
     * a token and send it to the users email using php mailinc function.
     * A new password is generated on invoke and sent with the email.
     * After confirming the token the new password given in the email is valid.
     *
     * @param string Username subject to Password reset
     * @param string $post_script Function to be executed AFTER clicking the EMail Link, BEFORE updating the Password
     * @param string $post_script_data Additional Data for the Postscript
     * @return bool Returns true or false
     */
    public static function reset_password($username,$post_script=null,$post_script_data=null) {
        //find all userdata
        $vars = \SYSTEM\SQL\SYS_SECURITY_USER_INFO::Q1(array($username,$username));
        if(!$vars){
            throw new \SYSTEM\LOG\ERROR("Username or EMail could not be found.");}
        
        //generate pw & token
        $vars['pw'] = substr(sha1(time().rand(0, 4000)), 1,10);
        $data = array('user' => $vars['id'],'pw_sha1' => sha1($vars['pw']));
        if($post_script){
            $data['post_script_data'] = $post_script_data;}
            
        $vars['token'] = \SYSTEM\TOKEN\token::request('\SYSTEM\TOKEN\token_reset_password',$data,$post_script);
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
     * Request an Confirm-Email for logged in User.
     * 
     * This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
     * a token and send it to the users email using php mailinc function.
     * 
     * This function can only be invoked if the user is logged in and uses the
     * function on himself.
     *
     * @param string $post_script Function to be executed AFTER clicking the EMail Link, BEFORE updating the Confirmation Status
     * @param string $post_script_data Additional Data for the Postscript
     * @return bool Returns true or false
     */
    public static function confirm_email($post_script=null,$post_script_data=null) {
        if(!\SYSTEM\SECURITY\security::isLoggedIn()){
            throw new ERROR("You need to be logged in to confirm your EMail!");}
        return self::confirm_email_admin(\SYSTEM\SECURITY\security::getUser()->username, $post_script, $post_script_data);
    }
    
    /**
     * Request an Confirm-Email for an User.
     * 
     * This will facilitate the @see \SYSTEM\TOKEN\token utility to generate
     * a token and send it to the users email using php mailinc function..
     *
     * @param string Username of the Account
     * @param string $post_script Function to be executed AFTER clicking the EMail Link, BEFORE updating the Confirmation Status
     * @param string $post_script_data Additional Data for the Postscript
     * @return bool Returns true or false
     */
    public static function confirm_email_admin($user, $post_script=null,$post_script_data=null) {
        //find all userdata
        $vars = \SYSTEM\SQL\SYS_SECURITY_USER_INFO::Q1(array($user,$user));
        if(!$vars || $vars['email_confirmed'] == 1){
            throw new \SYSTEM\LOG\ERROR("Username not found or already confirmed.");}
        
        $data = array('user' => $vars['id']);
        if($post_script){
            $data['post_script_data'] = $post_script_data;}
            
        //generate token
        $vars['token'] = \SYSTEM\TOKEN\token::request('\SYSTEM\TOKEN\token_confirm_email',$data,$post_script);
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
    public static function confirm($token) {
        return \SYSTEM\TOKEN\token::confirm($token) ? \SYSTEM\TOKEN\token::text_success($token) : \SYSTEM\TOKEN\token::text_fail($token);}
    
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
        $user = self::getUser();
        if($user && $user->id){
            \SYSTEM\SQL\SYS_SECURITY_UPDATE_LASTACTIVE::Q1(array(NULL,$user->id));}
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
    
    public static function update_session_data($data,$session_id = null){
        $old_session_id = \session_id();
        if($session_id){
            \session_write_close();
            \session_id($session_id);
            \session_start();} 
            
        if( !isset($_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]) ||
            !$_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)] instanceof \SYSTEM\SECURITY\User){
            $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)] = new \SYSTEM\SECURITY\User();}
            
        foreach(\array_keys($data) as $key){
            switch($key){
                case 'id': $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]->id = $data['id']; break;
                case 'username': $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]->username = $data['username']; break;
                case 'email': $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]->email = $data['email']; break;
                case 'joindate': $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]->joindate = $data['joindate']; break;
                case 'last_active': $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]->last_active = $data['last_active']; break;
                case 'locale': $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]->locale = $data['locale']; break;
                case 'email_confirmed': $_SESSION[\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)]->email_confirmed = $data['email_confirmed']; break;
            }
        }
        
        if($old_session_id){
            \session_write_close();
            \session_id($old_session_id);
            \session_start();}
    }
}