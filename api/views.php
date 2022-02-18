<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');

include_once 'conn.php';

$table = filter_input(INPUT_GET, 'table');

$query = 'SELECT id, name FROM ' . $table . ' ORDER BY id';
$result = $conn -> prepare($query);
$result -> execute();

if (($result) and ($result -> rowCount() != 0)) {
    while ($row = $result -> fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        if ($table === 'product') {
            $query_tag = 'SELECT T.name AS tag
                      FROM product AS P
                      INNER JOIN product_tag AS PT ON P.id = PT.product_id
                      INNER JOIN tag AS T ON T.id = PT.tag_id
                      WHERE P.id = ' . $id;
            $result_tag = $conn -> prepare($query_tag);
            $result_tag -> execute();

            $tags = [];
            while ($row_tag = $result_tag -> fetch(PDO::FETCH_ASSOC)) {
                extract($row_tag);
                array_push($tags, $tag);
            }
            

            $list['records'][] = [
                'id' => $id,
                'name' => $name,
                'tags' => $tags
            ];
        } else {
            $list['records'][] = [
                'id' => $id,
                'name' => $name
            ];
        }
    }

    http_response_code(200);
    echo json_encode($list);
}

?>
