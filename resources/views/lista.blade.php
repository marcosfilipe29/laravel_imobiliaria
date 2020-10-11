<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lista de compra</title>
</head>
<body>
    <h1 style=" color: rgb(153, 0, 140)">Lista de Produtos</h1>
    <?php 
    foreach ( $produtos as $produto ) {
        echo " Nome: {$produto->nome}";
        echo "  {$produto->descricao} <br>";
        echo "<br><hr>";
    }
    ?>

@foreach($produtos as $produto)
<div class="alert alert-info" style="background-color:#C9DCFC">
    <h2><a href="/produtos/{{ $produto->id }}">{{ $produto->nome }}</a></h2>      
    <p style="color: #FFF">{{  $produto->descricao  }}</p>
    <br />  


    
</div> 
@endforeach

</body>
</html>