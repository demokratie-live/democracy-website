<?php

namespace SYSTEM\SAI;

class login_page extends \SYSTEM\PAGE\Page {
    public function html(){

        if( isset($_POST['username']) && isset($_POST['password']) &&            
            \SYSTEM\SECURITY\Security::login(new \DBD\dasenseuser(), $_POST['username'], $_POST['password'], false)){
            //TODO connection
            new \SYSTEM\LOG\DEPRECATED("connection");
            $default = new \SYSTEM\SAI\default_page();
            return $default->html();
        }

        $vars = array();
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'sai/page/login_page/login.tpl'), $vars);
    }
}