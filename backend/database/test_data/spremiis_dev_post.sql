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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Danasnji blanket','2022-12-03 23:59:59.000000','Paralelni sistemi',1,15,1,3,1),(2,'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto','2022-12-03 23:59:59.000000','Naslov2',1,15,2,3,NULL),(3,'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla','2022-12-03 23:59:59.000000','Naslov3',1,15,1,3,NULL),(4,'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut','2022-12-03 23:59:59.000000','Naslov4',2,15,2,3,NULL),(5,'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit','2022-12-03 23:59:59.000000','Naslov5',3,15,1,3,NULL),(6,'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque','2022-12-03 23:59:59.000000','Naslov6',1,15,2,3,NULL),(7,'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae','2022-12-03 23:59:59.000000','Naslov7',1,15,1,3,NULL),(8,'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas','2022-12-03 23:59:59.000000','Naslov8',1,15,2,3,NULL),(9,'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae','2022-12-03 23:59:59.000000','Naslov9',1,15,1,3,NULL),(10,'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas','2022-12-03 23:59:59.000000','Naslov10',1,15,2,3,NULL),(11,'','2022-12-03 23:59:59.000000','',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 17:23:48
