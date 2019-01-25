<?php
	include("../inc/dbconn.php");
	$Id= $_GET["id"];
	$userid=$_GET["userid"];
	$sql="insert into favo (goodid,userid) values ($Id,$userid)";
	$conn->query($sql);
?>