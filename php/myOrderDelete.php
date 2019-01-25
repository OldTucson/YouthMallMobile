<?php
	include("../inc/dbconn.php");
    $ordernum = $_GET["ordernum"];
    $sql = "delete myorder,ordergoods from myorder LEFT JOIN ordergoods ON myorder.ordernum=ordergoods.ordernum1 WHERE myorder.ordernum=$ordernum";
    $result = $conn->query($sql);
    echo $result;
    
    
?>