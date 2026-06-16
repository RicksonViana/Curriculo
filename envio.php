<?php

$nome = htmlspecialchars($_POST["nome"]);
$email = htmlspecialchars($_POST["email"]);
$mensagem = htmlspecialchars($_POST["mensagem"]);

$texto = "Nome: $nome\n";
$texto .= "Email: $email\n";
$texto .= "Mensagem: $mensagem\n";
$texto .= "-----------------\n";

file_put_contents("mensagens.txt", $texto, FILE_APPEND);

echo "Mensagem enviada com sucesso! ✔";
?>