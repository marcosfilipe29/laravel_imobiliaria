<?php

use App\Country;
use App\Imovel;
use App\Cidade;
use App\Tipo;
use Illuminate\Database\Seeder;

class PopulateSeeder extends Seeder
{
    /**
     *Run the database seeds.
     * 
     *@return void 
     */
    public function run()
    {
    	Country::query()->forceCreate(['name' => 'Mongol']);

    	//Tipo::query()->forceCreate(['titulo' => 'Aluguel']);
    	//Tipo::query()->forceCreate(['titulo' => 'Venda']);

    	Cidade::query()->forceCreate(
    		[
                'nome' => 'Aparecida de Goiania',
                'estado' => 'Goias',
                'sigla_estado' => 'GO',
    		]
    	);

    	Imovel::query()->forceCreate(
    		[
    			'tipo_id' => 1,
    			'Cidade_id' => 1,
    			'titulo' => 'apartamento a venda',
    			'descricao' => 'tem conzinha',
    			'imagem' => 'img',
    			'status' => 'vende',
    			'endereco' => 'rua xxxxx',
    			'cep' => '74922-320',
    			'valor' => 1,
    			'dormitorios' => 2,
    			'detalhes' => 'com picina',
    			'mapa' => 'google.com.br',
    			'publicar' => 'sim'
            ]
        );
    }
}