CREATE TABLE `system_user_to_rights` (
	`rightID` INT(10) NOT NULL DEFAULT '0',
	`userID` INT(10) UNSIGNED NOT NULL DEFAULT '0',
	PRIMARY KEY (`rightID`, `userID`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;