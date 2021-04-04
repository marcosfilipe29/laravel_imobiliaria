<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;
use Request;

class LoginController extends Controller {

	public function login() {
		return view('login.login');
	}

	public function auth() {
		if (Auth::attempt(Request::only('email', 'password'))) {
			return redirect()->action('ProdutoController@listarProdutos');
		}
		return redirect()->action('LoginController@login');
	}
}