<?php

namespace SYSTEM\PAGE;

class replace
{

        public static function replace($text, $vars){
            if(!$vars){
                $vars = array();}
            $search = array();
            $replace = array();

            foreach(array_keys($vars) as $var){
                $search[] = '/\${'.$var.'}/';}

            foreach($vars as $var){
                $replace[] = $var;}
            return @preg_replace($search, $replace, $text);
        }
        public static function replaceFile($path, $vars){
            $buffer = file_get_contents($path);            
            return self::replace($buffer, $vars);}
}