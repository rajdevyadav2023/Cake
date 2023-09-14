<?php

  header("Access-Control-Allow-Origin: *");

  $method = $_SERVER['REQUEST_METHOD'];

  if($method === 'POST') {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    require_once '../function/autoload.classess.php';
    $register = new Controller;
    $register->registerUser($name, $email, $password);

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