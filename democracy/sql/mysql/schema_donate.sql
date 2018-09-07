CREATE TABLE `donate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order` int(11) NOT NULL DEFAULT '0',
  `type` int(11) NOT NULL,
  `value` float DEFAULT NULL,
  `max` float DEFAULT NULL,
  `text_cost` varchar(255) NOT NULL,
  `text_description` varchar(255) NOT NULL,
  `text_description_subtext` varchar(255) NOT NULL,
  `text_date` varchar(255) NOT NULL,
  PRIMARY KEY (`id`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8;