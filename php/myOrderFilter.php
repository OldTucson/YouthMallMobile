<?php
	include("../inc/dbconn.php");
    $userid = $_GET["userid"];
    $status = $_GET["status"];
	// $sql = "select * from myorder where userid=$userid order by Id desc";
	$sql = "select * from myorder as a left join ordergoods as b on a.ordernum = b.ordernum1 and a.userid = $userid and a.status = $status order by a.status asc";
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