<?php
// header("Access-Control-Allow-Origin: *");
    include("../inc/zj-dbconn.php");

    // $username = $_GET["username"];
    // $mobile = $_GET["mobile"];
    // $area = $_GET["area"];
    // $address = $_GET["address"];
    
    if($_POST){
      $Id = $_POST["Id"];
      $sql2 = "select * from locationinfo where Id = '$Id' ";
      $result2 = $conn->query($sql2);
      if ($result2->num_rows > 0){
        while($row = mysqli_fetch_assoc($result2)){
          $list[] = $row;
        }
        $data["success"] = 1;
        $data["list"] = $list;
      }else{
        $data["success"] = 0;
        }
        echo json_encode($data);
    }
    
    
    // echo "1";
    if($_GET){
      $userId = $_GET["userId"];
      $sql = "select * from locationinfo where userid = '$userId' ";
    
   
      $result = $conn->query($sql);
    
      if ($result->num_rows > 0){
      while($row = mysqli_fetch_assoc($result)){
        $list[] = $row;
      }
        $data["success"] = 1;
        $data["list"] = $list;
      }else{
        $data["success"] = 0;
      }
    echo json_encode($data);
    }

    
?>