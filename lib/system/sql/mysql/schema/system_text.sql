CREATE TABLE `system_text` (
	`id` CHAR(35) NOT NULL,
	`lang` CHAR(4) NOT NULL,
	`text` TEXT NOT NULL,
	`author` INT(10) UNSIGNED NOT NULL,
	`author_edit` INT(10) UNSIGNED NOT NULL,
	`time_create` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`time_edit` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00',
	PRIMARY KEY (`id`, `lang`)
)
COMMENT='Shall hold strings and its translation'
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;