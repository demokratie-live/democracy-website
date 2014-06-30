CREATE TABLE `system_pagestates` (
	`group` INT(10) UNSIGNED NOT NULL,
	`id` CHAR(50) NOT NULL,
	`div` CHAR(50) NOT NULL,
	`url` TEXT NOT NULL,
	`func` CHAR(50) NOT NULL,
	PRIMARY KEY (`id`, `div`, `group`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;