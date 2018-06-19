CREATE TABLE `faq` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `categories` text NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;