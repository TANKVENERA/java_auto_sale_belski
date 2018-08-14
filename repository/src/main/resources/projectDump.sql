-- MySQL dump 10.13  Distrib 5.7.18, for Win64 (x86_64)
--
-- Host: localhost    Database: webproject
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_ad`
--

DROP TABLE IF EXISTS `t_ad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ad` (
  `id` int(11) NOT NULL,
  `bodyStyle` varchar(255) DEFAULT NULL,
  `F_CARDESCRIPTION` varchar(2000) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `engine` varchar(255) DEFAULT NULL,
  `markAuto` varchar(255) DEFAULT NULL,
  `mileAge` int(11) DEFAULT NULL,
  `modelAuto` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `transmission` varchar(255) DEFAULT NULL,
  `yearOfIssue` int(11) DEFAULT NULL,
  `fk_User` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7d1mky5flwddh3kenonxckbr4` (`fk_User`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ad`
--

LOCK TABLES `t_ad` WRITE;
/*!40000 ALTER TABLE `t_ad` DISABLE KEYS */;
INSERT INTO `t_ad` VALUES (1,'седан-баклажан','Автомобиль в идеальном состоянии, максимальной комплектации, полностью обслужен, панель Алькантара, эксплуатация с 10.11.2010 года. Застрахован в Автокаско. Из США, не РФ. \r\nP.S. в случае если телефон вне зоны действия сети, пишите на Viber того же номера. С торгом.','ывывыв','14-08-2018 22-17','','',150340,'Alfa_Romeo',25000,'передний',2010,1);
/*!40000 ALTER TABLE `t_ad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_adentity`
--

DROP TABLE IF EXISTS `t_adentity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_adentity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `F_FileName` varchar(255) DEFAULT NULL,
  `F_FilePath` varchar(255) DEFAULT NULL,
  `FK_Ad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe95f3avoai1dhjgo9tjtrmjc7` (`FK_Ad`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_adentity`
--

LOCK TABLES `t_adentity` WRITE;
/*!40000 ALTER TABLE `t_adentity` DISABLE KEYS */;
INSERT INTO `t_adentity` VALUES (2,'13-08-2018 22-41','D:\\projectData\\ads\\13-08-2018 22-41\\',2),(3,'14-08-2018 22-17','D:\\projectData\\ads\\14-08-2018 22-17\\',1);
/*!40000 ALTER TABLE `t_adentity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_basket`
--

DROP TABLE IF EXISTS `t_basket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_basket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `loggedUserId` int(11) DEFAULT NULL,
  `fk_Ad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKowci6r8nicxkr5h38xcx7ox1d` (`fk_Ad`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_basket`
--

LOCK TABLES `t_basket` WRITE;
/*!40000 ALTER TABLE `t_basket` DISABLE KEYS */;
INSERT INTO `t_basket` VALUES (1,1,1);
/*!40000 ALTER TABLE `t_basket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_comments`
--

DROP TABLE IF EXISTS `t_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `fk_Ad` int(11) DEFAULT NULL,
  `fk_USer` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK18pledujcyl4li8e2lmr1b0dx` (`fk_Ad`),
  KEY `FKm0y07rmqj1vhc82tgobx9wgtx` (`fk_USer`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_comments`
--

LOCK TABLES `t_comments` WRITE;
/*!40000 ALTER TABLE `t_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_mark`
--

DROP TABLE IF EXISTS `t_mark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_mark` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `markAuto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_mark`
--

LOCK TABLES `t_mark` WRITE;
/*!40000 ALTER TABLE `t_mark` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_mark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_mark_static`
--

DROP TABLE IF EXISTS `t_mark_static`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_mark_static` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `markAuto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_mark_static`
--

LOCK TABLES `t_mark_static` WRITE;
/*!40000 ALTER TABLE `t_mark_static` DISABLE KEYS */;
INSERT INTO `t_mark_static` VALUES (1,'Chevrolet'),(2,'Audi'),(3,'Volkswagen'),(4,'BMW'),(5,'Acura'),(6,'Chery'),(7,'Chrysler'),(8,'Citroen'),(9,'Dacia'),(10,'Ford'),(11,'Dodge'),(12,'Kia'),(13,'Lada(ВАЗ)'),(14,'Jeep'),(15,'Jaguar'),(16,'Land Rover'),(17,'Lexus'),(18,'Nissan'),(19,'Opel'),(20,'Peugeot'),(21,'Volvo'),(22,'Mercedes-Benz'),(23,'Toyota');
/*!40000 ALTER TABLE `t_mark_static` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_model`
--

DROP TABLE IF EXISTS `t_model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `modelAuto` varchar(255) DEFAULT NULL,
  `FK_Mark` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK72cqg2sm7mjn6nxmg7u4u15k5` (`FK_Mark`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_model`
--

LOCK TABLES `t_model` WRITE;
/*!40000 ALTER TABLE `t_model` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_model_static`
--

DROP TABLE IF EXISTS `t_model_static`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_model_static` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `modelAuto` varchar(255) DEFAULT NULL,
  `FK_Mark` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhwww8r8h751jxekctu91ht8jw` (`FK_Mark`)
) ENGINE=MyISAM AUTO_INCREMENT=185 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_model_static`
--

LOCK TABLES `t_model_static` WRITE;
/*!40000 ALTER TABLE `t_model_static` DISABLE KEYS */;
INSERT INTO `t_model_static` VALUES (1,'Aveo',1),(2,'Astro',1),(3,'Alero',1),(4,'A1',2),(5,'A2',2),(6,'A3',2),(7,'Golf 5',3),(8,'Golf 6',3),(9,'Golf 7',3),(10,'Amarok',3),(11,'Beetle',3),(12,'Bora',3),(13,'Caddy',3),(14,'Golf 1',3),(15,'Golf 2',3),(16,'Golf 3',3),(17,'Golf 4',3),(18,'Golf Plus',3),(19,'Jetta',3),(20,'Paasat B2',3),(21,'Passat B3',3),(22,'Passat B4',3),(23,'Passat B5',3),(24,'Passat B6',3),(25,'Passat B7',3),(26,'Passat B8',3),(27,'Passat CC',3),(28,'T2',3),(29,'T3',3),(30,'T4',3),(31,'Sharan',3),(32,'Tiguan',3),(33,'Touareg',3),(34,'Vento',3),(35,'T4 Multivan',3),(36,'Camaro',1),(37,'Captivo',1),(38,'Cruze',1),(39,'Corvette',1),(40,'Epica',1),(41,'Matiz',1),(42,'Niva',1),(43,'Lanos',1),(44,'Lacetti',1),(45,'Volt',1),(46,'3-reihe (E21)',4),(47,'3-reihe (E30)',4),(48,'3-reihe (E36)',4),(49,'3-reihe (E46)',4),(50,'3-reihe (E90)',4),(51,'3-reihe (F34)',4),(52,'5-reihe (E12)',4),(53,'5-reihe (E28)',4),(54,'5-reihe (E60)',4),(55,'6-reihe',4),(56,'7-reihe (E23)',4),(57,'7-reihe (E32)',4),(58,'7-reihe (E38)',4),(59,'M3',4),(60,'M5',4),(61,'X1',4),(62,'X3',4),(63,'X4',4),(64,'X5 (E53)',4),(65,'X5 (E70)',4),(66,'X5 (F15)',4),(67,'X6',4),(68,'Z-reihe',4),(69,'A4 (B5)',2),(70,'A4 (B6)',2),(71,'A4 (B7)',2),(72,'A4 (B8)',2),(73,'A4 (B9)',2),(74,'A5',2),(75,'A6 (C4)',2),(76,'A6 (C5)',2),(77,'A6 (C6)',2),(78,'A6 (C7)',2),(79,'A7',2),(80,'A8 (D2)',2),(81,'A8 (D3)',2),(82,'A8 (D4)',2),(83,'Q3',2),(84,'Q5',2),(85,'Q7',2),(86,'R8',2),(87,'RS3',2),(88,'RS6',2),(89,'TT',2),(90,'V8',2),(91,'S4',2),(92,'S5',2),(93,'S6',2),(94,'S8',2),(95,'CL',5),(96,'ILX',5),(97,'MDX',5),(98,'RDX',5),(99,'RL',5),(100,'TL',5),(101,'TLX',5),(102,'A1',6),(103,'A13',6),(104,'A5',6),(105,'Amulet',6),(106,'Cowin',6),(107,'Fora',6),(108,'QQ',6),(109,'QQ6',6),(110,'M11',6),(111,'Tiggo',6),(112,'Tiggo 5',6),(113,'200',7),(114,'300',7),(115,'Aspen',7),(116,'Neon',7),(117,'Pacifica',7),(118,'Stratus',7),(119,'Vision',7),(120,'Voyager',7),(121,'Le Baron',7),(122,'LHS',7),(123,'Cirrus',7),(124,'Concorde',7),(125,'AX',8),(126,'C1',8),(127,'C2',8),(128,'C3',8),(129,'C3 Picasso',8),(130,'C4',8),(131,'C5',8),(132,'C5 (X7)',8),(133,'C6',8),(134,'C8',8),(135,'Xsara',8),(136,'ZX',8),(137,'Xantia',8),(138,'XM',8),(139,'1300',9),(140,'Dokker',9),(141,'Duster',9),(142,'Logan',9),(143,'Sandero',9),(144,'B-MAX',10),(145,'C-MAX',10),(146,'Edge',10),(147,'F-150',10),(148,'F-250',10),(149,'F-350',10),(150,'Fiesta',10),(151,'Focus',10),(152,'Fusion',10),(153,'Galaxy',10),(154,'Sierra',10),(155,'Mondeo',10),(156,'Mustang',10),(157,'Neon',11),(158,'Avenger',11),(159,'Rio',12),(160,'Sportage',12),(161,'2101',13),(162,'2103',13),(163,'Liberty',14),(164,'Patriot',14),(165,'XE',15),(166,'XF',15),(167,'Defender',16),(168,'Discovery',16),(169,'CT',17),(170,'ES',17),(171,'Leaf',18),(172,'Terrano',18),(173,'Zafira',19),(174,'Astra G',19),(175,'406',20),(176,'308',20),(177,'XC70',21),(178,'XC90',21),(179,'CL',22),(180,'CLA',22),(181,'Corolla',23),(184,'Camry',23);
/*!40000 ALTER TABLE `t_model_static` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_news`
--

DROP TABLE IF EXISTS `t_news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_news` (
  `id` int(11) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `fk_User` int(11) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `FK_NewsEntity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsce206dhixnijxu2i3og3v47u` (`FK_NewsEntity`),
  KEY `FK9ctll5iapbqn0uxfr38ww4a29` (`fk_User`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_news`
--

LOCK TABLES `t_news` WRITE;
/*!40000 ALTER TABLE `t_news` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_newsentity`
--

DROP TABLE IF EXISTS `t_newsentity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_newsentity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `F_FileName` varchar(255) DEFAULT NULL,
  `F_FilePath` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_newsentity`
--

LOCK TABLES `t_newsentity` WRITE;
/*!40000 ALTER TABLE `t_newsentity` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_newsentity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `F_ROLE` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user`
--

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` VALUES (1,'MIna_2@mail.ru','$2a$10$VO6GcjSwjAbbSHxl/N2olutU5P2iysCJiYMLlz6SbQ/yW2XRRxGYy','ROLE_USER','Mina');
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-14 23:18:14
