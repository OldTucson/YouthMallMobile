<?php
	include("../inc/zj-dbconn.php");
	// $username = $_GET["username"];
	$userId = $_GET["userId"];
	$id = $_GET["goodsid"];
	// $page=($page-1)*4;
	$sql1 = "delete from favo where userid = '$userId' and goodsid = '$id' ";
	$result1= $conn->query($sql1);
	if($result1){
		$data["success"] = 1;
	}else{
		$data["success"] = 0;
	}
	echo json_encode($data);
?>