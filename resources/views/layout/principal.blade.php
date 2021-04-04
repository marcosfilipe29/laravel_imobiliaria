<html>
<head>
	<meta charset="UTF-8">
	<title>Controle de Estoque</title>
	<meta name="csrf-token" content="{{ csrf_token() }}">


	<link rel="stylesheet" href="/css/app.css">
	<link rel="stylesheet" href="/css/custom.css">
</head>
<body>
	<div class="container">
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand" href="/produtos">
						Estoque Laravel
					</a>
				</div>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="{{action('ProdutoController@listarProdutos')}}">Listagem</a></li>
					<li><a href="{{action('ProdutoController@novoProduto')}}">Novo</a></li>
					<li><a href="{{action('ProdutoController@sair')}}">Sair</a></li>

				</ul>
			</div>
		</nav>
		@yield('conteudo')
		<footer class="footer">
			<p>© Livro de Laravel da Casa do Código.</p>
		</footer>
	</div>
</body>
</html>