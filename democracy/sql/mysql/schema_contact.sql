CREATE TABLE `contact` (
  `email` varchar(255) NOT NULL,
  `sex` varchar(1) DEFAULT NULL,
  `name_first` varchar(255) DEFAULT NULL,
  `name_last` varchar(255) DEFAULT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;