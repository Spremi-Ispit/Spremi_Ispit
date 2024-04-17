-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spremiis_dev
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tutoring_request`
--

DROP TABLE IF EXISTS `tutoring_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutoring_request` (
  `id` int NOT NULL AUTO_INCREMENT,
  `isFinished` tinyint NOT NULL DEFAULT '0',
  `isCanceled` tinyint NOT NULL DEFAULT '0',
  `rating` int NOT NULL DEFAULT '0',
  `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `tutorId` int DEFAULT NULL,
  `subjectId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_dcc0eee8bdd9912908c61845876` (`tutorId`),
  KEY `FK_04be76855537f91a4aacf8bc2e1` (`subjectId`),
  CONSTRAINT `FK_04be76855537f91a4aacf8bc2e1` FOREIGN KEY (`subjectId`) REFERENCES `subject` (`id`),
  CONSTRAINT `FK_dcc0eee8bdd9912908c61845876` FOREIGN KEY (`tutorId`) REFERENCES `tutor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutoring_request`
--

LOCK TABLES `tutoring_request` WRITE;
/*!40000 ALTER TABLE `tutoring_request` DISABLE KEYS */;
INSERT INTO `tutoring_request` VALUES (1,0,0,0,'2024-04-11 23:14:28.488174',2,12),(2,0,0,0,'2024-04-11 23:30:22.029052',1,12);
/*!40000 ALTER TABLE `tutoring_request` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 17:23:51
