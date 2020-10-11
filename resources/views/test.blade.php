<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Aula usuarios</title>
</head>
<body>
{{--     
@foreach($users as $user)
{{echo " Nome: {$user->name} <br>";}}
@endforeach --}}

<?php 
foreach ( $users as $user ) {
    echo " Nome: {$user->name}";
    echo " Email: {$user->email} <br>";
}
?>
</body>
</html>