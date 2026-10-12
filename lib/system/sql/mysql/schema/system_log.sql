CREATE TABLE `system_log` (
	`ID` INT(10) NOT NULL AUTO_INCREMENT,
	`class` TEXT NOT NULL,
	`message` TEXT NOT NULL,
	`code` INT(11) NOT NULL,
	`file` TEXT NOT NULL,
	`line` INT(11) NOT NULL,
	`trace` TEXT NOT NULL,
	`ip` TEXT NOT NULL,
	`querytime` DOUBLE NOT NULL,
	`time` DATETIME NOT NULL,
	`server_name` CHAR(255) NOT NULL,
	`server_port` INT(10) UNSIGNED NOT NULL,
	`request_uri` CHAR(255) NOT NULL,
	`post` TEXT NOT NULL,
	`http_referer` CHAR(255) NULL DEFAULT NULL,
	`http_user_agent` TEXT NOT NULL,
	`user` INT(11) NULL DEFAULT NULL,
	`thrown` BIT(1) NOT NULL,
	PRIMARY KEY (`ID`)
)
COLLATE='utf8_general_ci'
ENGINE=MyISAM
AUTO_INCREMENT=1;