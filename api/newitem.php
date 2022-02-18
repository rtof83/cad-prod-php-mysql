<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');

include_once 'conn.php';

$response_json = file_get_contents('php://input');
$data = json_decode($response_json, true);

if ($data) {

    $query = 'INSERT INTO ' . $data['table'] . ' (name) VALUES (:name)';
    $cad = $conn -> prepare($query);

    $cad -> bindParam(':name', $data['name']);
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
