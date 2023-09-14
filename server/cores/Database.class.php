<?php

    class Database {

        protected function connect () {

            try {

                $host = 'localhost';
                $username = 'root';
                $password = '';
                $database_name = 'cake';
                $database = new PDO("mysql:host={$host}; dbname={$database_name}", $username, $password);
                return $database;

            } catch (PDOException $e) {

                print 'Error: ' . $e->getMessage();

            }

        }

    }