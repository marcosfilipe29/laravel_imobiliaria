<?php
namespace App\Http\Controllers;
use App\Http\Requests\ProdutoRequest;
use App\Produto;

class ProdutoController extends Controller {
	public function __construct() {
		$this->middleware('auth', ['only' => ['cadastrarProduto', 'removerProduto']]);
	}

	public function listarProdutos() {
		$produtos = Produto::all();
		return view('produto.listagem')->with('produtos', $produtos);
	}

	public function visualizarProduto($id) {
		$produto = Produto::find([$id]);
		if (empty($produto)) {
			return "Esse produto não existe.";
		}
		return view('produto.detalhes')->with('produto', $produto);
	}

	public function novoProduto() {
		return view('produto.formulario');
	}

	public function cadastrarProduto(ProdutoRequest $produto) {
		Produto::create($produto->all());
		// return redirect()
		// 	->action('ProdutoController@listarProdutos')
		// 	->withInput(Request::only('nome'));
		return redirect()->action('ProdutoController@listarProdutos');
	}

	public function removerProduto($id) {
		$produto = Produto::find($id);
		$produto->delete();
		return redirect()->action('ProdutoController@listarProdutos');
	}

	public function listaJson() {
		$produtos = Produto::all();
		return response()->json($produtos);
	}

	public function sair() {
		Auth::logout();
		return redirect()->action('LoginController@login');
	}
}