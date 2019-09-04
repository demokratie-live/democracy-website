CREATE TABLE `email_account` (
	`email` VARCHAR(255) NOT NULL,
	`imap` VARCHAR(255) NOT NULL,
	`host` VARCHAR(255) NOT NULL,
	`port` INT(10) UNSIGNED NOT NULL,
	`auth` INT(10) UNSIGNED NOT NULL DEFAULT '1',
	`username` VARCHAR(255) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`email`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;