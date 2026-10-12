<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SAI
 */
namespace SYSTEM\SAI;

/**
 * saimod_sys_log Class provided by System as saimod to manage the system_log table
 */
class saimod_sys_log extends \SYSTEM\SAI\sai_module {
    /**
     * Deletes the Log Entries
     * 
     * @return json Returns json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_truncate(){        
        \SYSTEM\SQL\SYS_SAIMOD_LOG_TRUNCATE::QQ();
        return \SYSTEM\LOG\JsonResult::ok();}
    
    /**
     * Generates HTML for a Log Entry
     * 
     * @param int $error ID of the Error
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_error($error){
        $vars = \SYSTEM\SQL\SYS_SAIMOD_LOG_ERROR::QQ(array($error))->next();        
        $vars['trace'] = implode('</br>', array_slice(explode('#', $vars['trace']), 1, -1));
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_LOG));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_log/tpl/saimod_sys_log_error.tpl'))->SERVERPATH(), $vars);}
    
    /**
     * Generates HTML for the Log List
     * 
     * @param string $filter Classfilter
     * @param string $search SearchFilter
     * @param int $page Page of the List(50 are displayed)
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_filter($filter = "%",$search="%",$page=0){
        $count = \SYSTEM\SQL\SYS_SAIMOD_LOG_FILTER_COUNT::Q1(array(str_replace('\\', '\\\\', $filter),$search,$search,$search,$search))['count'];
        $vars = array();
        $vars['filter'] = $filter;
        $vars['search'] = $search;
        $vars['search_encoded'] = \urlencode($search);
        $vars['page'] = $page;
        $res = \SYSTEM\SQL\SYS_SAIMOD_LOG_FILTER::QQ(array(str_replace('\\', '\\\\', $filter),$search,$search,$search,$search));
        $vars['table'] = '';
        $count_filtered = 0;
        $res->seek(50*$page);
        while(($r = $res->next()) && ($count_filtered < 50)){     
            $r['class_row'] = self::tablerow_class($r['class']);
            $r['time'] = \SYSTEM\time::time_ago_string(strtotime($r['time']));
            $r['message'] = htmlspecialchars(substr($r['message'],0,255));
            $r['request_uri'] = htmlspecialchars($r['request_uri']);
            $vars['table'] .=  \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_log/tpl/saimod_sys_log_table_row.tpl'))->SERVERPATH(),$r);
            $count_filtered++;
        }
        $vars['pagination'] = '';
        $vars['page_last'] = floor($count/50);
        $dots = false;
        for($i=0;$i < ceil($count/50);$i++){
            if(abs($page-$i) < 7){
                $data = array('page' => $i,'search' => $vars['search_encoded'], 'filter' => $filter, 'active' => ($i == $page) ? 'active' : '');
                $vars['pagination'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_log/tpl/saimod_sys_log_pagination.tpl'))->SERVERPATH(), $data);
                $dots = false;
            } else {
                if(!$dots){
                    $dots = true;
                    $vars['pagination'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_log/tpl/saimod_sys_log_pagination_dots.tpl'))->SERVERPATH());
                }
            }
        }
        $vars['count'] = $count_filtered.'/'.$count;
        $vars['active'] = ($filter == '%' ? 'active' : '');
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_LOG));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_log/tpl/saimod_sys_log_filter.tpl'))->SERVERPATH(),$vars);
    }
    
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_LOG);
        $vars['error_filter'] = '';
        $res = \SYSTEM\SQL\SYS_SAIMOD_LOG_FILTERS::QQ();
        while($row = $res->next()){
            $data = array('filter' => $row['class']);
            $vars['error_filter'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_log/tpl/saimod_sys_log_error_filter.tpl'))->SERVERPATH(),$data);}
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_log/tpl/saimod_sys_log.tpl'))->SERVERPATH(), $vars);        
    }
    
    /**
     * Internal function to map log class to a tr class(color)
     * 
     * @param string $class Name of a Class
     * @return string Returns table row class
     */
    public static function tablerow_class($class){
        switch($class){
            case 'SYSTEM\LOG\INFO': case 'INFO': case 'SYSTEM\LOG\COUNTER':
                return 'table-success';
            case 'SYSTEM\LOG\DEPRECATED': case 'DEPRECATED':
                return 'table-info';
            case 'SYSTEM\LOG\WARNING': case 'WARNING': case 'SYSTEM\LOG\TODO': case 'TODO':
                return 'table-warning';
            default:
                return 'table-danger';
        }        
    }
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function menu(){
        return new sai_module_menu( 1,
                                    sai_module_menu::POISITION_LEFT,
                                    sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_log/tpl/menu.tpl'))->SERVERPATH()));}
    
    /**
     * Returns if the Saimod is public(access for everyone)
     * 
     * @return boolean Returns if the Saimod is public(true) or not(false)
     */
    public static function right_public(){return false;}
    
    /**
     * Returns if the requesting user has the required rights to access the Saimod
     * 
     * @return boolean Returns true if the user can access
     */
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    /**
     * Get all js System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods js
     */
    public static function js(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_log/js/saimod_sys_log.js'));}
}