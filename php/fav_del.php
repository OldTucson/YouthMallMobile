<?php
	include("../inc/dbconn.php");
	$Id= $_GET["id"];
	$userid=$_GET["userid"];
	$sql="delete from favo where goodid=$Id&&userid=$userid";
	$conn->query($sql);
?>