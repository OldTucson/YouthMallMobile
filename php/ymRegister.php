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
		
		// 清空session
		$_SESSION['mobile'] = '';
		$_SESSION['mobile_code']= '';
		
		//  查询手机号是否已经注册
		$seleSql = "select * from userinfo where mobile like '$phone'";
		$res=$conn->query($seleSql);
		if($res->num_rows>0){
			echo 'repeat';
			die;
		}
	
		// 存入数据库
		$sql="insert into userinfo (mobile,password) VALUES ('$phone','$pw')";
		$result=$conn->query($sql);
		if($result === true){
			echo 'success';
		}
	}
}

?>