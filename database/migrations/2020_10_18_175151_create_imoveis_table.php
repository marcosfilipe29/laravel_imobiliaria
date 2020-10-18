<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImoveisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cidades', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->string('estado')->nullable;
            $table->string('sigla_estado')->nullable;
            $table->timestamps();
            $table->softDeletes();
        
        }); 
        Schema::create('imoveis', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tipo_id')->unsigned();
            $table->foreign('tipo_id')->references('id')->on('tipos');
            $table->integer('cidade_id')->unsigned();
            $table->foreign('cidades')->references('id')->on('cidades');
            $table->string('titulo');
            $table->string('descricao');
            $table->string('imagem');
            $table->enum('status',['vende','aluga']);
            $table->string('endereco');
            $table->string('cep');
            $table->decimal('valor',6,2);
            $table->integer('dormitorios');
            $table->string('detalhes');
            $table->text('mapa')->nullable();
            $table->bigInteger('visualizacoes')->default(0);
            $table->enum('publicar',['sim','nao'])->default('nao');
            $table->timestamps();
        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cidades');
        Schema::dropIfExists('imoveis');
    }
}
