# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-13 10:49:05
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "ordergoods"
#

DROP TABLE IF EXISTS `ordergoods`;
CREATE TABLE `ordergoods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ordernum` varchar(255) DEFAULT NULL,
  `goodsname` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `oldprice` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "ordergoods"
#

/*!40000 ALTER TABLE `ordergoods` DISABLE KEYS */;
INSERT INTO `ordergoods` VALUES (1,'1234567','Converse One star 低帮休闲鞋','黑色','41','2','569','759','bGood23.jpg'),(2,'1234567','Levi’s LMC高端精工系列男士宽松牛仔裤','绿色','M','1','1259','1400','bGood17.jpg');
/*!40000 ALTER TABLE `ordergoods` ENABLE KEYS */;
