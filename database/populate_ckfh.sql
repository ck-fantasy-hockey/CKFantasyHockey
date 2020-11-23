-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ckfantasyhockey
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `leagues`
--

DROP TABLE IF EXISTS `leagues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leagues` (
  `leagueID` int NOT NULL AUTO_INCREMENT,
  `leagueName` varchar(255) DEFAULT NULL,
  `visibility` enum('public','private') DEFAULT 'public',
  `seasonEnds` date NOT NULL,
  PRIMARY KEY (`leagueID`),
  UNIQUE KEY `leagueID` (`leagueID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leagues`
--

LOCK TABLES `leagues` WRITE;
/*!40000 ALTER TABLE `leagues` DISABLE KEYS */;
INSERT INTO `leagues` (`leagueID`, `leagueName`, `visibility`, `seasonEnds`) VALUES (1,'Glorius Gophers','public','2021-11-10'),(2,'Tameable Tigers','private','2022-05-18'),(3,'Fancy Flies','public','2021-12-30'),(4,'Heavenly Herons','public','2021-03-18'),(5,'Juggernaut Jellyfish','public','2022-01-04'),(6,'Severe Snakes','public','2021-08-13');
/*!40000 ALTER TABLE `leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leaguesplayers`
--

DROP TABLE IF EXISTS `leaguesplayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leaguesplayers` (
  `leagueID` int NOT NULL,
  `playerID` int NOT NULL,
  PRIMARY KEY (`leagueID`,`playerID`),
  KEY `playerID` (`playerID`),
  CONSTRAINT `leaguesplayers_ibfk_1` FOREIGN KEY (`leagueID`) REFERENCES `leagues` (`leagueID`),
  CONSTRAINT `leaguesplayers_ibfk_2` FOREIGN KEY (`playerID`) REFERENCES `players` (`playerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaguesplayers`
--

LOCK TABLES `leaguesplayers` WRITE;
/*!40000 ALTER TABLE `leaguesplayers` DISABLE KEYS */;
INSERT INTO `leaguesplayers` (`leagueID`, `playerID`) VALUES (1,1),(2,1),(1,2),(2,2),(1,3),(2,3),(1,4),(2,4),(1,5),(2,5),(1,6),(2,6),(1,7),(2,7),(1,8),(2,8),(1,9),(2,9),(1,10),(2,10),(1,11),(2,11),(1,12),(2,12),(1,13),(2,13),(1,14),(2,14),(1,15),(2,15);
/*!40000 ALTER TABLE `leaguesplayers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `playerID` int NOT NULL AUTO_INCREMENT,
  `playerName` varchar(255) NOT NULL,
  `team` varchar(255) NOT NULL,
  `status` enum('injured','injured reserve','suspended','active') NOT NULL,
  `position` varchar(255) NOT NULL,
  `gamesPlayed` int NOT NULL,
  `goals` int DEFAULT NULL,
  `assists` int DEFAULT NULL,
  `points` int DEFAULT NULL,
  `gameWinningGoals` int DEFAULT NULL,
  `hatTricks` int DEFAULT NULL,
  `plusMinus` int DEFAULT NULL,
  `pointsPerGame` int DEFAULT NULL,
  `shorthandedGoals` int DEFAULT NULL,
  `penaltyMinutes` int DEFAULT NULL,
  `blocks` int DEFAULT NULL,
  `wins` int DEFAULT NULL,
  `losses` int DEFAULT NULL,
  `overtimeLosses` int DEFAULT NULL,
  `shutOuts` int DEFAULT NULL,
  `goalsAllowedAverage` decimal(4,3) DEFAULT NULL,
  `goalsAllowed` int DEFAULT NULL,
  `saves` int DEFAULT NULL,
  `savePercentage` decimal(4,3) DEFAULT NULL,
  `minutesPlayed` varchar(255) DEFAULT NULL,
  `shootoutGoals` int DEFAULT NULL,
  PRIMARY KEY (`playerID`),
  UNIQUE KEY `playerID` (`playerID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` (`playerID`, `playerName`, `team`, `status`, `position`, `gamesPlayed`, `goals`, `assists`, `points`, `gameWinningGoals`, `hatTricks`, `plusMinus`, `pointsPerGame`, `shorthandedGoals`, `penaltyMinutes`, `blocks`, `wins`, `losses`, `overtimeLosses`, `shutOuts`, `goalsAllowedAverage`, `goalsAllowed`, `saves`, `savePercentage`, `minutesPlayed`, `shootoutGoals`) VALUES (1,'Travis Zajac','New Jersey Devils','injured','Center',69,9,16,25,1,NULL,-12,NULL,1,28,39,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1179:36',NULL),(2,'P.K. Subban','New Jersey Devils','injured','Defenseman',68,7,11,18,3,NULL,-21,NULL,0,79,90,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1504:25',NULL),(3,'Kyle Palmieri','New Jersey Devils','injured','Right Wing',65,25,20,45,3,NULL,-4,NULL,0,41,36,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1112:11',NULL),(4,'Dmitry Kulikov','New Jersey Devils','injured','Defenseman',51,2,8,10,1,NULL,-4,NULL,0,32,77,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1020:59',NULL),(5,'Ryan Murray','New Jersey Devils','injured','Defenseman',27,2,7,9,0,NULL,-9,NULL,0,4,50,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'538:48',NULL),(6,'Damon Severson','New Jersey Devils','injured','Defenseman',69,8,23,31,2,NULL,-20,NULL,0,52,97,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1584:26',NULL),(7,'Connor Carrick','New Jersey Devils','injured','Defenseman',29,1,5,6,1,NULL,-6,NULL,0,17,39,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'417:53',NULL),(8,'Nikita Gusev','New Jersey Devils','injured','Left Wing',66,13,31,44,2,NULL,-15,NULL,0,12,7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'969:45',NULL),(9,'Andreas Johnsson','New Jersey Devils','injured','Left Wing',43,8,13,21,1,NULL,0,NULL,0,14,21,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'677:27',NULL),(10,'Will Butcher','New Jersey Devils','injured','Defenseman',56,4,17,21,1,NULL,-8,NULL,0,6,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1003:22',NULL),(11,'Miles Wood','New Jersey Devils','injured','Left Wing',68,11,12,23,1,NULL,-19,NULL,0,57,26,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'899:52',NULL),(12,'Pavel Zacha','New Jersey Devils','injured','Center',65,8,24,32,1,NULL,-12,NULL,2,14,19,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1057:23',NULL),(13,'Jesper Bratt','New Jersey Devils','injured','Left Wing',60,16,16,32,2,NULL,-6,NULL,0,6,22,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'838:58',NULL),(14,'Michael McLeod','New Jersey Devils','injured','Center',12,0,2,2,0,NULL,4,NULL,0,4,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'122:45',NULL),(15,'Nico Hischier','New Jersey Devils','injured','Center',58,14,22,36,1,NULL,-16,NULL,1,12,37,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1047:32',NULL),(16,'Jack Hughes','New Jersey Devils','injured','Center',61,7,14,21,2,NULL,-26,NULL,0,10,21,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'967:47',NULL);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `teamID` int NOT NULL AUTO_INCREMENT,
  `teamName` varchar(255) NOT NULL,
  `userID` int DEFAULT NULL,
  `leagueID` int DEFAULT NULL,
  PRIMARY KEY (`teamID`),
  UNIQUE KEY `teamID` (`teamID`),
  KEY `userID` (`userID`),
  KEY `leagueID` (`leagueID`),
  CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`),
  CONSTRAINT `teams_ibfk_2` FOREIGN KEY (`leagueID`) REFERENCES `leagues` (`leagueID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` (`teamID`, `teamName`, `userID`, `leagueID`) VALUES (1,'The Big One',2,1),(2,'Savior Swiss',2,2),(3,'Fire and Fury',3,1),(4,'Better Late!',4,1),(5,'Timid Tony',3,2),(6,'The Fashionistas',4,2);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teamsplayers`
--

DROP TABLE IF EXISTS `teamsplayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teamsplayers` (
  `teamID` int NOT NULL,
  `playerID` int NOT NULL,
  PRIMARY KEY (`teamID`,`playerID`),
  KEY `playerID` (`playerID`),
  CONSTRAINT `teamsplayers_ibfk_1` FOREIGN KEY (`teamID`) REFERENCES `teams` (`teamID`),
  CONSTRAINT `teamsplayers_ibfk_2` FOREIGN KEY (`playerID`) REFERENCES `players` (`playerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teamsplayers`
--

LOCK TABLES `teamsplayers` WRITE;
/*!40000 ALTER TABLE `teamsplayers` DISABLE KEYS */;
INSERT INTO `teamsplayers` (`teamID`, `playerID`) VALUES (1,1),(2,1),(1,2),(2,2),(1,3),(2,3),(1,4),(2,4),(1,5),(2,5),(3,6),(5,6),(3,7),(5,7),(3,8),(5,8),(3,9),(5,9),(3,10),(5,10),(4,11),(6,11),(4,12),(6,12),(4,13),(6,13),(4,14),(6,14),(4,15),(6,15);
/*!40000 ALTER TABLE `teamsplayers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(24) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(24) NOT NULL,
  `email` varchar(255) NOT NULL,
  `sessionID` varchar(255) DEFAULT NULL,
  `sessionExpires` datetime DEFAULT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`userID`, `userName`, `password`, `email`, `sessionID`, `sessionExpires`) VALUES (1,'ckadmin','admin','admin@ckfantasyhockey.com','HTdzXil6LY','2020-11-15 20:53:19'),(2,'wcoiner','william','wcoiner@ckfantasyhockey.com','MNxGK8KV0K','2020-11-16 16:54:53'),(3,'gkochera','george','5ZY82qX7sW','gkochera@ckfantasyhockey.com','2020-11-17 16:55:42'),(4,'bsmith','brandon','kAob9UpoRd','bsmith100@gmail.com','2020-11-15 22:56:16');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-19 22:08:19
