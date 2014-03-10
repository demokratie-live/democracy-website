CREATE TABLE `system_locale_string` (
	`id` CHAR(35) NOT NULL,
	`category` INT(10) UNSIGNED NOT NULL,
	`enUS` TEXT NOT NULL,
	`deDE` TEXT NOT NULL,
	PRIMARY KEY (`id`)
)
COMMENT='Shall hold strings and its translation'
COLLATE='utf8_general_ci'
ENGINE=MyISAM;