CREATE TABLE `roadmap` (
  `id` int(10) UNSIGNED NOT NULL,
  `order` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `goal` text NOT NULL,
  `beta` int(11) DEFAULT NULL,
  `mvp` int(11) DEFAULT NULL,
  `dream` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;