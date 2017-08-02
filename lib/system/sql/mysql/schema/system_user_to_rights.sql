CREATE TABLE `system_user_to_rights` (
        `userID` INT(10) UNSIGNED NOT NULL DEFAULT '0',
	`rightID` INT(10) NOT NULL DEFAULT '0',
	PRIMARY KEY (`userID`,`rightID`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;