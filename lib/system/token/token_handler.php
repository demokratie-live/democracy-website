<?php
namespace SYSTEM\TOKEN;

abstract class token_handler {
    abstract public static function token();
    abstract public static function expire();
    abstract public static function confirm($token_data);
}