<?php
namespace SYSTEM\PAGE;

class State {
    public static function get($group){
        $result = array();
        
        $res = \SYSTEM\DBD\SYS_PAGE_GROUP::QQ(array($group));
        while($row = $res->next()){
            $row['css'] = $row['js'] = array();
            if(\class_exists($row['php_class']) && \method_exists($row['php_class'], 'css') && \is_callable($row['php_class'].'::css')){
                $row['css'] = array_merge($row['css'], call_user_func($row['php_class'].'::css'));}
            if(\class_exists($row['php_class']) && \method_exists($row['php_class'], 'js') && \is_callable($row['php_class'].'::js')){
                $row['js'] = array_merge($row['js'], call_user_func($row['php_class'].'::js'));}
            $result[] = $row;}
        return \SYSTEM\LOG\JsonResult::toString($result);}
}