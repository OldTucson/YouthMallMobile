# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-13 15:01:27
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "myorder"
#

DROP TABLE IF EXISTS `myorder`;
CREATE TABLE `myorder` (
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
# Data for table "myorder"
#

/*!40000 ALTER TABLE `myorder` DISABLE KEYS */;
INSERT INTO `myorder` VALUES (1,'1234567','6','￥2397','3','0',2);
/*!40000 ALTER TABLE `myorder` ENABLE KEYS */;
