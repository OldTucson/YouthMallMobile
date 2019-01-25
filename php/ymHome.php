<?php
header("Access-Control-Allow-Origin: *");
	include("../inc/dbconn.php");
	$Id= $_GET["id"];
	$sql="select * from locationinfo where id=$Id";
	$result=$conn->query($sql);
	// echo $sql;
	if($result->num_rows>0){
		while($row=mysqli_fetch_assoc($result)){
			$list[]=$row;
		}
		$data["success"]=1;
		$data["list"]=$list;
	}else{
		$data["success"]=0;
	}
	echo json_encode($data);
?>