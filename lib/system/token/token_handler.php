<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\TOKEN
 */
namespace SYSTEM\TOKEN;

/**
 * Abstract token_handler Class provided by System to provide API for any token mechanism.
 */
interface token_handler {
    /**
     * Generate the Token
     *
     * @return string Returns token string.
     */
    static function token();
    
    /**
     * Expiredate when the Token expires
     *
     * @return int Returns unixtimestamp when the token expires.
     */
    static function expire();
    
    /**
     * Token confirm processing for the token_handler
     *
     * @param array Token data from db
     * @return bool Returns true or false.
     */
    static function confirm($token_data);
    
    /**
     * Callback text_success on success
     *
     * @param array $token_data Token Data
     * @return string Returns token success string.
     */
    static function text_success($token_data);
    
    /**
     * Callback text_success on success
     *
     * @param array $token_data Token Data
     * @return string Returns token success string.
     */
    static function text_fail($token_data);
}