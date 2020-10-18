<?php

namespace App\Http\Controllers\Site;


use App\Cidade;
use App\Tipo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Imovel;
use Illuminate\Auth\Access\Response;

class HomeController extends Controller
{
    
    public function index () {
        $imoveis = Imovel::where('publicar','=','sim')->orderBy('id','desc')->paginate(20);
        $tipos = Tipo::orderBy('titulo')->get();
        $cidades = Cidade::orderBy('nome')->get();
        $direcaoImagem = ['center-align','left-align','right-align'];
        $paginacao = true;

        // return view('site.home', compact('imoveis', 'direcaoImagem', 'tipos', 'cidades', 'paginacao'));
        return Imovel::get();
        
    }
}
