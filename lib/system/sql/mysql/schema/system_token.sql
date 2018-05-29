CREATE TABLE `system_token` (
	`token` CHAR(40) NOT NULL,
	`class` CHAR(255) NOT NULL,
	`expire` TIMESTAMP NULL DEFAULT NULL,
	`data` TEXT NULL,
	`request_user` INT(11) NULL DEFAULT NULL,
	`request_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`confirm_user` INT(11) NULL DEFAULT NULL,
	`confirm_time` TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY (`token`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;