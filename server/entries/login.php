<?php

  header("Access-Control-Allow-Origin: *");

  $method = $_SERVER['REQUEST_METHOD'];

  if($method === 'POST') {

    $email = $_POST['email'];
    $password = $_POST['password'];

    include_once '../function/autoload.classess.php';
    $login = new Controller;
    $login->loginUser($email, $password);

    exit();

  }
  else {

    $data = [
      'message' => $method . ' Method Not Allowed'
    ];
    header("HTTP/1.0 405");
    echo json_encode($data);
    exit();

  }