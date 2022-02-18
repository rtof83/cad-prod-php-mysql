<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

include_once 'conn.php';

$response_json = file_get_contents('php://input');
$data = json_decode($response_json, true);

if ($data) {

    $query = 'INSERT INTO product_tag (product_id, tag_id) VALUES (:prod_id, :tag_id)';
    $cad = $conn -> prepare($query);

    $cad -> bindParam(':prod_id', $data['prod_id']);
    $cad -> bindParam(':tag_id', $data['tag_id']);
    $cad -> execute();

    if ($cad -> rowCount()) {
        $response = [
            'error' => false,
            'message' => 'Item cadastrado com sucesso!'
        ];
    } else {
        $response = [
            'error' => true,
            'message' => 'Erro ao cadastrar item.'
        ];
    }
} else {
    $response = [
        'error' => true,
        'message' => 'Erro ao cadastrar item.'
    ];
}

http_response_code(200);
echo json_encode($response);

?>
