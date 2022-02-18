<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: *');

include_once 'conn.php';

$response_json = file_get_contents('php://input');
$data = json_decode($response_json, true);

if ($data) {

    $query_product = 'UPDATE ' . $data['table'] . ' SET name = :name WHERE id = :id';
    $cad_product = $conn -> prepare($query_product);

    $cad_product -> bindParam(':id', $data['id']);
    $cad_product -> bindParam(':name', $data['name']);

    $cad_product -> execute();

    if ($cad_product -> rowCount()) {
        $response = [
            'error' => false,
            'message' => 'Item atualizado!'
        ];
    } else {
        $response = [
            'error' => true,
            'message' => 'Erro ao atualizar item.'
        ];
    }
} else {
    $response = [
        'error' => true,
        'message' => 'Erro ao atualizar item.'
    ];
}

http_response_code(200);
echo json_encode($response);

?>
