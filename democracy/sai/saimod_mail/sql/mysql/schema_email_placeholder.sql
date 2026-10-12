CREATE TABLE `email_placeholder` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` int(10) UNSIGNED NOT NULL,
  `data` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;