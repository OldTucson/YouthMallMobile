<?php
	include("../inc/dbconn.php");
	$userid=$_GET["userid"];
	$sql="select * from shopcar where userid=$userid";
    $result=$conn->query($sql);
    $data=$result->num_rows;
    echo $data;
?>