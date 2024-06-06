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
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=273 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES (1,'Algoritmi i programiranje'),(2,'Elektronske komponente'),(3,'Fizika'),(4,'Laboratorijski praktikum - Fizika'),(5,'Matematika I'),(6,'Matematika II'),(7,'Osnovi elektrotehnike I'),(8,'Osnovi elektrotehnike II'),(9,'Uvod u elektroniku'),(10,'Uvod u inženjerstvo'),(11,'Uvod u računarstvo'),(12,'Arhitektura i organizacija računara'),(13,'Arhitektura i organizacija računara 1'),(14,'Arhitektura i organizacija računara 2'),(15,'Baze podataka'),(16,'Digitalna elektronika'),(17,'Diskretna matematika'),(18,'Logičko projektovanje'),(19,'Matematički metodi u računarstvu'),(20,'Objektno orijentisano programiranje'),(21,'Programski jezici'),(22,'Računarski sistemi'),(23,'Strukture podataka'),(24,'Teorija grafova'),(25,'Verovatnoća i statistika'),(26,'Digitalna elektronika'),(27,'Električna kola'),(28,'Linearni sistemi automatskog upravljanja'),(29,'Matematika III'),(30,'Metrologija električnih veličina'),(31,'Mikrokontroleri i programiranje'),(32,'Modeliranje i simulacija dinamičkih sistema'),(33,'Operaciona istraživanja'),(34,'Osnovi elektronike'),(35,'Računarski sistemi'),(36,'Digitalna elektronika'),(37,'Električna kola i signali'),(38,'Elektromagnetika-odabrana poglavlja'),(39,'Matematika 4'),(40,'Matematika III'),(41,'Osnovi elektronike'),(42,'Osnovi mikrotalasne tehnike'),(43,'Osnovi telekomunikacija'),(44,'Teorija telekomunikacija'),(45,'Analogna elektronika'),(46,'Digitalna elektronika'),(47,'Digitalna obrada signala'),(48,'Električna i elektronska merenja'),(49,'Matematika III'),(50,'Objektno orijentisane tehnike projektovanja sistema'),(51,'Osnovi elektronike'),(52,'Signali i sistemi'),(53,'Telekomunikacije'),(54,'Matematika III'),(55,'Materijali za elektroniku'),(56,'Metrologija električnih veličina'),(57,'Osnovi elektronike'),(58,'Osnovi optike'),(59,'Poluprovodničke komponente'),(60,'Projektovanje materijala za elektroniku'),(61,'Signali i sistemi'),(62,'Telekomunikacije'),(63,'Distributivne i industrijske mreže'),(64,'Električna kola'),(65,'Električne instalacije'),(66,'Elektromehaničko pretvaranje energije'),(67,'Elektrotehnički materijali'),(68,'Matematika III'),(69,'Merenja u elektroenergetici'),(70,'Metrologija električnih veličina'),(71,'Modeliranje i simulacija dinamičkih sistema'),(72,'Osnovi elektronike'),(73,'Prenos električne energije'),(74,'Tehnička mehanika'),(75,'Transformatori i mašine jednosmerne struje'),(76,'Automatsko upravljanje'),(77,'Distribuirani sistemi'),(78,'Elektronska merenja'),(79,'Engleski jezik I'),(80,'Engleski jezik II'),(81,'Informacioni sistemi'),(82,'Interakcija čovek-računar'),(83,'Mikroračunarski sistemi'),(84,'Objektno orijentisano projektovanje'),(85,'Operativni sistemi'),(86,'Osnovi analize signala i sistema'),(87,'Projektovanje i analiza algoritama'),(88,'Računarske mreže'),(89,'Sistemi baza podataka'),(90,'Softversko inženjerstvo'),(91,'Telekomunikacije'),(92,'Uvod u teoriju igara'),(93,'Web programiranje'),(94,'Baze podataka'),(95,'Bežični komunikacioni sistemi'),(96,'Digitalna obrada signala'),(97,'Digitalni sistemi automatskog upravljanja'),(98,'Elektromehanicko pretvaranje energije'),(99,'Elektronska merenja'),(100,'Informacioni sistemi'),(101,'Kablovski i optički komunikacioni sistemi'),(102,'Komercijalni softver za simulaciju dinamičkih sistema'),(103,'Mehatronika'),(104,'Merenje neelektričnih veličina'),(105,'Mikroračunarski sistemi'),(106,'Modulacione tehnike'),(107,'Nelinearni SAU'),(108,'Objektno-orijentisano programiranje'),(109,'Optimalno upravljanje'),(110,'Osnovi energetske elektronike'),(111,'Programabilni logički kontroleri'),(112,'Senzori i pretvarači u vozilima'),(113,'Senzori i pretvarači u automatici i robotici'),(114,'Sistemi automatskog upravljanja'),(115,'Solarne komponente i sistemi'),(116,'Telekomunikacije'),(117,'Upravljanje procesima'),(118,'Digitalne telekomunikacije I'),(119,'Elektroakustika'),(120,'Mikrotalasna tehnika'),(121,'Obrada signala u telekomunikacijama'),(122,'Telekomunikacione mreže'),(123,'Teorija informacija'),(124,'Engleski jezik I'),(125,'Engleski jezik II'),(126,'Analogna mikroelektronika'),(127,'Engleski jezik I'),(128,'Engleski jezik II'),(129,'Novi materijali i tehnologije'),(130,'Optoelektronika'),(131,'Projektovanje štampanih ploča'),(132,'Tehnologije mikrosistema'),(133,'Automatsko upravljanje'),(134,'Dijagnostika i monitoring električnih veličina'),(135,'Elektroenergetske komponente'),(136,'Elektromagnetika'),(137,'Elektronska merenja'),(138,'Energetska elektronika'),(139,'Kvalitet električne energije'),(140,'Mašine naizmenične struje'),(141,'Upravljanje procesima'),(142,'Arhitektura i projektovanje softvera'),(143,'Inteligentni informacioni sistemi'),(144,'Metodi i sistemi za obradu signala'),(145,'Mobilni sistemi i servisi'),(146,'Multimedijalni računarski sistemi'),(147,'Napredne baze podataka'),(148,'Paralelni sistemi'),(149,'Prepoznavanje uzoraka'),(150,'Pretraživanje informacija'),(151,'Programski prevodioci'),(152,'Projektovanje računarskih mreža'),(153,'Projektovanje računarskog hardvera'),(154,'Računarska grafika'),(155,'Socijalni i pravni aspekti informatike'),(156,'Veštačka inteligencija'),(157,'Zaštita informacija'),(158,'Dinamika mehanizama i mašina'),(159,'Diskretna matematika'),(160,'Elektroenergetski pretvarači'),(161,'Elektromotorni pogoni'),(162,'Elektronika u medicini'),(163,'Elektronska merna instrumentacija'),(164,'Engleski jezik I'),(165,'Engleski jezik II'),(166,'Identifikacija sistema'),(167,'Inženjerska etika'),(168,'Izvori za napajanje'),(169,'Merenja u ekologiji'),(170,'Merenja u medicini'),(171,'Projektovanje sistema automatskog upravljanja'),(172,'Računarski merno-informacioni sistemi u industriji'),(173,'SCADA sistemi'),(174,'Sistemi za akviziciju podataka'),(175,'Softversko inženjerstvo'),(176,'Tehnika konverzije'),(177,'Termovizija'),(178,'Uvod u robotiku'),(179,'Verovatnoća i statistika'),(180,'Mobilni komunikacioni sistemi'),(181,'Antene i prostiranje'),(182,'Feding i smetnje u digitalnim telekomunikacijama'),(183,'Kodovanje'),(184,'Komunikaciona akustika'),(185,'Optičke mreže'),(186,'Širokopojasne telekomunikacije'),(187,'Digitalna obrada slike'),(188,'Izvori za napajanje'),(189,'Mikrokontroleri'),(190,'Obnovljivi izvori energije'),(191,'Sistemi za rad u realnom vremenu'),(192,'Izvori za napajanje'),(193,'Komponente i kola snage'),(194,'Obnovljivi izvori energije'),(195,'Projektovanje i simulacija mikroelektronskih komponenata'),(196,'Projektovanje mikrosistema'),(197,'Solarne komponente i sistemi'),(198,'Distribuirana proizvodnja električne energije'),(199,'Elektrane'),(200,'Elektroenergetski pretvarači'),(201,'Elektromotorni pogoni'),(202,'Izvori za napajanje'),(203,'Odabrana poglavlja iz elektromotornih pogona'),(204,'Zaštita u elektroenergetici'),(205,'Objektno-orijentisano programiranje'),(206,'Numerička matematika'),(207,'Mikroprocesorski sistemi'),(208,'Multimedijalni sistemi'),(209,'Animacije 1'),(210,'Metrologija električnih veličina'),(211,'Elektronska kola i embeded sistemi'),(212,'Računarske mreže'),(213,'Digitalna obrada slike'),(214,'Animacija 2'),(215,'Akustika'),(216,'Tehnike prikupljanja i konverzije podataka'),(217,'Obnovljivi izvori energije'),(218,'Obrada audio i muzičkog signala'),(219,'Mikrokontroleri'),(220,'Elektronika za multimedijalne sisteme'),(221,'Video produkcija'),(222,'Web tehnologije 1'),(223,'Fotografija'),(224,'Arhitekture digitalnih sistema'),(225,'Impulsna i digitalna elektronska kola'),(226,'Mikroprocesorska tehnika'),(227,'Analogna integrisana kola'),(228,'Osnovi energetske elektronike'),(229,'Projektovanje digitalnih integrisanih kola'),(230,'Projektovanje digitalnih sistema'),(231,'Virtuelni instrumenti'),(232,'Medicinska elektronika'),(233,'Projektovanje analognih integrisanih kola'),(234,'Automatsko upravljanje'),(235,'Računarske igre'),(236,'Kamera i montaža'),(237,'Poslovne komunikacije'),(238,'Inženjersko obrazovanje i održivi razvoj'),(239,'Audio produkcija'),(240,'Autoelektronika'),(241,'Programiranje mobilnih uređaja'),(242,'Solarne komponente i sistemi'),(243,'Primenjena elektromagnetika'),(244,'Osnove mehatronike'),(245,'Uvod u robotiku'),(246,'Programabilni logički kontroleri'),(247,'Web tehnologije 2'),(248,'TV sistemi'),(249,'Računarske igre 2'),(250,'Virtuelna realnost'),(251,'Grafički dizajn'),(252,'Projektovanje računarskih mreža'),(253,'Termovizija'),(254,'Bežične mreže i uređaji'),(255,'Mobilni komunikacioni sistemi'),(256,'Kablovski i optički komunikacioni sistemi'),(257,'Internet stvari'),(258,'SCADA sistemi'),(259,'Stručna praksa'),(260,'Završni rad - istraživački rad'),(261,'Završni rad'),(262,'Projektovanje VLSI'),(263,'RF elektronika'),(264,'Sistemi za rad u realnom vremenu'),(265,'Testiranje elektronskih kola'),(266,'Jezici za modelovanje hardvera'),(267,'Elektroenergetski pretvarači'),(268,'Embeded sistemi'),(269,'Funkcionalna verifikacija'),(270,'Projektovanje elektronskih sistema'),(271,'Programiranje ARM kontrolera'),(272,'Izvori napona napajanja');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-06 20:18:05