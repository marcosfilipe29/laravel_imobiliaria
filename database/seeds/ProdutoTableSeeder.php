<?php

use Illuminate\Database\Seeder;

class ProdutoTableSeeder extends Seeder {
	public function run() {
		DB::insert('INSERT INTO produtos (nome, quantidade, valor, descricao) VALUES (?,?,?,?)', array('Geladeira', 2, 5900.00, 'Side by Side com gelo na porta'));
		DB::insert('INSERT INTO produtos (nome, quantidade, valor, descricao) VALUES (?,?,?,?)', array('Fogão', 5, 950.00, 'Painel automático e forno elétrico'));
		DB::insert('INSERT INTO produtos (nome, quantidade, valor, descricao) VALUES (?,?,?,?)', array('Microondas', 1, 1520.00, 'Manda SMS quando termina de esquentar'));
	}

}