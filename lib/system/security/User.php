<?php

namespace SYSTEM\SECURITY;

class User {

    public $id = NULL;
    public $username = NULL;
    public $email = NULL;
    public $creationDate = NULL;
    public $lastLoginDate = NULL;
    public $lastLoginIP = NULL;
    public $passwordWrongCount = NULL;
    public $rights = NULL;
    public $locale = NULL;

    public function __construct($id, $username, $email, $creationDate, $lastLoginDate, $lastLoginIP, $passwordWrongCount, $rights, $locale){
        $this->id = $id;
        $this->username = $username;
        $this->email = $email;
        $this->creationDate = $creationDate;
        $this->lastLoginDate = $lastLoginDate;
        $this->lastLoginIP = $lastLoginIP;
        $this->passwordWrongCount = $passwordWrongCount;
        $this->rights = $rights;
        $this->locale = $locale;
    }
}