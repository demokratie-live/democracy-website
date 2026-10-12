CREATE TABLE `email_image` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `mime` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;