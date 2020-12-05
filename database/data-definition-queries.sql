-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: us-cdbr-east-02.cleardb.com    Database: heroku_356a05812d22760
-- ------------------------------------------------------
-- Server version	5.5.62-log

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
  `leagueID` int(11) NOT NULL AUTO_INCREMENT,
  `leagueName` varchar(255) DEFAULT NULL,
  `visibility` enum('private','public') NOT NULL,
  `seasonEnds` date NOT NULL,
  PRIMARY KEY (`leagueID`),
  UNIQUE KEY `leagueID` (`leagueID`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leagues`
--

LOCK TABLES `leagues` WRITE;
/*!40000 ALTER TABLE `leagues` DISABLE KEYS */;
INSERT INTO `leagues` VALUES (1,'Glorius Gremlins','public','2021-05-24'),(11,'Tepid Tigers','public','2021-05-24'),(21,'Screeching Seaguls','public','2021-05-24'),(31,'Boring Barons','public','2021-05-24'),(41,'Hilarious Hens','private','2021-05-24'),(51,'Perilous Pirannas','public','2021-05-24'),(61,'Test League','private','2021-05-26');
/*!40000 ALTER TABLE `leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leaguesplayers`
--

DROP TABLE IF EXISTS `leaguesplayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leaguesplayers` (
  `leagueID` int(11) NOT NULL DEFAULT '0',
  `playerID` int(11) NOT NULL DEFAULT '0',
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
INSERT INTO `leaguesplayers` VALUES (1,1),(11,1),(21,1),(1,11),(11,11),(51,11),(1,21),(11,21),(51,21),(11,31),(21,31),(1,41),(21,41),(1,51),(11,51),(21,51),(51,51),(1,61),(21,61),(1,71),(11,71),(21,71),(51,71),(1,81),(11,81),(21,81),(1,91),(11,91),(21,91),(1,101),(11,101),(1,111),(11,111),(21,111),(1,121),(11,121),(21,121),(1,131),(21,131),(1,141),(21,141),(51,141),(1,151),(21,151);
/*!40000 ALTER TABLE `leaguesplayers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `playerID` int(11) NOT NULL AUTO_INCREMENT,
  `playerName` varchar(255) NOT NULL,
  `team` varchar(255) NOT NULL,
  `status` enum('injured','injured reserve','suspended','active') NOT NULL,
  `position` varchar(255) NOT NULL,
  `gamesPlayed` int(11) NOT NULL,
  `goals` int(11) DEFAULT NULL,
  `assists` int(11) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `gameWinningGoals` int(11) DEFAULT NULL,
  `hatTricks` int(11) DEFAULT NULL,
  `plusMinus` int(11) DEFAULT NULL,
  `pointsPerGame` int(11) DEFAULT NULL,
  `shorthandedGoals` int(11) DEFAULT NULL,
  `penaltyMinutes` int(11) DEFAULT NULL,
  `blocks` int(11) DEFAULT NULL,
  `wins` int(11) DEFAULT NULL,
  `losses` int(11) DEFAULT NULL,
  `overtimeLosses` int(11) DEFAULT NULL,
  `shutOuts` int(11) DEFAULT NULL,
  `goalsAllowedAverage` decimal(4,3) DEFAULT NULL,
  `goalsAllowed` int(11) DEFAULT NULL,
  `saves` int(11) DEFAULT NULL,
  `savePercentage` decimal(4,3) DEFAULT NULL,
  `minutesPlayed` varchar(255) DEFAULT NULL,
  `shootoutGoals` int(11) DEFAULT NULL,
  PRIMARY KEY (`playerID`),
  UNIQUE KEY `playerID` (`playerID`)
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,'Travis Zajac','New Jersey Devils','injured','Center',69,9,16,25,1,NULL,-12,NULL,1,28,39,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1179:36',NULL),(11,'P.K. Subban','New Jersey Devils','injured','Defenseman',68,7,11,18,3,NULL,-21,NULL,0,79,90,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1504:25',NULL),(21,'Kyle Palmieri','New Jersey Devils','injured','Right Wing',65,25,20,45,3,NULL,-4,NULL,0,41,36,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1112:11',NULL),(31,'Dmitry Kulikov','New Jersey Devils','injured','Defenseman',51,2,8,10,1,NULL,-4,NULL,0,32,77,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1020:59',NULL),(41,'Ryan Murray','New Jersey Devils','injured','Defenseman',27,2,7,9,0,NULL,-9,NULL,0,4,50,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'538:48',NULL),(51,'Damon Severson','New Jersey Devils','injured','Defenseman',69,8,23,31,2,NULL,-20,NULL,0,52,97,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1584:26',NULL),(61,'Connor Carrick','New Jersey Devils','injured','Defenseman',29,1,5,6,1,NULL,-6,NULL,0,17,39,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'417:53',NULL),(71,'Nikita Gusev','New Jersey Devils','injured','Left Wing',66,13,31,44,2,NULL,-15,NULL,0,12,7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'969:45',NULL),(81,'Andreas Johnsson','New Jersey Devils','injured','Left Wing',43,8,13,21,1,NULL,0,NULL,0,14,21,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'677:27',NULL),(91,'Will Butcher','New Jersey Devils','injured','Defenseman',56,4,17,21,1,NULL,-8,NULL,0,6,75,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1003:22',NULL),(101,'Miles Wood','New Jersey Devils','injured','Left Wing',68,11,12,23,1,NULL,-19,NULL,0,57,26,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'899:52',NULL),(111,'Pavel Zacha','New Jersey Devils','injured','Center',65,8,24,32,1,NULL,-12,NULL,2,14,19,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1057:23',NULL),(121,'Jesper Bratt','New Jersey Devils','injured','Left Wing',60,16,16,32,2,NULL,-6,NULL,0,6,22,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'838:58',NULL),(131,'Michael McLeod','New Jersey Devils','injured','Center',12,0,2,2,0,NULL,4,NULL,0,4,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'122:45',NULL),(141,'Nico Hischier','New Jersey Devils','injured','Center',58,14,22,36,1,NULL,-16,NULL,1,12,37,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1047:32',NULL),(151,'Jack Hughes','New Jersey Devils','injured','Center',61,7,14,21,2,NULL,-26,NULL,0,10,21,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'967:47',NULL),(161,'Travis','','','',0,0,0,0,0,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'',NULL);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `teamID` int(11) NOT NULL AUTO_INCREMENT,
  `teamName` varchar(255) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `leagueID` int(11) DEFAULT NULL,
  PRIMARY KEY (`teamID`),
  UNIQUE KEY `teamID` (`teamID`),
  KEY `leagueID` (`leagueID`),
  KEY `teams_ibfk_1` (`userID`),
  CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE,
  CONSTRAINT `teams_ibfk_2` FOREIGN KEY (`leagueID`) REFERENCES `leagues` (`leagueID`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'The Big Cheese',11,21),(11,'Mavericks',11,11),(21,'go time',21,51),(31,'Fearless Foxes',1,21),(41,'ThatGuysTeam',41,1),(51,'ThatGuysTeam',41,1),(61,'you snooze, you hughes',51,1),(71,'TestTeam',11,31),(81,'hi',81,51),(91,'woo',91,11),(111,'Catnap',101,1),(131,'mayma',111,31);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teamsplayers`
--

DROP TABLE IF EXISTS `teamsplayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teamsplayers` (
  `teamID` int(11) NOT NULL DEFAULT '0',
  `playerID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`teamID`,`playerID`),
  KEY `playerID` (`playerID`),
  CONSTRAINT `teamsplayers_ibfk_1` FOREIGN KEY (`teamID`) REFERENCES `teams` (`teamID`) ON DELETE CASCADE,
  CONSTRAINT `teamsplayers_ibfk_2` FOREIGN KEY (`playerID`) REFERENCES `players` (`playerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teamsplayers`
--

LOCK TABLES `teamsplayers` WRITE;
/*!40000 ALTER TABLE `teamsplayers` DISABLE KEYS */;
INSERT INTO `teamsplayers` VALUES (11,1),(31,1),(41,1),(21,11),(61,11),(91,11),(11,21),(21,21),(61,21),(31,31),(91,31),(1,41),(41,41),(1,51),(11,51),(21,51),(111,51),(31,61),(111,61),(1,71),(11,71),(21,71),(111,71),(1,81),(11,81),(111,81),(1,91),(11,91),(111,91),(11,101),(111,101),(11,111),(31,111),(41,111),(1,121),(91,121),(111,121),(1,131),(111,131),(21,141),(31,141),(111,141),(31,151),(61,151);
/*!40000 ALTER TABLE `teamsplayers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(24) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `sessionID` varchar(255) DEFAULT NULL,
  `sessionExpires` datetime DEFAULT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'gkochera','abc123','kocherag@oregonstate.edu',NULL,NULL),(11,'testuser','ckfantasy','test@test2.com',NULL,NULL),(21,'','','',NULL,NULL),(31,'mcfarlti','qwop','mcfarlti@oregonstate.edu',NULL,NULL),(41,'thatguy','notapassword','thatguy@thatguy.com',NULL,NULL),(51,'akeogh11','test1234','keogha@oregonstate.edu',NULL,NULL),(61,'picklerick','1234','wubalubbadubdub@gmail.com',NULL,NULL),(71,'Morty','56789','wubalubbadubdub@gmail.com',NULL,NULL),(81,'ed','123','rf@gmail.com',NULL,NULL),(91,'johndoe','pw','johndoe@example.com',NULL,NULL),(101,'Eddie the Cat','catn!p','eddie@catsgobrr.org',NULL,NULL),(111,'mayma','1234','mayma@oregonstate.edu',NULL,NULL),(121,'testUser1','hokcey\'sprettycool','test@testing.com',NULL,NULL),(141,'wmarshall','abc123','wmarshall@gmail.com',NULL,NULL),(151,'Thartman','abc','thartman@ptu.edu',NULL,NULL),(161,'gsmith','123','gsmith@future.org',NULL,NULL),(171,'test','test','test@test.com',NULL,NULL);
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

-- Dump completed on 2020-12-04 20:09:56
