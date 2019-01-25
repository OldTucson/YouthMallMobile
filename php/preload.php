<?php
	include("../inc/dbconn.php");
	$dir = $_GET["dir"];
    $keywords = $_GET["keywords"];
	$sql = "select * from goods where cate like '%$keywords%' and dir=$dir order by Id desc limit 0,6";
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