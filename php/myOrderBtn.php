<?php
	include("../inc/dbconn.php");
    $status = $_GET["status"];
    $ordernum = $_GET["ordernum"];
    $sql = "update myorder set status = $status where ordernum = $ordernum";
    $result = $conn->query($sql);
    echo $result;
    
    
?>