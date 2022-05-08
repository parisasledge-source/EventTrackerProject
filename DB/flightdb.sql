-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema flightdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `flightdb` ;

-- -----------------------------------------------------
-- Schema flightdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `flightdb` DEFAULT CHARACTER SET utf8 ;
USE `flightdb` ;

-- -----------------------------------------------------
-- Table `flight`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `flight` ;

CREATE TABLE IF NOT EXISTS `flight` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NOT NULL,
  `scheduled_time_of_departure` DATETIME NULL,
  `scheduled_time_of_arrival` DATETIME NULL,
  `actual_time_of_departure` DATETIME NULL,
  `actual_time_of_arrival` DATETIME NULL,
  `from_airport` VARCHAR(500) NULL,
  `to_airport` VARCHAR(500) NULL,
  `airline` VARCHAR(500) NULL,
  `aircraft` VARCHAR(500) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `airline`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `airline` ;

CREATE TABLE IF NOT EXISTS `airline` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aircraft`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `aircraft` ;

CREATE TABLE IF NOT EXISTS `aircraft` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS flightuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'flightuser'@'localhost' IDENTIFIED BY 'flightuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'flightuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `flight`
-- -----------------------------------------------------
START TRANSACTION;
USE `flightdb`;
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (1, 'AA2477', '2022-05-01 07:35:00', '2022-05-01 13:30:00', '2022-05-01 07:42:00', '2022-05-01 18:01:00', 'Seattle-Tacoma International Airport', 'Dallas/Fort Worth International Airport', 'American Airlines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (2, 'AA1405', '2022-05-01 14:30:00', '2022-05-01 18:21:00', '2022-05-01 14:36:00', '2022-05-01 22:03:00', 'Dallas/Fort Worth International Airport', 'Miami International Airport', 'American Airlines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (3, 'AA2289', '2022-05-01 19:35:00', '2022-05-01 22:31:00', '2022-05-01 19:52:00', '2022-05-02 05:10:00', 'Miami International Airport', 'Los Angeles International Airport', 'American Airines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (4, 'AA314', '2022-05-02 08:45:00', '2022-05-02 16:46:00', '2022-05-02 08:59:00', '2022-05-02 20:26:00', 'Los Angeles International Airport', 'Miami International Airport', 'American Airlines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (5, 'AA385', '2022-05-02 19:57:00', '2022-05-03 00:55:00', '2022-05-02 20:15:00', '2022-05-03 05:15:00', 'Miami International Airport', 'Jorge Chavez International Airport', 'American Airlines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (6, 'AA350', '2022-05-03 08:00:00', '2022-05-03 15:32:00', '2022-05-03 08:14:00', '2022-05-03 20:08:00', 'Jorge Chavez International Airport', 'Dallas/Fort Worth International Airport', 'American Airlines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (7, 'AA1796', '2022-05-03 17:10:00', '2022-05-03 17:43:00', '2022-05-03 17:14:00', '2022-05-04 00:23:00', 'Dallas/Fort Worth International Airport', 'Phoenix Sky Harbor International Airport', 'American Airlines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (8, 'AA630', '2022-05-04 18:42:00', '2022-05-05 00:09:00', '2022-05-04 18:51:00', '2022-05-05 04:52:00', 'Phoenix Sky Harbor International Airport', 'O\'Hare International Airport', 'American Airlines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (9, 'AA891', '2022-05-04 09:55:00', '2022-05-04 11:39:00', '2022-05-04 10:05:00', '2022-05-04 18:13:00', 'O\'Hare International Airport', 'Phoenix Sky Harbor International Airport', 'American Airlines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (10, 'AA356', '2022-05-05 07:17:00', '2022-05-05 11:38:00', '2022-05-05 08:30:00', '2022-05-05 17:27:00', 'Phoenix Sky Harbor International Airport', 'Dallas/Fort Worth International Airport', 'American Airlines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (11, 'AA2198', '2022-05-05 12:40:00', '2022-05-05 13:42:00', NULL, NULL, 'Dallas/Fort Worth International Airport', 'Austin-Bergstrom International Airport', 'American Airlines', 'Airbus A321-253NX');
INSERT INTO `flight` (`id`, `name`, `scheduled_time_of_departure`, `scheduled_time_of_arrival`, `actual_time_of_departure`, `actual_time_of_arrival`, `from_airport`, `to_airport`, `airline`, `aircraft`) VALUES (12, 'AA1579', '2022-05-07 06:45:00', '2022-05-07 09:09:00', '2022-05-07 07:07:00', '2022-05-07 14:13:00', 'Dallas/Fort Worth International Airport', 'O\'Hare International Airport', 'American Airlines', 'Airbus A321-253NX');

COMMIT;


-- -----------------------------------------------------
-- Data for table `airline`
-- -----------------------------------------------------
START TRANSACTION;
USE `flightdb`;
INSERT INTO `airline` (`id`, `name`) VALUES (1, 'American Airlines');

COMMIT;


-- -----------------------------------------------------
-- Data for table `aircraft`
-- -----------------------------------------------------
START TRANSACTION;
USE `flightdb`;
INSERT INTO `aircraft` (`id`, `name`) VALUES (1, 'Airbus A321-253NX');

COMMIT;

