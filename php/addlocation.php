<?php
// header("Access-Control-Allow-Origin: *");
    include("../inc/zj-dbconn.php");

    $username = $_GET["username"];
    $mobile = $_GET["mobile"];
    $area = $_GET["area"];
    $address = $_GET["address"];
    $userid = $_GET["userid"];


    $sql = "insert into locationinfo (username, mobile, area, address,userid) VALUES ('$username','$mobile','$area','$address','$userid')";

    $result = $conn->query($sql);
?>