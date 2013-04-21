<?php

namespace SYSTEM;

class autoload {
    
    private $files = array();       // array(class, namespace, file)
    private $folders = array();     // array(namespace, folder)

    //SINGLETON!
    static private $instance = null;
    static public function getInstance(){
        if (null === self::$instance) {
            self::$instance = new self;}
        return self::$instance;
    }
    private function __construct(){}
    private function __clone(){}

    private function getClassFromFile($file){
        $path_info = \pathinfo($file);

        return $path_info['filename'];
    }

    private function getClassNamespaceFromClass($class){
        $path_info = \pathinfo($class);

        $lastslash = \strrpos($class, 92);

        //No Namespace found
        if(!$lastslash){
            return array($class, '');}

        //Namespace found
        return array(   \substr($class, $lastslash +1),
                        \substr($class, 0, $lastslash));
    }

    private function autoload_($class, $namespace = ''){        
        foreach($this->files as $file){
            if(strtolower($file[0]) == strtolower($class) &&
               strtolower($file[1]) == strtolower($namespace)){
                require_once $file[2];
                return true;}
        }
        
        foreach($this->folders as $folder){            
            if(strtolower($folder[0]) == strtolower($namespace) &&               
               is_file($folder[1].'/'.$class.'.php')){                
                require_once $folder[1].'/'.$class.'.php';
                return true;}
        }

        return false;
    }

    public function registerFile($file, $namespace = ''){
        if(!is_file($file)){
            throw new \Exception('File not found on registerFile for Autoload: '.$file);}

        $this->files[] = array($this->getClassFromFile($file), $namespace, $file);
    }

    public function registerFolder($folder, $namespace = ''){        
        if(!is_dir($folder)){
            throw new \Exception('Folder not found on registerFolder for Autoload: '.$folder);}

        $this->folders[] = array($namespace, $folder);
    }    

    public function autoload($class){        
        $classns = $this->getClassNamespaceFromClass($class);
        
        return $this->autoload_($classns[0],$classns[1]);
    }
}