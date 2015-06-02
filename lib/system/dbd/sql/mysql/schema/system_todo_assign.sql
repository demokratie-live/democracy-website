CREATE TABLE `system_todo_assign` (
	`todo` INT(10) NOT NULL,
	`user` INT(10) UNSIGNED NOT NULL,
	PRIMARY KEY (`todo`, `user`)
)
COLLATE='utf8_unicode_ci'
ENGINE=InnoDB
;