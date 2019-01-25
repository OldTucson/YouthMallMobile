<?php
	include("../inc/dbconn.php");
	$Id= $_GET["id"];
	$userid=$_GET["userid"];
	$sql="insert into shopcar (goodsid,userid) values ($Id,$userid)";
	$conn->query($sql);
?>