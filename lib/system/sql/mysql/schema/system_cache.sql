CREATE TABLE `system_cache` (
	`cache` INT(10) NOT NULL,
	`ident` CHAR(255) NOT NULL,
	`type` CHAR(255) NOT NULL,
	`data` MEDIUMTEXT NOT NULL,
	PRIMARY KEY (`cache`, `ident`)
)
COLLATE='utf8_general_ci'
ENGINE=MyISAM
;