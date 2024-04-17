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
-- Table structure for table `subjectondepartment`
--

DROP TABLE IF EXISTS `subjectondepartment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjectondepartment` (
  `subjectId` int NOT NULL,
  `departmentId` int NOT NULL,
  PRIMARY KEY (`subjectId`,`departmentId`),
  KEY `IDX_f031fcfd63f827df5666909f80` (`subjectId`),
  KEY `IDX_3928ff3ae2b51bf356c7846719` (`departmentId`),
  CONSTRAINT `FK_3928ff3ae2b51bf356c78467198` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_f031fcfd63f827df5666909f80a` FOREIGN KEY (`subjectId`) REFERENCES `subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjectondepartment`
--

LOCK TABLES `subjectondepartment` WRITE;
/*!40000 ALTER TABLE `subjectondepartment` DISABLE KEYS */;
INSERT INTO `subjectondepartment` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,2),(13,2),(14,2),(15,2),(16,2),(17,2),(18,2),(19,2),(20,2),(21,2),(22,2),(23,2),(24,2),(25,2),(26,3),(27,3),(28,3),(29,3),(30,3),(31,3),(32,3),(33,3),(34,3),(35,3),(36,4),(37,4),(38,4),(39,4),(40,4),(41,4),(42,4),(43,4),(44,4),(45,5),(46,5),(47,5),(48,5),(49,5),(50,5),(51,5),(52,5),(53,5),(54,6),(55,6),(56,6),(57,6),(58,6),(59,6),(60,6),(61,6),(62,6),(63,7),(64,7),(65,7),(66,7),(67,7),(68,7),(69,7),(70,7),(71,7),(72,7),(73,7),(74,7),(75,7),(76,2),(77,2),(78,2),(79,2),(80,2),(81,2),(82,2),(83,2),(84,2),(85,2),(86,2),(87,2),(88,2),(89,2),(90,2),(91,2),(92,2),(93,2),(94,3),(95,3),(96,3),(97,3),(98,3),(99,3),(100,3),(101,3),(102,3),(103,3),(104,3),(105,3),(106,3),(107,3),(108,3),(109,3),(110,3),(111,3),(112,3),(113,3),(114,3),(115,3),(116,3),(117,3),(118,4),(119,4),(120,4),(121,4),(122,4),(123,4),(124,5),(125,5),(126,6),(127,6),(128,6),(129,6),(130,6),(131,6),(132,6),(133,7),(134,7),(135,7),(136,7),(137,7),(138,7),(139,7),(140,7),(141,7),(142,2),(143,2),(144,2),(145,2),(146,2),(147,2),(148,2),(149,2),(150,2),(151,2),(152,2),(153,2),(154,2),(155,2),(156,2),(157,2),(158,3),(159,3),(160,3),(161,3),(162,3),(163,3),(164,3),(165,3),(166,3),(167,3),(168,3),(169,3),(170,3),(171,3),(172,3),(173,3),(174,3),(175,3),(176,3),(177,3),(178,3),(179,3),(180,4),(181,4),(182,4),(183,4),(184,4),(185,4),(186,4),(187,5),(188,5),(189,5),(190,5),(191,5),(192,6),(193,6),(194,6),(195,6),(196,6),(197,6),(198,7),(199,7),(200,7),(201,7),(202,7),(203,7),(204,7),(205,5),(206,5),(207,5),(208,5),(209,5),(210,5),(211,5),(212,5),(213,5),(214,5),(215,5),(216,5),(217,5),(218,5),(219,5),(220,5),(221,5),(222,5),(223,5),(224,5),(225,5),(226,5),(227,5),(228,5),(229,5),(230,5),(231,5),(232,5),(233,5),(234,5),(235,5),(236,5),(237,5),(238,5),(239,5),(240,5),(241,5),(242,5),(243,5),(244,5),(245,5),(246,5),(247,5),(248,5),(249,5),(250,5),(251,5),(252,5),(253,5),(254,5),(255,5),(256,5),(257,5),(258,5),(259,5),(260,5),(261,5),(262,5),(263,5),(264,5),(265,5),(266,5),(267,5),(268,5),(269,5),(270,5),(271,5),(272,5);
/*!40000 ALTER TABLE `subjectondepartment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 17:24:00
