<?php
header("Content-type:text/html; charset=utf-8");

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
	if($phone!=$_SESSION['mobile'] or $code!=$_SESSION['mobile_code'] or empty($phone) or empty($code)){
		$data['success'] = 'error';
	}else{
		
	// 清空session
		$_SESSION['mobile'] = '';
		$_SESSION['mobile_code']= '';
		
		//  查询手机号是否已经注册
		$seleSql = "select Id from userinfo where mobile like '$phone'";
		$res=$conn->query($seleSql);
		if($res->num_rows>0){
			while($row = mysqli_fetch_assoc($res)){
                $list[]=$row;
                $data["id"]=$list[0]["Id"];
                $data["success"] = 'success';
            }
		}else{
            $data['success'] = 'none';
        }
    }
    echo json_encode($data);
}

?>