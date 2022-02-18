<?php

$table = 'products';

$response_json = file_get_contents('php://input');
$data = json_decode($response_json, true);

$prod_name = filter_input(INPUT_GET, 'prod_name');

echo 'esse eh o JSON -> ' . $data['table'];

echo '<br />';
echo '<br />';

echo 'variável table -> ' . $table;

echo '<br />';
echo '<br />';

echo 'variável prod_name -> ' . $prod_name;

?>
