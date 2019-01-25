<?php
    include("../inc/dbconn.php");
    $name=$_POST["name"];
    $mobile=$_POST["mobile"];
    $area=$_POST["area"];
    $address=$_POST["address"];
    $ID=$_POST["id"];
    $sql="update locationinfo set username='$name',mobile='$mobile',area='$area',address='$address' where Id=$ID";
        $conn->query($sql);

?>