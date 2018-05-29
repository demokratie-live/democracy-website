<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\PAGE
 */
namespace SYSTEM\PAGE;

/**
 * State Class provided by System to get State information.
 */
class State {
    /**
     * Get a State
     *
     * @param int $group Group ID of the State requested.
     * @param string $state Name of the state(including all substates and params.
     * @param bool $returnasjson Return the result as Json or Array
     * @return json Returns JSON or array with stateinfos.
     */
    public static function get($group,$state,$returnasjson=true){
        //seperate state from vars
        $state_vars = \explode(';', $state);
        //parse substates
        $state_all = \explode('(', $state_vars[0]);
        $state_name = $state_all[0];
        $substate = substr($state_vars[0], strlen($state_name));
        $substate = self::parse_substate($substate);
        //vars
        $vars = array();
        for($i=1;$i<count($state_vars);$i++){
            $var = \explode('.',$state_vars[$i]);
            $vars[$var[0]] = \urlencode(implode('.',array_slice($var,1)));}
        $result = array();
        $res = \SYSTEM\SQL\SYS_PAGE_GROUP::QQ(array($group,$state_name));
        while($row = $res->next()){
            if(!self::is_loaded($row,$substate,$state_name,$row['parent_id'])){
                continue;}
            if( ($row['login'] == 1 && !\SYSTEM\SECURITY\security::isLoggedIn()) ||
                ($row['login'] == 2 && \SYSTEM\SECURITY\security::isLoggedIn())){
                continue;}
            $row['url'] = \SYSTEM\PAGE\replace::replace($row['url'], $vars);
            $row['url'] = \SYSTEM\PAGE\replace::clean($row['url']);
            //clean url of empty variables
            //$row['url'] = preg_replace('/&.*?=(&|$)/', '&', $row['url']);
            $row['url'] = preg_replace('/[^=&]+=(&|$)/', '&', $row['url']);
            $row['url'] = preg_replace('/&&$/', '', $row['url']);
            $row['css'] = $row['js'] = array();
            if(\class_exists($row['php_class']) && \method_exists($row['php_class'], 'css') && \is_callable($row['php_class'].'::css')){
                $row['css'] = array_merge($row['css'], \call_user_func($row['php_class'].'::css'));}
            $row['css'] = count($row['css']) > 0 ? array(\SYSTEM\CACHE\cache_css::minify($row['css'])) : array();
            if(\class_exists($row['php_class']) && \method_exists($row['php_class'], 'scss') && \is_callable($row['php_class'].'::scss')){
                $scss = \call_user_func($row['php_class'].'::scss');
                foreach($scss as $s){
                    $row['css'][] = \SYSTEM\CACHE\cache_scss::url($s);}
            }
            if(\class_exists($row['php_class']) && \method_exists($row['php_class'], 'js') && \is_callable($row['php_class'].'::js')){
                $row['js'] = array_merge($row['js'], \call_user_func($row['php_class'].'::js'));}
            $row['js'] = count($row['js']) > 0 ? array(\SYSTEM\CACHE\cache_js::minify($row['js'])) : array();
            if(\class_exists($row['php_class']) && \method_exists($row['php_class'], 'title') && \is_callable($row['php_class'].'::title')){
                $row['title'] = \call_user_func($row['php_class'].'::title');}
            if(\class_exists($row['php_class']) && \method_exists($row['php_class'], 'meta') && \is_callable($row['php_class'].'::meta')){
                $row['meta'] = \call_user_func($row['php_class'].'::meta');}
            unset($row['php_class']);
            
            $skip = false;
            for($i=0;$i<count($result);$i++){
                if($result[$i]['div'] == $row['div']){
                    $skip = true;
                    if($row['type'] == 1){
                        $result[$i] = $row;}
                    break;
                }
            }
            if(!$skip){
                $result[] = $row;}
        }
        return $returnasjson ? \SYSTEM\LOG\JsonResult::toString($result) : $result;
    }
    
    /**
     * Get Substates out of State string
     *
     * @param string $substate Substate string.
     * @return array Returns array with substates.
     */
    private static function parse_substate($substate){
        return (new \SYSTEM\PAGE\ParensParser())->parse($substate);}
        
    /**
     * Is the substate loaded alrdy(for result set)
     * (recursive)
     *
     * @param array $row Substate Database row.
     * @param array $substate Array with substates
     * @param string $state_name Name of the main state
     * @param int $parent_id Id of parent
     * @return bool Returns true or false.
     */
    private static function is_loaded($row,&$substate,$state_name,$parent_id = -1){
        for($i=0;$i<count($substate);$i++){
            if($row['name'] == $state_name){
                $substate[$i]['parent_id'] = $row['id'];}
            if($substate[$i]['name'] == $row['name']){
                $substate[$i]['parent_id'] = $parent_id;
                return true;
            }
            if(array_key_exists('parent_id', $substate[$i])){
                if(self::is_loaded($row,$substate[$i]['sub'],$substate[$i]['name'],$substate[$i]['parent_id'])){
                    return true;}
            }
        }
        return $row['type'] == 0 ? true : false;
    }
}