<?php
session_start();
date_default_timezone_set("PRC");

if(!empty($_GET['send_sms'])){
    include('../SMS/sms.class.php');
    $sms = new ihuyi_sms;
    $sms -> send_sms($_POST['mobile']);
    die;
}

if($_POST){
    include('../inc/user-dbconn.php');

	// 接受客户端的值
	$phone = $_POST['mobile'];
	$code = $_POST['mobile_code'];
	$pw = $_POST['pw'];
	if($phone!=$_SESSION['mobile'] or $code!=$_SESSION['mobile_code'] or empty($phone) or empty($code)){
		echo 'error';
	}else{
		
	// 	// 清空session
		$_SESSION['mobile'] = '';
		$_SESSION['mobile_code']= '';
		
		$seleSql = "update userinfo set password = '$pw' where mobile = '$phone' ";
		$res=$conn->query($seleSql);
	
			echo 'success';
		}
}

?>