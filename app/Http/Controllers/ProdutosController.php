<?php

namespace App\Http\Controllers;

use App\Produtos;
use Illuminate\Http\Request;

class ProdutosController extends Controller
{
    public function index () {
        $produtos = Produtos::all();
        return view('lista')->with(['produtos' => $produtos]);
    }
}
