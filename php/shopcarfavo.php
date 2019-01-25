<?php
	include("../inc/zj-dbconn.php");
	// $username = $_GET["username"];
	$userId = $_GET["userId"];
	$id = $_GET["goodsid"];
	// $page=($page-1)*4;
    $sql1 = "insert into favo  (userid,goodid) values ('$userId','$id') ";
    $sql2 = "delete from shopcar where userid = '$userId' and goodsid = '$id' ";
	$result1= $conn->query($sql1);
	$result2= $conn->query($sql2);
	// if($result1){
	// 	$data["success"] = 1;
	// }else{
	// 	$data["success"] = 0;
	// }
	// echo json_encode($data);
?>