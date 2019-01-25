<?php
	include("../inc/dbconn.php");
	$page = $_GET["page"];
	$dir = $_GET["dir"];
	$page=($page-1)*6;
	$sql = "select * from goods where dir = $dir limit $page,6";
	$result = $conn->query($sql);
	if($result->num_rows>0){
		while ($row = mysqli_fetch_assoc($result)) {
			$list[] = $row;
		}
		$data["success"] = 1;
		$data["list"] = $list;
	}else{
		$data["success"] = 0;
	}

	echo json_encode($data);
?>