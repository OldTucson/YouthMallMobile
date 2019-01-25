<?php
$servername="localhost";
$username="root";
$pw="root";
$dbname="youthmallmobile";
$conn=new mysqli($servername,$username,$pw,$dbname);
if($conn->connect_error){
    die("连接失败".$conn->connect_error);
}
?>