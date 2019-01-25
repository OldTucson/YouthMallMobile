<?php
    include("../inc/dbconn.php");
    $name=$_POST["name"];
    $mobile=$_POST["mobile"];
    $area=$_POST["area"];
    $address=$_POST["address"];
    $sql="insert into ymhomesite (name1,tel,addressinfo,address) values ('$name','$mobile','$area','$address')";
        $conn->query($sql);

?>