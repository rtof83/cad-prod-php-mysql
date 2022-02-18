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
    $query = 'DELETE FROM product_tag WHERE ' . $data['table'].'_id = :id';
    $cad = $conn -> prepare($query);
    
    $cad -> bindParam(':id', $data['id']);
    $cad -> execute();

    $query = 'DELETE FROM ' . $data['table'] . ' WHERE id = :id';
    $cad = $conn -> prepare($query);

    $cad -> bindParam(':id', $data['id']);
    $cad -> execute();


    if ($cad -> rowCount()) {
        $response = [
            'error' => false,
            'message' => 'Item excluído!'
        ];
    } else {
        $response = [
            'error' => true,
            'message' => 'Erro ao excluir item.'
        ];
    }
} else {
    $response = [
        'error' => true,
        'message' => 'Erro ao excluir item.'
    ];
}

http_response_code(200);
echo json_encode($response);

?>
