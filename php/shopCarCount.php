<?php
	include("../inc/dbconn.php");
	$userid = $_GET["userid"];
	$sql = "select * from shopcar where userid = $userid";
	$result = $conn->query($sql);
	if($result->num_rows>0){
		$data["success"] = 1;
		$data["goodsNum"] = $result->num_rows;
	}else{
		$data["success"] = 0;
	}

	echo json_encode($data);
?>