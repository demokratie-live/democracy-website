<?php
namespace SYSTEM\PAGE;
class State {
    public static function get($group,$state,$returnasjson=true){
        $state = \explode(';', $state);
        $vars = array();
        for($i=1;$i<count($state);$i++){
            $var = \explode('.',$state[$i]);
            $vars[$var[0]] = $var[1];}
        $result = array();
        $res = \SYSTEM\DBD\SYS_PAGE_GROUP::QQ(array($group,$state[0]));
        while($row = $res->next()){
            $row['url'] = \SYSTEM\PAGE\replace::replace($row['url'], $vars);
            $row['url'] = \SYSTEM\PAGE\replace::clean($row['url']);
            //clean url of empty variables
            $row['url'] = preg_replace('/&.*?=(&|$)/', '&', $row['url']);
            $row['url'] = preg_replace('/&$/', '', $row['url']);
            $row['css'] = $row['js'] = array();
            if(\class_exists($row['php_class']) && \method_exists($row['php_class'], 'css') && \is_callable($row['php_class'].'::css')){
                $row['css'] = array_merge($row['css'], call_user_func($row['php_class'].'::css'));}
            if(\class_exists($row['php_class']) && \method_exists($row['php_class'], 'js') && \is_callable($row['php_class'].'::js')){
                $row['js'] = array_merge($row['js'], call_user_func($row['php_class'].'::js'));}
            $row['php_class'] = '';
            $result[] = $row;
        }
        return $returnasjson ? \SYSTEM\LOG\JsonResult::toString($result) : $result;}
}