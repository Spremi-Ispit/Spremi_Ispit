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
-- Table structure for table `tutor_subject`
--

DROP TABLE IF EXISTS `tutor_subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutor_subject` (
  `id` int NOT NULL AUTO_INCREMENT,
  `isEnabled` tinyint NOT NULL DEFAULT '1',
  `tutorId` int DEFAULT NULL,
  `subjectId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_2f3a26cf045d0ab42de39247f24` (`tutorId`),
  KEY `FK_fb0853d9629eb82347718d89d61` (`subjectId`),
  CONSTRAINT `FK_2f3a26cf045d0ab42de39247f24` FOREIGN KEY (`tutorId`) REFERENCES `tutor` (`id`),
  CONSTRAINT `FK_fb0853d9629eb82347718d89d61` FOREIGN KEY (`subjectId`) REFERENCES `subject` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutor_subject`
--

LOCK TABLES `tutor_subject` WRITE;
/*!40000 ALTER TABLE `tutor_subject` DISABLE KEYS */;
INSERT INTO `tutor_subject` VALUES (1,1,1,26),(2,1,2,13),(3,1,2,12),(4,1,2,14),(5,1,2,15),(6,1,1,16),(7,0,1,27),(8,1,1,13);
/*!40000 ALTER TABLE `tutor_subject` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 17:23:55
