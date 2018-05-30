<?php
class PFILES extends \SYSTEM\PATH {
    public function __construct($subpath = '') {
        parent::__construct(new \SYSTEM\PROOT(), 'democracy/files/', $subpath);}
}