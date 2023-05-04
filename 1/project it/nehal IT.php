<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $data =json_decode
    ( file_get_contents('users.json'),true);

    $email =$_POST['email'];
    $password =$_POST['password'];

    foreach($data as $user){
        if ($user ['email']== $email){
            if(password_verify($password ,$user['password'])){
                 echo 'login successful!';
                 session_start();
                 $_SESSION['name'] =$user['name'];
                 header('Location:dashboad.php');
                 exit;
    }            else{
                        echo'invalid password';
                        exit;
    }

    }
    }
    echo 'user not found';
}