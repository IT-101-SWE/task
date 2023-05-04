<?php
session_start();

if(isset($_SESSION['name'])){
     echo'<h1>welcome' . $_SESSION['name'] .'</h1>';
     echo '<a href ="logout.php">LOG OUT</a>';

}else {
    echo '<h1>Welcome, guest</h1>';
    echo'<a href="nehal IT.html">Home</a>';
}