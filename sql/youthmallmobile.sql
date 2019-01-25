# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-14 09:43:42
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "favo"
#

DROP TABLE IF EXISTS `favo`;
CREATE TABLE `favo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(255) DEFAULT NULL,
  `goodid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

#
# Data for table "favo"
#

/*!40000 ALTER TABLE `favo` DISABLE KEYS */;
INSERT INTO `favo` VALUES (48,'2','5'),(49,'2','3'),(54,'2','27'),(55,'2','4'),(56,'2','7'),(57,'2','26'),(58,'1','9'),(59,'6','12'),(60,'6','28'),(61,'6','20');
/*!40000 ALTER TABLE `favo` ENABLE KEYS */;

#
# Structure for table "goods"
#

DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `goodName` varchar(255) DEFAULT NULL,
  `shop` varchar(255) DEFAULT NULL,
  `cate` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `disprice` int(11) DEFAULT NULL,
  `preSale` varchar(255) DEFAULT NULL,
  `new` varchar(255) DEFAULT NULL,
  `saleOut` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `picNum` varchar(255) DEFAULT NULL,
  `dir` varchar(255) DEFAULT NULL,
  `hotRate` int(11) DEFAULT NULL,
  `pic2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Data for table "goods"
#

/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (1,'VANS AP STEP BACK RETRO HOODIE【RETRO CHECK 2.0】','vans','上衣卫衣',560,NULL,'',NULL,NULL,'bGood1.jpg','2','0',121,'[\"bGood1.jpg\",\"bGood2.jpg\"]'),(2,'VANS AP STEP BACK RETRO HOODIE【RETRO CHECK 2.0】','vans','上衣卫衣',620,NULL,'1',NULL,NULL,'bGood2.jpg','2','0',145,'[\"bGood2.jpg\",\"bGood2.jpg\"]'),(3,'VANS AP STEP BACK RETRO HOODIE【RETRO CHECK 2.0】','vans','上衣卫衣',590,NULL,'',NULL,NULL,'bGood3.jpg','2','0',454,'[\"bGood3.jpg\",\"bGood3.jpg\"]'),(4,'Stussy 男款LOGO印花连帽卫衣','stussy','上衣卫衣',899,NULL,'','1',NULL,'bGood4.jpg','2','0',252,'[\"bGood4.jpg\",\"bGood4.jpg\"]'),(5,'PUMA X ADER ERROR 男女同款高领卫衣','PUMA','上衣卫衣',899,NULL,NULL,NULL,NULL,'bGood5.jpg','2','0',244,'[\"bGood5.jpg\",\"bGood5.jpg\"]'),(7,'HUMAN MADE 后背字母灯芯绒夹克','humanmade','上衣夹克',3679,NULL,NULL,NULL,NULL,'bGood7.jpg','1','0',456,NULL),(8,'HUMAN MADE   连帽正反两穿夹克','humanmade','上衣夹克',2829,3999,'1',NULL,'','bGood8.jpg','1','0',213,NULL),(9,'HUMAN MADE   连帽正反两穿夹克','humanmade','上衣夹克',2829,NULL,NULL,NULL,'1','bGood9.jpg','1','0',543,NULL),(10,'Timberland PRO × N.HOOLYWOOD 纯色教练夹克','timberland','上衣夹克',1990,NULL,NULL,NULL,NULL,'bGood10.jpg','1','0',543,NULL),(11,'COKEIN 个性卡通提花圆领针织衫','cokin','上衣针织衫',218,NULL,NULL,NULL,'1','bGood11.jpg','1','0',868,NULL),(12,'JASONWOOD 字母圆领针织衫','jasonwood','上衣针织衫',598,NULL,'1',NULL,NULL,'bGood12.jpg','1','0',324,NULL),(13,'VANS AUTHENTIC JOGGER','vans','裤装牛仔裤',598,NULL,NULL,NULL,NULL,'bGood13.jpg','1','0',467,NULL),(15,'Stussy 纯色休闲牛仔裤','stussy','裤装牛仔裤',1499,NULL,NULL,'1','','bGood15.jpg','1','0',754,NULL),(16,'Stussy 纯色休闲牛仔裤','stussy','裤装牛仔裤',1449,1799,NULL,'1',NULL,'bGood16.jpg','1','0',213,NULL),(18,'Levi\'s 冬暖系列男士511™ 修身牛仔裤','levis','裤装牛仔裤',899,NULL,NULL,NULL,NULL,'bGood18.jpg','1','0',123,NULL),(19,'Converse x Golf Le Fleur 卫衣','converse','上衣卫衣',939,NULL,NULL,'1',NULL,'bGood6.jpg','1','0',252,NULL),(20,'VANS SK8-Hi【Color Theory】','vans','鞋靴休闲鞋',565,NULL,NULL,NULL,NULL,'bGood20.jpg','1','0',524,NULL),(21,'VANS SK8-Hi【Color Theory】','vans','鞋靴休闲鞋',535,NULL,'1',NULL,NULL,'bGood21.jpg','1','0',646,NULL),(22,'Levi\'s 男士510™ 紧身牛仔裤','levis','裤装牛仔裤',799,NULL,NULL,NULL,'1','bGood14.jpg','1','0',234,NULL),(23,'Levi\'s 经典五袋款系列男士510™ 紧身牛仔裤','levis','裤装牛仔裤',399,NULL,NULL,'1',NULL,'bGood19.jpg','1','0',363,NULL),(25,'Eone Timepieces 南方有乔木同款 2018新款触感磁力防水 中性时尚腕表BR-KU 酷MA萌定制版','Eone','手表',3280,NULL,NULL,NULL,NULL,'bGood22.jpg','1','0',415,NULL),(26,'Converse One star 低帮休闲鞋','converse','鞋靴休闲鞋',569,NULL,NULL,NULL,NULL,'bGood23.jpg','1','0',154,NULL),(27,'GOD SELECTION  BE@ABRICK','GOD',NULL,699,999,NULL,NULL,NULL,'bGood24.jpg','1','0',898,NULL),(28,'Ron English x APPortfolio x made by monsters Melty Ronnnie Rabbbit 粉红版','ron',NULL,2480,NULL,'1',NULL,NULL,'bGood25.jpg','1','0',565,NULL),(29,'Levi’s LMC高端精工系列男士宽松牛仔裤','levis','裤装牛仔裤',1259,NULL,'','','','bGood17.jpg','1','0',634,NULL);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

#
# Structure for table "locationinfo"
#

DROP TABLE IF EXISTS `locationinfo`;
CREATE TABLE `locationinfo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `userid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# Data for table "locationinfo"
#

/*!40000 ALTER TABLE `locationinfo` DISABLE KEYS */;
INSERT INTO `locationinfo` VALUES (4,'小西瓜','15138226703','四川省成都市青羊区草市街街道','家门口','6');
/*!40000 ALTER TABLE `locationinfo` ENABLE KEYS */;

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
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

#
# Data for table "myorder"
#

/*!40000 ALTER TABLE `myorder` DISABLE KEYS */;
INSERT INTO `myorder` VALUES (30,'1544704529839','6','￥4179','2','0',2),(31,'1544704543102','6','￥1449','1','0',1),(32,'1544705388285','6','￥1598','2','0',2),(33,'1544748687579','6','￥1598','2','0',2);
/*!40000 ALTER TABLE `myorder` ENABLE KEYS */;

#
# Structure for table "ordergoods"
#

DROP TABLE IF EXISTS `ordergoods`;
CREATE TABLE `ordergoods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ordernum1` varchar(255) DEFAULT NULL,
  `goodsname` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `oldprice` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

#
# Data for table "ordergoods"
#

/*!40000 ALTER TABLE `ordergoods` DISABLE KEYS */;
INSERT INTO `ordergoods` VALUES (38,'1544704529839','Stussy 男款LOGO印花连帽卫衣','颜色：黑色','尺码：F','×1','￥899','￥999','img/goods/bGood4.jpg'),(39,'1544704529839','Eone Timepieces 南方有乔木同款 2018新款触感磁力防水 中性时尚腕表BR-KU 酷MA萌定制版','颜色：黑色','尺码：F','×1','￥3280','￥3380','img/goods/bGood22.jpg'),(40,'1544704543102','Stussy 纯色休闲牛仔裤','颜色：黑色','尺码：F','×1','￥1449','￥1549','img/goods/bGood16.jpg'),(41,'1544705388285','GOD SELECTION  BE@ABRICK','颜色：黑色','尺码：F','×1','￥699','￥799','img/goods/bGood24.jpg'),(42,'1544705388285','Stussy 男款LOGO印花连帽卫衣','颜色：黑色','尺码：F','×1','￥899','￥999','img/goods/bGood4.jpg'),(43,'1544748687579','GOD SELECTION  BE@ABRICK','颜色：黑色','尺码：F','×1','￥699','￥799','img/goods/bGood24.jpg'),(44,'1544748687579','Stussy 男款LOGO印花连帽卫衣','颜色：黑色','尺码：F','×1','￥899','￥999','img/goods/bGood4.jpg');
/*!40000 ALTER TABLE `ordergoods` ENABLE KEYS */;

#
# Structure for table "shopcar"
#

DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(255) DEFAULT NULL,
  `goodsid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=95 DEFAULT CHARSET=utf8;

#
# Data for table "shopcar"
#

/*!40000 ALTER TABLE `shopcar` DISABLE KEYS */;
INSERT INTO `shopcar` VALUES (93,'6','1'),(94,'6','3');
/*!40000 ALTER TABLE `shopcar` ENABLE KEYS */;

#
# Structure for table "userinfo"
#

DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `mobile` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `frends` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "userinfo"
#

/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (1,'15737056603','20upupcc',NULL,NULL),(2,'15737056103','20upupcvcfsd',NULL,NULL),(3,'15737156603','20upupcc',NULL,NULL),(6,'15138226703','1234567',NULL,NULL);
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;

#
# Structure for table "ymguang"
#

DROP TABLE IF EXISTS `ymguang`;
CREATE TABLE `ymguang` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsName` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

#
# Data for table "ymguang"
#

/*!40000 ALTER TABLE `ymguang` DISABLE KEYS */;
INSERT INTO `ymguang` VALUES (1,'','ymG-banner01.jpg','',NULL,NULL),(2,NULL,'ymG-banner02.jpg','111',NULL,NULL),(3,NULL,'ymG-banner03.jpg','222',NULL,NULL),(4,NULL,'ymG-banner04.jpg','555',NULL,NULL),(5,NULL,'ymG-banner05.jpg','666',NULL,NULL),(6,NULL,'ymG-banner06.jpg',NULL,NULL,NULL),(7,NULL,'ymG-img01.jpg',NULL,NULL,'A-C-W x NIKE的训练跑鞋又陪跑了？平价替代款冲一把！'),(8,NULL,'ymG-img02.jpg','PINKORANGE  编织针扣腰带','79',NULL),(9,NULL,'ymG-img03.jpg',NULL,NULL,'降温没有衣服穿？羽绒服来拯救你！'),(10,NULL,'ymG-img04.jpg',NULL,NULL,'机车男孩才是九亿少女的梦！'),(11,NULL,'ymG-img05.jpg',NULL,NULL,NULL),(12,NULL,'ymG-img06.jpg',NULL,NULL,NULL),(13,NULL,'ymG-img07.jpg','Feeder Studio  印花运动腰带','68',NULL),(14,NULL,'ymG-img08.jpg',NULL,NULL,NULL),(15,NULL,'ymG-img09.jpg',NULL,NULL,NULL),(16,NULL,'ymG-img10.jpg',NULL,NULL,NULL),(17,'HuAngle 拼接翻领休闲夹克','ymG-img11.jpg','HuAngle 拼接翻领休闲夹克','599',NULL),(18,'CENA HOO 简约立体方形项链','ymG-img12.jpg','CENA HOO 简约立体方形项链','158',NULL),(19,NULL,'ymG-img13.jpg','PAVO 复古文艺圆框平光镜','229',NULL),(20,NULL,'ymG-img14.jpg','G-SHOCK 音乐蓝牙智能防震防水运动手表 GBA-400-1A9PR','1790',NULL),(21,NULL,'ymG-img15.jpg','HAZE x SCABAL联名限量款 SOUL系列墨镜','2999',NULL),(22,NULL,'ymG-img16.jpg','SCISSORISM 人格测试拼色棉衣','699',NULL),(23,NULL,'ymG-img17.jpg','VANS AP STEP BACK RETRO HOODIE【RETRO CHECK 2.0】','560',NULL),(24,NULL,'ymG-img18.jpg','Stussy LOGO刺绣长袜','179',NULL),(25,NULL,'ymG-img19.jpg','Jabra捷波朗 Elite 45e 悦逸 颈带式运动蓝牙耳机','499',NULL),(26,NULL,'ymG-img20.jpg','PRBLMS 鞋类研究3M反光帽子','129',NULL),(27,NULL,'ymG-img21.jpg','VANS  Old Skool【ALL WEATHER MTE】','725',NULL),(28,NULL,'ymG-img22.jpg','M+RC NOIR 镭射金属斜挎包','1449',NULL),(29,NULL,'ymG-img23.jpg','VANS AP MONOMATIC HOODIE【Winter Collection】','590',NULL),(30,NULL,'ymG-img24.jpg','DICKIES CAP LOGO绣标渔夫帽','259',NULL),(31,NULL,'ymG-img25.jpg','PINKORANGE  针织拼色情侣围巾','139',NULL),(32,NULL,'ymG-img26.jpg','CSNC  符号标签绑带条纹裤','499',NULL),(33,NULL,'ymG-img27.jpg','PRBLMS 鞋类研究撞色织带夹克','399',NULL),(34,NULL,'ymG-img28.jpg','PUMA RS-X TOYS 男女同款拼色休闲鞋','999',NULL),(35,NULL,'ymG-img29.jpg','Connive 短款无袖坎肩针织打底毛衣','130',NULL),(36,NULL,'ymG-img30.jpg','Dickies TC经典原创美版874工装裤','559',NULL),(37,NULL,'ymG-img31.jpg','中国李宁 李宁 x XLARGE联名款男子短袖文化衫','699',NULL),(38,NULL,'ymG-img32.jpg','oammi 街头金属粗裤链','148',NULL),(39,NULL,'ymG-img33.jpg','CASIO  黑盘双显运动防水手表 AQ-S810W-1A4VDF','493',NULL),(40,NULL,'ymG-img34.jpg','CHEAP MONDAY  男款字母印花戒指','119',NULL),(41,NULL,'ymG-img35.jpg','PRBLMS 复古串标多口袋束脚长裤','349',NULL),(42,NULL,'ymG-img36.jpg','Stussy 男款印花圆领长袖T恤','439',NULL),(43,NULL,'ymG-img37.jpg','YOHO!潮流志 （2018年11月上）','15',NULL),(44,NULL,'ymG-img38.jpg','LOFTSHINE 时尚腰带直筒牛仔裤','539',NULL),(45,NULL,'ymG-img39.jpg','inmix 金属椭圆形镜框','168',NULL),(46,NULL,'ymG-img40.jpg','Bluekiki  双梁眉线眼镜框-黑色','139',NULL),(47,NULL,'ymG-img41.jpg','Timberland PRO × N.HOOLYWOOD 连帽拉链卫衣','1490',NULL),(48,NULL,'ymG-img42.jpg','RASTACLAT 荣耀系列 HESTIA迷你鞋带手绳','109',NULL),(49,NULL,'ymG-img43.jpg','OMT 撞色拼接腰带','139',NULL),(50,NULL,'ymG-img44.jpg','NORMAL PEOPLE 探索海洋 高清玻璃手机壳（黑）','69',NULL),(51,NULL,'ymG-img45.jpg','FYP 多口袋宽松牛仔束脚裤','299',NULL),(52,NULL,'ymG-img46.jpg','CASIO  黑盘双显运动防水手表 AQ-S810W-1A4VDF','493',NULL),(53,NULL,'ymG-img47.jpg','PINKORANGE 灯芯绒雷锋帽 卡其','79',NULL),(54,NULL,'ymG-img48.jpg','SLOW 简约设计古铜手镯','268',NULL),(55,NULL,'ymG-img49.jpg','CENA HOO 拉链扣造型耳钉 (单只)','39',NULL),(56,NULL,'ymG-img50.jpg','MARCELO BURLON CUPIDO X CASE','539',NULL),(57,NULL,'ymG-img51.jpg','SIT ON TROUBLE 贴布口袋连帽卫衣','798',NULL),(58,NULL,'ymG-img52.jpg','PUMA X ADER ERROR RS-100 男女同款撞色休闲鞋','1399',NULL),(59,NULL,'ymG-img53.jpg','O!OiMAIN  短款拼色羽绒服（袖子可拆卸）','2398',NULL),(60,NULL,'ymG-img54.jpg','BSN 抹茶绿英文手机壳/套 iPhone 7/8/7P/8P/X/XS/XS Max/XR','69',NULL),(61,NULL,'ymG-img55.jpg','KISSFUNK 街头艺术家金屌屌系列 摇粒绒渔夫帽','180',NULL),(62,NULL,'ymG-img56.jpg','ATTEMPT AW18 平面构成侧开长袖白衬衫','559',NULL),(63,NULL,'ymG-img57.jpg','COMBACK X KEIOS 轻机能系列双肩包','498',NULL),(64,NULL,'ymG-img58.jpg','MYGESMART 口袋印花长袖衬衫','289',NULL),(65,NULL,'ymG-img59.jpg','PAVO 复古个性飞机项链','99',NULL),(66,NULL,'ymG-img60.jpg','converse Jack Purcell Core 休闲运动鞋','539',NULL),(67,NULL,'ymG-img61.jpg','FYP 宽松运动立领套装','499',NULL),(68,NULL,'ymG-img62.jpg','INKNI 字母印花袜子','49',NULL),(69,NULL,'ymG-img63.jpg','ASICS Tiger GEL-LYTE 运动鞋','790',NULL),(70,NULL,'ymG-img64.jpg','A COLD WALL RIGHT ANGLE CARD HOLDER','1569',NULL),(71,NULL,'ymG-img65.jpg','SMG logo贴标冷帽','299',NULL),(72,NULL,'ymG-img66.jpg','letrottoir  金属太阳符号圆形挂坠项链','139',NULL),(73,NULL,'ymG-img67.jpg','Nike Men\'s  Air Footscape Mid Utility DM Shoe','1299',NULL),(74,NULL,'ymG-img68.jpg','oammi  军事锁扣尼龙腰带','148',NULL),(75,NULL,'ymG-img69.jpg',NULL,NULL,NULL),(76,NULL,'ymG-img70.jpg',NULL,NULL,NULL),(77,NULL,'ymG-img71.jpg',NULL,NULL,NULL),(78,NULL,'ymG-img72.jpg',NULL,NULL,NULL),(79,NULL,'ymG-img73.jpg',NULL,NULL,NULL),(80,NULL,'ymG-img74.jpg',NULL,NULL,NULL),(81,NULL,'ymG-img75.jpg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `ymguang` ENABLE KEYS */;

#
# Structure for table "ymhomesite"
#

DROP TABLE IF EXISTS `ymhomesite`;
CREATE TABLE `ymhomesite` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name1` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `addressinfo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

#
# Data for table "ymhomesite"
#

/*!40000 ALTER TABLE `ymhomesite` DISABLE KEYS */;
INSERT INTO `ymhomesite` VALUES (1,'5','1','1','1'),(2,'122','1232323','1','1'),(3,'119','1','10','100000000000'),(21,'119','001','河南省郑州市花河路','大河路');
/*!40000 ALTER TABLE `ymhomesite` ENABLE KEYS */;
