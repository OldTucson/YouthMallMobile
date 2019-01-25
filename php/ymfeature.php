<?php
	include("../inc/dbconn.php");
	$page = $_GET["page"];
	$page=($page-1)*4;
	$sql = "select * from ymfeature limit $page,24";
	$sql1 = "select * from ymfeature order by Id limit 24,45";
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
	$result = $conn->query($sql1);
	if($result->num_rows>0){
		while ($row = mysqli_fetch_assoc($result)) {
			$list1[] = $row;
		}
		$data["success"] = 1;
		$data["list1"] = $list1;
	}else{
		$data["success"] = 0;
	}
	echo json_encode($data);

?>