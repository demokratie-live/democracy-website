<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM
 */
namespace SYSTEM;

/**
 * HEADER Class provided by System Send HTML Headers
 */
class HEADER {
    /**
     * Check if Header was already sent
     * Writes Warning into Database on failure if Database logging is enabled.
     *
     * @return bool Returns true or false 
     */
    private static function checkHeader(){
        $file = null;
        $line = null;
        if(headers_sent($file, $line)){
            new \SYSTEM\LOG\WARNING('Header already sent @ '.$file.' line '.$line);
            return false;}
        return true;
    }
    
    /**
     * Check if a given Datatype has a handler within this class.
     * Not Case sensitive.
     * 
     * @param string $datatype Datatype to be checked eg. 'jpg'
     * @return bool Returns true or false
     */    
    public static function available($datatype){
        return \method_exists('\SYSTEM\HEADER', strtoupper($datatype));}
    
    /**
     * Send JSON Headers, if Header was not sent yet
     * 
     * @return null Returns null
     */
    public static function JSON(){
        if(self::checkHeader()){
            header('Access-Control-Allow-Origin: *');//allow cross domain calls
            header('content-type: application/json');}}
    /**
     * Send PNG Headers, if Header was not sent yet
     * 
     * @return null Returns null
     */
    public static function PNG(){
        if(self::checkHeader()){
            header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (60 * 60 * 24 * 7*4*52))); // 1 week
            header('content-type:image/png');}}
    /**
     * Send JPG Headers, if Header was not sent yet
     * 
     * @return null Returns null
     */
    public static function JPG(){
        if(self::checkHeader()){
            //header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (60 * 60 * 24 * 7))); // 1 week
            header('content-type:image/jpeg');}}
    /**
     * Send JPEG Headers, if Header was not sent yet
     * 
     * @return null Returns null
     */
    public static function JPEG(){
        if(self::checkHeader()){
            //header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (60 * 60 * 24 * 7))); // 1 week
            header('content-type:image/jpeg');}}   
    /**
     * Send GIF Headers, if Header was not sent yet
     * 
     * @return null Returns null
     */
    public static function GIF(){
        if(self::checkHeader()){
            header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (60 * 60 * 24 * 7))); // 1 week
            header('content-type:image/gif');}}  
    /**
     * Send JS Headers, if Header was not sent yet
     * 
     * @return null Returns null
     */
    public static function JS(){
        if(self::checkHeader()){
            //header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (60 * 60 * 24 * 7))); // 1 week
            header('content-type:application/javascript');}}
    /**
     * Send CSS Headers, if Header was not sent yet
     * 
     * @return null Returns null
     */
    public static function CSS(){
        if(self::checkHeader()){
            //header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (60 * 60 * 24 * 7))); // 1 week
            header('content-type:text/css');}}
    /**
     * Send LESS Headers, if Header was not sent yet
     * 
     * @return null Returns null
     */
    public static function LESS(){
        if(self::checkHeader()){
            header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (60 * 60 * 24 * 7))); // 1 week
            header('content-type:text/css');}}
    /**
     * Send FILE(download) Headers, if Header was not sent yet
     * 
     * @param string $filename Filename which should be transmitted with the Filetransfere
     * @return null Returns null
     */
    public static function FILE($filename){
        header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (60 * 60 * 24 * 7))); // 1 week
        header("Content-type: application/octet-stream");
        header("Content-Disposition: attachment; filename=\"".$filename."\"");}
}