<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSupermercadoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('supermercado', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->string('valor')->nullable;
            $table->string('und')->nullable;
            $table->timestamps();
            $table->softDeletes();
        
        }); 
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('supermercado');
        
    }
}
