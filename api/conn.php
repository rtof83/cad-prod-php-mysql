<?php

$host = '127.0.0.1';
$user = 'root';
$pass = '';
$dbName = 'database';
$port = '3306';

$conn = new PDO("mysql:host=$host; port=$port; dbname=" . $dbName, $user, $pass);

?>
