<?php
include("config.php");

$name=$_POST["name"];
$price=$_POST["place"];
$type=$_POST["type"];
$descr=$_POST["descr"];

if($_FILES['z']){
    $img_name=$_FILES["z"]["name"]; // image name
    move_uploaded_file($_FILES["z"]["tmp_name"],"../upload/$img_name"); // step 1
}

$resp["status"]=mysqli_query($con,"insert into store(name, place, type, descr, img) VALUES('$name','$place','$type','$descr','upload/$img_name')"); // step 2 & 3


echo json_encode($resp); // step 4

?>