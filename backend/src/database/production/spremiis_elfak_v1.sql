-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: spremiis_elfak
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `blacklist`
--

DROP TABLE IF EXISTS `blacklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blacklist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(128) NOT NULL,
  `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_da3713eb36ad72d1815adbc256` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blacklist`
--

LOCK TABLES `blacklist` WRITE;
/*!40000 ALTER TABLE `blacklist` DISABLE KEYS */;
/*!40000 ALTER TABLE `blacklist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(1000) NOT NULL,
  `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `userId` int DEFAULT NULL,
  `postId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c0354a9a009d3bb45a08655ce3b` (`userId`),
  KEY `FK_94a85bb16d24033a2afdd5df060` (`postId`),
  FULLTEXT KEY `IDX_84eaa1e0d08e574fb78fd3c9b3` (`text`),
  CONSTRAINT `FK_94a85bb16d24033a2afdd5df060` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_c0354a9a009d3bb45a08655ce3b` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentDislikedBy`
--

DROP TABLE IF EXISTS `commentDislikedBy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentDislikedBy` (
  `commentId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`commentId`,`userId`),
  KEY `IDX_1a7326d0c476eb8c6dea4342e9` (`commentId`),
  KEY `IDX_f6c7493c4c56d424cdeae97905` (`userId`),
  CONSTRAINT `FK_1a7326d0c476eb8c6dea4342e94` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_f6c7493c4c56d424cdeae979051` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentDislikedBy`
--

LOCK TABLES `commentDislikedBy` WRITE;
/*!40000 ALTER TABLE `commentDislikedBy` DISABLE KEYS */;
/*!40000 ALTER TABLE `commentDislikedBy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentLikedBy`
--

DROP TABLE IF EXISTS `commentLikedBy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentLikedBy` (
  `commentId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`commentId`,`userId`),
  KEY `IDX_4ac0f8444ca446e68c9961cf6a` (`commentId`),
  KEY `IDX_db39f1f69436aa2a9186cd2d97` (`userId`),
  CONSTRAINT `FK_4ac0f8444ca446e68c9961cf6a8` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_db39f1f69436aa2a9186cd2d971` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentLikedBy`
--

LOCK TABLES `commentLikedBy` WRITE;
/*!40000 ALTER TABLE `commentLikedBy` DISABLE KEYS */;
/*!40000 ALTER TABLE `commentLikedBy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentReportedBy`
--

DROP TABLE IF EXISTS `commentReportedBy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentReportedBy` (
  `commentId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`commentId`,`userId`),
  KEY `IDX_c9e6547ad3911dced6e3c894b6` (`commentId`),
  KEY `IDX_763d0df509638976b6e134d6ba` (`userId`),
  CONSTRAINT `FK_763d0df509638976b6e134d6ba8` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_c9e6547ad3911dced6e3c894b6a` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentReportedBy`
--

LOCK TABLES `commentReportedBy` WRITE;
/*!40000 ALTER TABLE `commentReportedBy` DISABLE KEYS */;
/*!40000 ALTER TABLE `commentReportedBy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment_file`
--

DROP TABLE IF EXISTS `comment_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ext` varchar(256) NOT NULL,
  `path` varchar(256) NOT NULL,
  `commentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_cc8be13ff4e856f0baa0917c556` (`commentId`),
  CONSTRAINT `FK_cc8be13ff4e856f0baa0917c556` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_file`
--

LOCK TABLES `comment_file` WRITE;
/*!40000 ALTER TABLE `comment_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_471da4b90e96c1ebe0af221e07` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (7,'Elektroenergetika'),(5,'Elektronika i mikroprocesorska tehnika'),(6,'Elektronske komponente i mikrosistemi'),(1,'Opšti'),(2,'Računarstvo i informatika'),(4,'Telekomunikacije'),(3,'Upravljanje sistemima');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department_subjects_subject`
--

DROP TABLE IF EXISTS `department_subjects_subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department_subjects_subject` (
  `departmentId` int NOT NULL,
  `subjectId` int NOT NULL,
  PRIMARY KEY (`departmentId`,`subjectId`),
  KEY `IDX_91a85c8bc25238fab439e85ff9` (`departmentId`),
  KEY `IDX_ababb65b4144d62ab4c84d8b35` (`subjectId`),
  CONSTRAINT `FK_91a85c8bc25238fab439e85ff9a` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ababb65b4144d62ab4c84d8b355` FOREIGN KEY (`subjectId`) REFERENCES `subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department_subjects_subject`
--

LOCK TABLES `department_subjects_subject` WRITE;
/*!40000 ALTER TABLE `department_subjects_subject` DISABLE KEYS */;
/*!40000 ALTER TABLE `department_subjects_subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examination_period`
--

DROP TABLE IF EXISTS `examination_period`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examination_period` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_04312cf675d27088b9409e7756` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examination_period`
--

LOCK TABLES `examination_period` WRITE;
/*!40000 ALTER TABLE `examination_period` DISABLE KEYS */;
INSERT INTO `examination_period` VALUES (3,'April'),(9,'Decembar'),(1,'Januar'),(4,'Jun'),(5,'Jun2'),(2,'Mart'),(7,'Oktobar'),(8,'Oktobar2'),(6,'Septembar');
/*!40000 ALTER TABLE `examination_period` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(1000) NOT NULL,
  `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `title` varchar(100) NOT NULL,
  `userId` int DEFAULT NULL,
  `subjectId` int DEFAULT NULL,
  `typeId` int DEFAULT NULL,
  `yearOfExamId` int DEFAULT NULL,
  `examinationPeriodId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5c1cf55c308037b5aca1038a131` (`userId`),
  KEY `FK_e1b114a8be985356d01aa1095ce` (`subjectId`),
  KEY `FK_593707a0d30fe8797406a244637` (`typeId`),
  KEY `FK_cae3c77918fd0f799287c56ddc5` (`yearOfExamId`),
  KEY `FK_c5d21127de060d3be2e046d2c21` (`examinationPeriodId`),
  FULLTEXT KEY `IDX_d604d2a0b35bdf7f3f827a47e8` (`text`),
  FULLTEXT KEY `IDX_e28aa0c4114146bfb1567bfa9a` (`title`),
  CONSTRAINT `FK_593707a0d30fe8797406a244637` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_5c1cf55c308037b5aca1038a131` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_c5d21127de060d3be2e046d2c21` FOREIGN KEY (`examinationPeriodId`) REFERENCES `examination_period` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_cae3c77918fd0f799287c56ddc5` FOREIGN KEY (`yearOfExamId`) REFERENCES `year_of_exam` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_e1b114a8be985356d01aa1095ce` FOREIGN KEY (`subjectId`) REFERENCES `subject` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postDislikedBy`
--

DROP TABLE IF EXISTS `postDislikedBy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postDislikedBy` (
  `postId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`postId`,`userId`),
  KEY `IDX_b94fda9787916409afce3e5fd2` (`postId`),
  KEY `IDX_b8ae0321f88061b96173603810` (`userId`),
  CONSTRAINT `FK_b8ae0321f88061b961736038106` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_b94fda9787916409afce3e5fd22` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postDislikedBy`
--

LOCK TABLES `postDislikedBy` WRITE;
/*!40000 ALTER TABLE `postDislikedBy` DISABLE KEYS */;
/*!40000 ALTER TABLE `postDislikedBy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postLikedBy`
--

DROP TABLE IF EXISTS `postLikedBy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postLikedBy` (
  `postId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`postId`,`userId`),
  KEY `IDX_33ea3c4e1b9bb4332d23c07544` (`postId`),
  KEY `IDX_3dd7c47b53bfe0dd2f168f8211` (`userId`),
  CONSTRAINT `FK_33ea3c4e1b9bb4332d23c07544d` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_3dd7c47b53bfe0dd2f168f82114` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postLikedBy`
--

LOCK TABLES `postLikedBy` WRITE;
/*!40000 ALTER TABLE `postLikedBy` DISABLE KEYS */;
/*!40000 ALTER TABLE `postLikedBy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postReportedBy`
--

DROP TABLE IF EXISTS `postReportedBy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postReportedBy` (
  `postId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`postId`,`userId`),
  KEY `IDX_fe0999fd64ef4c9e881ea8ec57` (`postId`),
  KEY `IDX_c6dc7dce3b06939eb4db213795` (`userId`),
  CONSTRAINT `FK_c6dc7dce3b06939eb4db2137952` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_fe0999fd64ef4c9e881ea8ec575` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postReportedBy`
--

LOCK TABLES `postReportedBy` WRITE;
/*!40000 ALTER TABLE `postReportedBy` DISABLE KEYS */;
/*!40000 ALTER TABLE `postReportedBy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_file`
--

DROP TABLE IF EXISTS `post_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ext` varchar(256) NOT NULL,
  `path` varchar(256) NOT NULL,
  `postId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_e64c8840cd4cf48791f0642a8c3` (`postId`),
  CONSTRAINT `FK_e64c8840cd4cf48791f0642a8c3` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_file`
--

LOCK TABLES `post_file` WRITE;
/*!40000 ALTER TABLE `post_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=205 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES (1,'Algoritmi i programiranje'),(2,'Elektronske komponente'),(3,'Fizika'),(4,'Laboratorijski praktikum - Fizika'),(5,'Matematika I'),(6,'Matematika II'),(7,'Osnovi elektrotehnike I'),(8,'Osnovi elektrotehnike II'),(9,'Uvod u elektroniku'),(10,'Uvod u inženjerstvo'),(11,'Uvod u računarstvo'),(12,'Arhitektura i organizacija računara'),(13,'Arhitektura i organizacija računara 1'),(14,'Arhitektura i organizacija računara 2'),(15,'Baze podataka'),(16,'Digitalna elektronika'),(17,'Diskretna matematika'),(18,'Logičko projektovanje'),(19,'Matematički metodi u računarstvu'),(20,'Objektno orijentisano programiranje'),(21,'Programski jezici'),(22,'Računarski sistemi'),(23,'Strukture podataka'),(24,'Teorija grafova'),(25,'Verovatnoća i statistika'),(26,'Digitalna elektronika'),(27,'Električna kola'),(28,'Linearni sistemi automatskog upravljanja'),(29,'Matematika III'),(30,'Metrologija električnih veličina'),(31,'Mikrokontroleri i programiranje'),(32,'Modeliranje i simulacija dinamičkih sistema'),(33,'Operaciona istraživanja'),(34,'Osnovi elektronike'),(35,'Računarski sistemi'),(36,'Digitalna elektronika'),(37,'Električna kola i signali'),(38,'Elektromagnetika-odabrana poglavlja'),(39,'Matematika 4'),(40,'Matematika III'),(41,'Osnovi elektronike'),(42,'Osnovi mikrotalasne tehnike'),(43,'Osnovi telekomunikacija'),(44,'Teorija telekomunikacija'),(45,'Analogna elektronika'),(46,'Digitalna elektronika'),(47,'Digitalna obrada signala'),(48,'Električna i elektronska merenja'),(49,'Matematika III'),(50,'Objektno orijentisane tehnike projektovanja sistema'),(51,'Osnovi elektronike'),(52,'Signali i sistemi'),(53,'Telekomunikacije'),(54,'Matematika III'),(55,'Materijali za elektroniku'),(56,'Metrologija električnih veličina'),(57,'Osnovi elektronike'),(58,'Osnovi optike'),(59,'Poluprovodničke komponente'),(60,'Projektovanje materijala za elektroniku'),(61,'Signali i sistemi'),(62,'Telekomunikacije'),(63,'Distributivne i industrijske mreže'),(64,'Električna kola'),(65,'Električne instalacije'),(66,'Elektromehaničko pretvaranje energije'),(67,'Elektrotehnički materijali'),(68,'Matematika III'),(69,'Merenja u elektroenergetici'),(70,'Metrologija električnih veličina'),(71,'Modeliranje i simulacija dinamičkih sistema'),(72,'Osnovi elektronike'),(73,'Prenos električne energije'),(74,'Tehnička mehanika'),(75,'Transformatori i mašine jednosmerne struje'),(76,'Automatsko upravljanje'),(77,'Distribuirani sistemi'),(78,'Elektronska merenja'),(79,'Engleski jezik I'),(80,'Engleski jezik II'),(81,'Informacioni sistemi'),(82,'Interakcija čovek-računar'),(83,'Mikroračunarski sistemi'),(84,'Objektno orijentisano projektovanje'),(85,'Operativni sistemi'),(86,'Osnovi analize signala i sistema'),(87,'Projektovanje i analiza algoritama'),(88,'Računarske mreže'),(89,'Sistemi baza podataka'),(90,'Softversko inženjerstvo'),(91,'Telekomunikacije'),(92,'Uvod u teoriju igara'),(93,'Web programiranje'),(94,'Baze podataka'),(95,'Bežični komunikacioni sistemi'),(96,'Digitalna obrada signala'),(97,'Digitalni sistemi automatskog upravljanja'),(98,'Elektromehanicko pretvaranje energije'),(99,'Elektronska merenja'),(100,'Informacioni sistemi'),(101,'Kablovski i optički komunikacioni sistemi'),(102,'Komercijalni softver za simulaciju dinamičkih sistema'),(103,'Mehatronika'),(104,'Merenje neelektričnih veličina'),(105,'Mikroračunarski sistemi'),(106,'Modulacione tehnike'),(107,'Nelinearni SAU'),(108,'Objektno-orijentisano programiranje'),(109,'Optimalno upravljanje'),(110,'Osnovi energetske elektronike'),(111,'Programabilni logički kontroleri'),(112,'Senzori i pretvarači u vozilima'),(113,'Senzori i pretvarači u automatici i robotici'),(114,'Sistemi automatskog upravljanja'),(115,'Solarne komponente i sistemi'),(116,'Telekomunikacije'),(117,'Upravljanje procesima'),(118,'Digitalne telekomunikacije I'),(119,'Elektroakustika'),(120,'Mikrotalasna tehnika'),(121,'Obrada signala u telekomunikacijama'),(122,'Telekomunikacione mreže'),(123,'Teorija informacija'),(124,'Engleski jezik I'),(125,'Engleski jezik II'),(126,'Analogna mikroelektronika'),(127,'Engleski jezik I'),(128,'Engleski jezik II'),(129,'Novi materijali i tehnologije'),(130,'Optoelektronika'),(131,'Projektovanje štampanih ploča'),(132,'Tehnologije mikrosistema'),(133,'Automatsko upravljanje'),(134,'Dijagnostika i monitoring električnih veličina'),(135,'Elektroenergetske komponente'),(136,'Elektromagnetika'),(137,'Elektronska merenja'),(138,'Energetska elektronika'),(139,'Kvalitet električne energije'),(140,'Mašine naizmenične struje'),(141,'Upravljanje procesima'),(142,'Arhitektura i projektovanje softvera'),(143,'Inteligentni informacioni sistemi'),(144,'Metodi i sistemi za obradu signala'),(145,'Mobilni sistemi i servisi'),(146,'Multimedijalni računarski sistemi'),(147,'Napredne baze podataka'),(148,'Paralelni sistemi'),(149,'Prepoznavanje uzoraka'),(150,'Pretraživanje informacija'),(151,'Programski prevodioci'),(152,'Projektovanje računarskih mreža'),(153,'Projektovanje računarskog hardvera'),(154,'Računarska grafika'),(155,'Socijalni i pravni aspekti informatike'),(156,'Veštačka inteligencija'),(157,'Zaštita informacija'),(158,'Dinamika mehanizama i mašina'),(159,'Diskretna matematika'),(160,'Elektroenergetski pretvarači'),(161,'Elektromotorni pogoni'),(162,'Elektronika u medicini'),(163,'Elektronska merna instrumentacija'),(164,'Engleski jezik I'),(165,'Engleski jezik II'),(166,'Identifikacija sistema'),(167,'Inženjerska etika'),(168,'Izvori za napajanje'),(169,'Merenja u ekologiji'),(170,'Merenja u medicini'),(171,'Projektovanje sistema automatskog upravljanja'),(172,'Računarski merno-informacioni sistemi u industriji'),(173,'SCADA sistemi'),(174,'Sistemi za akviziciju podataka'),(175,'Softversko inženjerstvo'),(176,'Tehnika konverzije'),(177,'Termovizija'),(178,'Uvod u robotiku'),(179,'Verovatnoća i statistika'),(180,'Mobilni komunikacioni sistemi'),(181,'Antene i prostiranje'),(182,'Feding i smetnje u digitalnim telekomunikacijama'),(183,'Kodovanje'),(184,'Komunikaciona akustika'),(185,'Optičke mreže'),(186,'Širokopojasne telekomunikacije'),(187,'Digitalna obrada slike'),(188,'Izvori za napajanje'),(189,'Mikrokontroleri'),(190,'Obnovljivi izvori energije'),(191,'Sistemi za rad u realnom vremenu'),(192,'Izvori za napajanje'),(193,'Komponente i kola snage'),(194,'Obnovljivi izvori energije'),(195,'Projektovanje i simulacija mikroelektronskih komponenata'),(196,'Projektovanje mikrosistema'),(197,'Solarne komponente i sistemi'),(198,'Distribuirana proizvodnja električne energije'),(199,'Elektrane'),(200,'Elektroenergetski pretvarači'),(201,'Elektromotorni pogoni'),(202,'Izvori za napajanje'),(203,'Odabrana poglavlja iz elektromotornih pogona'),(204,'Zaštita u elektroenergetici');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjectOnDepartment`
--

DROP TABLE IF EXISTS `subjectOnDepartment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjectOnDepartment` (
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
-- Dumping data for table `subjectOnDepartment`
--

LOCK TABLES `subjectOnDepartment` WRITE;
/*!40000 ALTER TABLE `subjectOnDepartment` DISABLE KEYS */;
INSERT INTO `subjectOnDepartment` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,2),(13,2),(14,2),(15,2),(16,2),(17,2),(18,2),(19,2),(20,2),(21,2),(22,2),(23,2),(24,2),(25,2),(26,3),(27,3),(28,3),(29,3),(30,3),(31,3),(32,3),(33,3),(34,3),(35,3),(36,4),(37,4),(38,4),(39,4),(40,4),(41,4),(42,4),(43,4),(44,4),(45,5),(46,5),(47,5),(48,5),(49,5),(50,5),(51,5),(52,5),(53,5),(54,6),(55,6),(56,6),(57,6),(58,6),(59,6),(60,6),(61,6),(62,6),(63,7),(64,7),(65,7),(66,7),(67,7),(68,7),(69,7),(70,7),(71,7),(72,7),(73,7),(74,7),(75,7),(76,2),(77,2),(78,2),(79,2),(80,2),(81,2),(82,2),(83,2),(84,2),(85,2),(86,2),(87,2),(88,2),(89,2),(90,2),(91,2),(92,2),(93,2),(94,3),(95,3),(96,3),(97,3),(98,3),(99,3),(100,3),(101,3),(102,3),(103,3),(104,3),(105,3),(106,3),(107,3),(108,3),(109,3),(110,3),(111,3),(112,3),(113,3),(114,3),(115,3),(116,3),(117,3),(118,4),(119,4),(120,4),(121,4),(122,4),(123,4),(124,5),(125,5),(126,6),(127,6),(128,6),(129,6),(130,6),(131,6),(132,6),(133,7),(134,7),(135,7),(136,7),(137,7),(138,7),(139,7),(140,7),(141,7),(142,2),(143,2),(144,2),(145,2),(146,2),(147,2),(148,2),(149,2),(150,2),(151,2),(152,2),(153,2),(154,2),(155,2),(156,2),(157,2),(158,3),(159,3),(160,3),(161,3),(162,3),(163,3),(164,3),(165,3),(166,3),(167,3),(168,3),(169,3),(170,3),(171,3),(172,3),(173,3),(174,3),(175,3),(176,3),(177,3),(178,3),(179,4),(180,4),(181,4),(182,4),(183,4),(184,4),(185,4),(186,5),(187,5),(188,5),(189,5),(190,5),(191,6),(192,6),(193,6),(194,6),(195,6),(196,6),(197,7),(198,7),(199,7),(200,7),(201,7),(202,7),(203,7);
/*!40000 ALTER TABLE `subjectOnDepartment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjectOnYearOfStudy`
--

DROP TABLE IF EXISTS `subjectOnYearOfStudy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjectOnYearOfStudy` (
  `subjectId` int NOT NULL,
  `yearOfStudyId` int NOT NULL,
  PRIMARY KEY (`subjectId`,`yearOfStudyId`),
  KEY `IDX_056a8b738084af63308f74f8fe` (`subjectId`),
  KEY `IDX_61ddbdadebc437d96adb0a0d21` (`yearOfStudyId`),
  CONSTRAINT `FK_056a8b738084af63308f74f8fe2` FOREIGN KEY (`subjectId`) REFERENCES `subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_61ddbdadebc437d96adb0a0d216` FOREIGN KEY (`yearOfStudyId`) REFERENCES `year_of_study` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjectOnYearOfStudy`
--

LOCK TABLES `subjectOnYearOfStudy` WRITE;
/*!40000 ALTER TABLE `subjectOnYearOfStudy` DISABLE KEYS */;
INSERT INTO `subjectOnYearOfStudy` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,2),(13,2),(14,2),(15,2),(16,2),(17,2),(18,2),(19,2),(20,2),(21,2),(22,2),(23,2),(24,2),(25,2),(26,2),(27,2),(28,2),(29,2),(30,2),(31,2),(32,2),(33,2),(34,2),(35,2),(36,2),(37,2),(38,2),(39,2),(40,2),(41,2),(42,2),(43,2),(44,2),(45,2),(46,2),(47,2),(48,2),(49,2),(50,2),(51,2),(52,2),(53,2),(54,2),(55,2),(56,2),(57,2),(58,2),(59,2),(60,2),(61,2),(62,2),(63,2),(64,2),(65,2),(66,2),(67,2),(68,2),(69,2),(70,2),(71,2),(72,2),(73,2),(74,2),(75,2),(76,3),(77,3),(78,3),(79,3),(80,3),(81,3),(82,3),(83,3),(84,3),(85,3),(86,3),(87,3),(88,3),(89,3),(90,3),(91,3),(92,3),(93,3),(94,3),(95,3),(96,3),(97,3),(98,3),(99,3),(100,3),(101,3),(102,3),(103,3),(104,3),(105,3),(106,3),(107,3),(108,3),(109,3),(110,3),(111,3),(112,3),(113,3),(114,3),(115,3),(116,3),(117,3),(118,3),(119,3),(120,3),(121,3),(122,3),(123,3),(124,3),(125,3),(126,3),(127,3),(128,3),(129,3),(130,3),(131,3),(132,3),(133,3),(134,3),(135,3),(136,3),(137,3),(138,3),(139,3),(140,3),(141,3),(142,4),(143,4),(144,4),(145,4),(146,4),(147,4),(148,4),(149,4),(150,4),(151,4),(152,4),(153,4),(154,4),(155,4),(156,4),(157,4),(158,4),(159,4),(160,4),(161,4),(162,4),(163,4),(164,4),(165,4),(166,4),(167,4),(168,4),(169,4),(170,4),(171,4),(172,4),(173,4),(174,4),(175,4),(176,4),(177,4),(178,4),(179,4),(180,4),(181,4),(182,4),(183,4),(184,4),(185,4),(186,4),(187,4),(188,4),(189,4),(190,4),(191,4),(192,4),(193,4),(194,4),(195,4),(196,4),(197,4),(198,4),(199,4),(200,4),(201,4),(202,4),(203,4);
/*!40000 ALTER TABLE `subjectOnYearOfStudy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e23bfe7255ada131861292923f` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'Blanket'),(4,'KolokvijumI'),(5,'KolokvijumII'),(3,'Lab'),(6,'Predavanja'),(7,'Racunske'),(2,'Skripta');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `role` varchar(255) NOT NULL,
  `banned` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Admin','admin@spremiispit.com','$2b$10$w1gSmaNYIDSH.xMGYF5OZOXTsIfskuW4BSlVmFR9yepzWDR/jvOIa','admin',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_disliked_comments_comment`
--

DROP TABLE IF EXISTS `user_disliked_comments_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_disliked_comments_comment` (
  `userId` int NOT NULL,
  `commentId` int NOT NULL,
  PRIMARY KEY (`userId`,`commentId`),
  KEY `IDX_b4e1b809d2d7cf361d1cf0548c` (`userId`),
  KEY `IDX_d627aa85bb60c0591fd1ccdd29` (`commentId`),
  CONSTRAINT `FK_b4e1b809d2d7cf361d1cf0548cc` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_d627aa85bb60c0591fd1ccdd29b` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_disliked_comments_comment`
--

LOCK TABLES `user_disliked_comments_comment` WRITE;
/*!40000 ALTER TABLE `user_disliked_comments_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_disliked_comments_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_disliked_posts_post`
--

DROP TABLE IF EXISTS `user_disliked_posts_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_disliked_posts_post` (
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`userId`,`postId`),
  KEY `IDX_7c477ee7fedf24de41c072c11d` (`userId`),
  KEY `IDX_77a31f8f6d0b2e4458ff0f383f` (`postId`),
  CONSTRAINT `FK_77a31f8f6d0b2e4458ff0f383fe` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_7c477ee7fedf24de41c072c11d4` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_disliked_posts_post`
--

LOCK TABLES `user_disliked_posts_post` WRITE;
/*!40000 ALTER TABLE `user_disliked_posts_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_disliked_posts_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_liked_comments_comment`
--

DROP TABLE IF EXISTS `user_liked_comments_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_liked_comments_comment` (
  `userId` int NOT NULL,
  `commentId` int NOT NULL,
  PRIMARY KEY (`userId`,`commentId`),
  KEY `IDX_28480f4a947f116688cfbb3d1f` (`userId`),
  KEY `IDX_6c7cf46975e37202be520a6475` (`commentId`),
  CONSTRAINT `FK_28480f4a947f116688cfbb3d1fe` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_6c7cf46975e37202be520a6475a` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_liked_comments_comment`
--

LOCK TABLES `user_liked_comments_comment` WRITE;
/*!40000 ALTER TABLE `user_liked_comments_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_liked_comments_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_liked_posts_post`
--

DROP TABLE IF EXISTS `user_liked_posts_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_liked_posts_post` (
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`userId`,`postId`),
  KEY `IDX_6199124c646dd9a89215eaa80d` (`userId`),
  KEY `IDX_2fa174d02cadc279ba767cf199` (`postId`),
  CONSTRAINT `FK_2fa174d02cadc279ba767cf199e` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_6199124c646dd9a89215eaa80d4` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_liked_posts_post`
--

LOCK TABLES `user_liked_posts_post` WRITE;
/*!40000 ALTER TABLE `user_liked_posts_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_liked_posts_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yearOfStudyOnDepartment`
--

DROP TABLE IF EXISTS `yearOfStudyOnDepartment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yearOfStudyOnDepartment` (
  `departmentId` int NOT NULL,
  `yearOfStudyId` int NOT NULL,
  PRIMARY KEY (`departmentId`,`yearOfStudyId`),
  KEY `IDX_75f4dd058b16c5b3f49af6f8bd` (`departmentId`),
  KEY `IDX_df825e4ca06656fbd8fd10ac7f` (`yearOfStudyId`),
  CONSTRAINT `FK_75f4dd058b16c5b3f49af6f8bdc` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_df825e4ca06656fbd8fd10ac7fc` FOREIGN KEY (`yearOfStudyId`) REFERENCES `year_of_study` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yearOfStudyOnDepartment`
--

LOCK TABLES `yearOfStudyOnDepartment` WRITE;
/*!40000 ALTER TABLE `yearOfStudyOnDepartment` DISABLE KEYS */;
INSERT INTO `yearOfStudyOnDepartment` VALUES (1,1),(2,2),(2,3),(2,4),(3,2),(3,3),(3,4),(4,2),(4,3),(4,4),(5,2),(5,3),(5,4),(6,2),(6,3),(6,4),(7,2),(7,3),(7,4);
/*!40000 ALTER TABLE `yearOfStudyOnDepartment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `year_of_exam`
--

DROP TABLE IF EXISTS `year_of_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `year_of_exam` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_1bfd3de552f4a940ce468830f3` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `year_of_exam`
--

LOCK TABLES `year_of_exam` WRITE;
/*!40000 ALTER TABLE `year_of_exam` DISABLE KEYS */;
INSERT INTO `year_of_exam` VALUES (14,'2010'),(13,'2011'),(12,'2012'),(11,'2013'),(10,'2014'),(9,'2015'),(8,'2016'),(7,'2017'),(6,'2018'),(5,'2019'),(4,'2020'),(3,'2021'),(2,'2022'),(1,'2023');
/*!40000 ALTER TABLE `year_of_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `year_of_study`
--

DROP TABLE IF EXISTS `year_of_study`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `year_of_study` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_7177752830859d86c931be6508` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `year_of_study`
--

LOCK TABLES `year_of_study` WRITE;
/*!40000 ALTER TABLE `year_of_study` DISABLE KEYS */;
INSERT INTO `year_of_study` VALUES (1,'I'),(2,'II'),(3,'III'),(4,'IV'),(5,'V');
/*!40000 ALTER TABLE `year_of_study` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `year_of_study_departments_department`
--

DROP TABLE IF EXISTS `year_of_study_departments_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `year_of_study_departments_department` (
  `yearOfStudyId` int NOT NULL,
  `departmentId` int NOT NULL,
  PRIMARY KEY (`yearOfStudyId`,`departmentId`),
  KEY `IDX_db6b569ab0094204016074b0bb` (`yearOfStudyId`),
  KEY `IDX_4cbc2ef384b2a2d4058586cdfe` (`departmentId`),
  CONSTRAINT `FK_4cbc2ef384b2a2d4058586cdfe2` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_db6b569ab0094204016074b0bb6` FOREIGN KEY (`yearOfStudyId`) REFERENCES `year_of_study` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `year_of_study_departments_department`
--

LOCK TABLES `year_of_study_departments_department` WRITE;
/*!40000 ALTER TABLE `year_of_study_departments_department` DISABLE KEYS */;
/*!40000 ALTER TABLE `year_of_study_departments_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `year_of_study_subjects_subject`
--

DROP TABLE IF EXISTS `year_of_study_subjects_subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `year_of_study_subjects_subject` (
  `yearOfStudyId` int NOT NULL,
  `subjectId` int NOT NULL,
  PRIMARY KEY (`yearOfStudyId`,`subjectId`),
  KEY `IDX_906c1e240bee241f4d728970a9` (`yearOfStudyId`),
  KEY `IDX_d2144a58ed525c39637bfb0fc3` (`subjectId`),
  CONSTRAINT `FK_906c1e240bee241f4d728970a99` FOREIGN KEY (`yearOfStudyId`) REFERENCES `year_of_study` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_d2144a58ed525c39637bfb0fc34` FOREIGN KEY (`subjectId`) REFERENCES `subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `year_of_study_subjects_subject`
--

LOCK TABLES `year_of_study_subjects_subject` WRITE;
/*!40000 ALTER TABLE `year_of_study_subjects_subject` DISABLE KEYS */;
/*!40000 ALTER TABLE `year_of_study_subjects_subject` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-02 19:14:59
