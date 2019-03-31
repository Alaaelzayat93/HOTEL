<?php
include("config.php");

$data=json_decode(file_get_contents("php://input"),true);
$room-Id=$data["room-Id"];
$price=$data["price"];
$timeBooked=$data["timeBooked"];


// step 1

$resp["status"]=mysqli_query($con,"insert into room(room-Id,price,timeBooked,) VALUES('$room-Id','$price','$timeBooked')"); // step 2 & 3

echo json_encode($resp); // step 4

?>