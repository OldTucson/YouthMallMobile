<?php
// header("Access-Control-Allow-Origin: *");
    include("../inc/zj-dbconn.php");

    $goodsid = $_GET["goodsid"];
    // $mobile = $_GET["mobile"];
    // $area = $_GET["area"];
    // $address = $_GET["address"];
    // $userid = $_GET["userid"];
    $ordernum=$_GET["ordernum"];
    $ordernum1=$_GET["ordernum1"];
    $userid=$_GET[ "userid"];
    $allprice=$_GET[ "allprice"];
    $allnum=$_GET[ "allnum"];
    $status=$_GET[ "status"];
    $goodsnum=$_GET[ "goodsnum"];
    $goodsname=$_GET[ "goodsname"];
    $color=$_GET[ "color"];
    $size=$_GET[ "size"];
    $num=$_GET[ "num"];
    $price=$_GET ["price"];
    $oldprice=$_GET ["oldprice"];
    $pic=$_GET ["pic"];
    // echo "1";
    
    $sql = "insert into  ordergoods (ordernum1,goodsname,color,size,num,price,oldprice,pic) values ('$ordernum1','$goodsname','$color','$size','$num','$price','$oldprice','$pic') ";
    $sql2 = "insert into  myorder (ordernum,userid,allprice,allnum,status,goodsnum) values ('$ordernum','$userid','$allprice','$allnum','$status','$goodsnum') ";
    $sql3 = "delete from shopcar where userid = '$userid' and goodsid = '$goodsid' ";
    // $sql2 = "insert into  order (ordernum) values ('1') ";
    
    if(isset($pic)){
        $conn->query($sql);
    }
    if(isset($goodsnum)){
        $conn->query($sql2);
    }
    if(isset($goodsid)){
        $conn->query($sql3);
    }
    
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