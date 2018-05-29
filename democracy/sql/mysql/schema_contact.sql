CREATE TABLE `beta` (
  `code` varchar(8) DEFAULT NULL,
  `email` varchar(255) NOT NULL DEFAULT '',
  `android` int(11) DEFAULT NULL,
  `ios` int(11) DEFAULT NULL,
  `redeemedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `storedAt` timestamp NULL DEFAULT NULL,
  `emailedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;