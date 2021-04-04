@extends('layout.principal')
@section('conteudo')
@foreach($produto as $p)
<h1>Detalhes do Produto: {{$p->nome}} </h1>
<ul>
<li>
<b>Valor:</b> R$ {{$p->valor}}</li>
<li>
<b>Descrição:</b> {{$p->descricao}}
</li>
<li>
<b>Quantidade em Estoque:</b> {{$p->quantidade}}
</li>
</ul>
@endforeach
@stop