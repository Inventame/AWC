<?php

    // Definir la manipulacion de la Data para dar respuesta json res=> succes || error
    if ( $_SERVER['REQUEST_METHOD'] == 'POST' )
    {
        if(array_key_exists_r('name|subject|email|message',filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING)))
        {   
            echo json_encode(["res" => "success"]);
        }else{
            echo json_encode(["res" => "error"]);  
        }
    }
     
    function array_key_exists_r($keys, $search_r)
    {
        $keys_r = split('\|',$keys);
        foreach($keys_r as $key)
        if(!array_key_exists($key,$search_r))
        return false;
        return true;
    }

?>