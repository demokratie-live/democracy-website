<?php
class PAPI extends \SYSTEM\PATH {
    public function __construct($subpath = '') {
        parent::__construct(new \SYSTEM\PROOT(), 'democracy/api/', $subpath);}
}