<?php
namespace SYSTEM\TOKEN;

abstract class token_handler {
    abstract public function token();
    abstract public function expire();
    abstract public function data($data);
    abstract public function confirm($token_data);
}