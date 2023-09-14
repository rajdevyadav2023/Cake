<?php

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

                $register = $this->connect()->prepare("INSERT INTO users ( name, email, password ) VALUES ( ?, ?, ?) ");
                $register->execute([$name, $email, $password]);
    
                $data = [
                    'status' => 200,
                    'message' => 'Registered Successfully!'
                ];
                header("HTTP/1.0 200 Registered Successfully!");
                echo json_encode($data);
                exit();
            }

        }

        protected function Login_User ($email, $password) {

            $checkData = $this->connect()->prepare("SELECT * FROM users WHERE users.email = ? AND users.password = ?");
            $checkData->execute([$email, $password]);
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

            $data = [
                'status' => 200,
                'message' => 'Logged In Successfully!'
            ];
            header("HTTP/1.0 200 Logged In Successfully!");
            echo json_encode($data);

            $checkData = null;
            exit();

        }

    }