<?php
// header("Access-Control-Allow-Origin: *");
    include("../inc/zj-dbconn.php");

    // $username = $_GET["username"];
    // $mobile = $_GET["mobile"];
    // $area = $_GET["area"];
    // $address = $_GET["address"];
    $userId = $_GET["userid"];
    // echo "1";
    $sql = "insert into  shopcar (userid) values ('$userId') ";
    $result = $conn->query($sql);
    // if ($result->num_rows > 0){
	// 	while($row = mysqli_fetch_assoc($result)){
	// 		$list[] = $row;
	// 	}
	// 	$data["success"] = 1;
	// 	$data["list"] = $list;
	// }else{
	// 	$data["success"] = 0;
    // }
    // echo json_encode($data);