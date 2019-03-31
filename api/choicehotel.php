<?php
include("config.php");

$data=json_decode(file_get_contents("php://input"),true);
$hotelId=$data["hotelId"];
$place=$data["place"];
$type=$data["type"];


// step 1

$resp["status"]=mysqli_query($con,"insert into room(hotelId,place,type,) VALUES('$hotelId','$place','$type')"); // step 2 & 3

echo json_encode($resp); // step 4

?>