CREATE TABLE `system_text_tag` (
	`id` CHAR(35) NOT NULL,
	`tag` CHAR(35) NOT NULL,
	PRIMARY KEY (`id`, `tag`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;