<?php

    spl_autoload_register('myAutoLoad');

    function myAutoLoad ($classes) {

        $path = '../cores/';
        $ext = '.class.php';
        
        $fullPath = $path . $classes . $ext;

        require $fullPath;

    }