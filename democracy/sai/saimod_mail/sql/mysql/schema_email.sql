CREATE TABLE `email` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `account` VARCHAR(255) NOT NULL,
  `sender` varchar(255) NOT NULL,
  `subject` text NOT NULL,
  `template_text` int(10) UNSIGNED NULL,
  `template_html` int(10) UNSIGNED NULL,
  `system_lock` int(10) UNSIGNED NULL DEFAULT NULL,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;