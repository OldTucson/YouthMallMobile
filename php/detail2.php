<?php
	include("../inc/dbconn.php");
	$Id= $_GET["id"];
	$userid=$_GET["userid"];
	$sql="select * from favo where goodid=$Id&&userid=$userid";
	$result=$conn->query($sql);
	if($result->num_rows>0){
		echo "1";
	}else{
		echo "0";
    }
?>
	