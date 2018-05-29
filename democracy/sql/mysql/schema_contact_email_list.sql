CREATE TABLE `contact_email_list` (
  `email` varchar(255) NOT NULL,
  `list` int(10) UNSIGNED NOT NULL,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`,`list`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;