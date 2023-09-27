<?php

use Firebase\JWT\JWT;

    require_once '../function/autoload.classess.php';

    class Model extends Database {

        protected function Register_User ($name, $email, $password) {

            if($email) {

                $checkEmail = $this->connect()->prepare("SELECT users.email FROM users WHERE users.email = ?");
                $checkEmail->execute([$email]);
                $emailResult = $checkEmail->fetch();

                if($emailResult) {

                    $data = [
                        'status' => '409',
                        'message' => 'This email is already registered'
                    ];
                    header("HTTP/1.0 409 This email is already registered");
                    echo json_encode($data);
                    exit();

                }

                include_once '../vendor/autoload.php';

                $user_id = uniqid('user');
                $password_hashed = password_hash($password, PASSWORD_DEFAULT);
                $secret_key = "seckey";

                $register = $this->connect()->prepare("INSERT INTO users ( user_id, name, email, password, secret_key ) VALUES ( ?, ?, ?, ?, ?) ");
                $register->execute([$user_id, $name, $email, $password_hashed, $secret_key]);

                $payload = [
                    'iss' => 'localhost',
                    'user_data' => [
                        'user_id' => $user_id,
                        'name' => $name,
                        'email' => $email
                    ]
                ];

                $access_token = JWT::encode($payload, $secret_key, 'HS256');
    
                $data = [
                    'status' => 200,
                    'message' => 'Registered Successfully!',
                    'access_token' => $access_token
                ];
                header("HTTP/1.0 200 Registered Successfully!");
                echo json_encode($data);
                exit();
            }

        }

        protected function Login_User ($email, $password) {

            require_once '../vendor/autoload.php';

            $checkEmail = $this->connect()->prepare("SELECT users.email, users.password FROM users WHERE users.email = ?");
            $checkEmail->execute([$email]);
            $emailResult = $checkEmail->fetch();

            if(!$emailResult) {
                $data = [
                    'status' => 401,
                    'message' => 'Wrong Credentials'
                ];
                header("HTTP/1.0 401 Wrong Credentials");
                echo json_encode($data);
                exit();
            }

            $password_unhashed = password_verify($password, $emailResult['password']);

            if(!$password_unhashed) {

                $data = [
                    'status' => 401,
                    'message' => 'Wrong Credentials'
                ];
                header("HTTP/1.0 401 Wrong Credentials");
                echo json_encode($data);
                exit();

            } else {

                $checkData = $this->connect()->prepare("SELECT * FROM users WHERE users.email = ? AND users.password = ?");
                $checkData->execute([$email, $emailResult['password']]);
                $datas = $checkData->fetch();
    
                if(!$datas) {
                    
                    $data = [
                        'status' => 401,
                        'message' => 'Wrong Credentials'
                    ];
                    header("HTTP/1.0 401 Wrong Credentials");
                    echo json_encode($data);
                    exit();
    
                }
    
                $payload = [
                    'iss' => 'localhost',
                    'user_data' => [
                        'user_id' => $data['user_id'],
                        'name' => $datas['name'],
                        'email' => $datas['email']
                    ]
                ];
    
                $access_token = JWT::encode($payload, $datas['secret_key'], 'HS256');
    
                $data = [
                    'status' => 200,
                    'message' => 'Logged In Successfully!',
                    'access_token' => $access_token
                ];
                header("HTTP/1.0 200 Logged In Successfully!");
                echo json_encode($data);
    
                $checkData = null;
                exit();
            }

        }

    }