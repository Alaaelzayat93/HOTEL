<?php
include("config.php");

$price=$_POST["price"];
$type=$_POST["type"];
$descr=$_POST["descr"];

if($_FILES['z']){
    $img_name=$_FILES["z"]["name"]; // image name
    move_uploaded_file($_FILES["z"]["tmp_name"],"../upload/$img_name"); // step 1
}

$resp["status"]=mysqli_query($con,"insert into store( price, type, descr, img) VALUES('$price','$type','$descr','upload/$img_name')"); // step 2 & 3


echo json_encode($resp); // step 4

?>