CREATE TABLE `system_page` (
	`group` INT(10) UNSIGNED NOT NULL,
	`id` CHAR(50) NOT NULL,
	`div` CHAR(50) NOT NULL,
	`url` TEXT NOT NULL,
	`func` CHAR(50) NOT NULL,
	`php_class` CHAR(50) NOT NULL,
	PRIMARY KEY (`id`, `div`, `group`)
)
COLLATE='utf8_unicode_ci'
ENGINE=InnoDB;
