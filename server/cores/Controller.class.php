<?php

    require_once '../function/autoload.classess.php';

    class Controller extends Model {

        public function registerUser ($name, $email, $password) {

            $this->Register_User($name, $email, $password);

        }

        public function loginUser ($email, $password) {

            $this->Login_User($email, $password);

        }

    }