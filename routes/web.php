<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
	return view('ola');
});

Route::get('home', [
	'as' => 'site.home',
	'uses' => 'Site\HomeController@index',
]);

Route::get('imobiliaria', function () {
	return view('imobiliaria/index');
});
Auth::routes();
Route::get('/produtos', 'ProdutoController@listarProdutos');
Route::get('/produtos/mostra/{id}', 'ProdutoController@visualizarProduto')->where('id', '[0-9]+');
Route::get('/produtos/novo', 'ProdutoController@novoProduto');
Route::post('/produtos/cadastrar', 'ProdutoController@cadastrarProduto');
Route::get('/produtos/remover/{id}', 'ProdutoController@removerProduto');
Route::get('/produtos/json', 'ProdutoController@listaJson');
Route::get('produtos/sair', 'ProdutoController@sair');
Route::get('login', 'LoginController@login');
Route::post('auth', 'LoginController@auth');
// Route::get('/teste', function (){
//     return view('teste');
// });

// Route::get('/test', 'TestController@index');
// Route::get('produtos', 'ProdutosController@index');

// Auth::routes();

// Route::get('/home', 'HomeController@index');

// Route::get('/users', function () {
// 	return Datatables::of(App\User::with('posts', 'post'))->make(true);
// });

// Route::get('eloquent', 'EloquentController@index');
// Route::get('eloquent/users-data', 'EloquentController@usersData');
// foreach(Finder::create()->in([
//     __DIR__.'/eloquent',
//     __DIR__.'/buttons',
// ])->files() as $file) {
//     require $file->getPathname();
// }
// Route::get('eloquent/{view}', 'EloquentController@display');
