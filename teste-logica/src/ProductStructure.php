<?php
namespace App;

class ProductStructure
{
    const products = [
        "preto-PP",
        "preto-M",
        "preto-G",
        "preto-GG",
        "preto-GG",
        "branco-PP",
        "branco-G",
        "vermelho-M",
        "azul-XG",
        "azul-XG",
        "azul-XG",
        "azul-P"
    ];

    public function make(): array
    {
        // cria array com chaves "cor" e "tamanho"
        $arr_div = array_map(fn ($item) => explode('-', $item), ProductStructure::products);

        for ($x = 0; $x < count($arr_div); $x++) {
            $color = $arr_div[$x][0];
            $size = $arr_div[$x][1];

            // contador de "tamanho" por "cor"
            $count_size = array_map(fn ($item) => $item[0] === $color && $item[1] === $size, $arr_div);
    
            $group_size = 0;
            foreach ($count_size as $value) {
                $group_size += $value; 
            }

            $result[$color][$size] = $group_size;
        }

        return $result;
    }
}