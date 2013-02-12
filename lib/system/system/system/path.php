<?php

namespace SYSTEM;

const C_ROOT                = '<root>';
const C_SUBPATH             = '<subpath>';

//move that 2 extern so we can modify without modifying system files
const C_SERVER_ROOT         = '/home/dasense/test/'; // root on the server
const C_WEB_ROOT            = '/test/';              // http://www.da-sense.de/
const C_WEB_ADDRESS         = 'http://www.da-sense.de';

abstract class PATH {
    abstract static public function getPath();
}

class PROOT extends PATH {
    static public function getPath(){
        return C_ROOT.C_SUBPATH;}
}

class PSYSTEM extends PATH {
    static public function getPath(){
        return C_ROOT.'system/'.C_SUBPATH;}
}

class PSAI extends PATH {
    static public function getPath(){
        return C_ROOT.'system/sai/'.C_SUBPATH;}
}

function SERVERPATH(\SYSTEM\PATH $basepath, $subpath = ''){
    return str_replace(    array(C_ROOT,C_SUBPATH),
                           array(C_SERVER_ROOT,$subpath),
                           $basepath->getPath());
}
function WEBPATH(\SYSTEM\PATH $basepath, $subpath = '', $http = false){
    return str_replace(    array(C_ROOT,C_SUBPATH),
                           array($http ? C_WEB_ADDRESS.C_WEB_ROOT : C_WEB_ROOT,$subpath),
                           $basepath->getPath());
}