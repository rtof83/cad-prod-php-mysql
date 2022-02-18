<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');

include_once 'conn.php';

$prod_name = filter_input(INPUT_GET, 'prod_name');

$query = 'SELECT id FROM product WHERE name = "' . $prod_name . '"';
$result = $conn -> prepare($query);
$result -> execute();

$list = 0;
if (($result)) {
    while ($row = $result -> fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $list = $id;
    }

    http_response_code(200);
    echo json_encode($list);
}

?>
