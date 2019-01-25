# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-13 10:48:52
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "order"
#

DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ordernum` varchar(255) DEFAULT NULL,
  `userid` varchar(255) DEFAULT NULL,
  `allprice` varchar(255) DEFAULT NULL,
  `allnum` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `goodsnum` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "order"
#

/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,'1234567','6','2397','3','0',2);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
