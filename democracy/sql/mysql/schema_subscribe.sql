CREATE TABLE `subscribe` (
    `email` VARCHAR(255) NOT NULL ,
    `beta` INT NULL DEFAULT NULL ,
    `android` INT NULL DEFAULT NULL ,
    `ios` INT NULL DEFAULT NULL ,
    `confirmed` INT NULL DEFAULT NULL ,
    `emails_sent` INT UNSIGNED NOT NULL DEFAULT '0' ,
    PRIMARY KEY (`email`)
) ENGINE = InnoDB;