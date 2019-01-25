<?php
include('../inc/user-dbconn.php');

$user = $_POST['mobile'];
$pw = $_POST['pw'];

$sql = "select Id,password from userinfo where mobile like '$user'";

$result = $conn->query($sql);

if($result->num_rows>0){

    while($row = mysqli_fetch_assoc($result)){

        $list[]=$row;
        // 判断查询到的密码是否等于用户输入的密码
        if($list[0]["password"]===$pw){
            $data["id"]=$list[0]["Id"];
            $data["success"] = 1;
            // 登录成功
        }else{
            $data["success"] = 0;
            // 登录失败
        }   
    }
}else{
    $data["success"] = 666;
    // 用户不存在
}

echo json_encode($data);

