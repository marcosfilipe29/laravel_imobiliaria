<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cidade extends Model
{
    protected $fillable = [
        'nome',
        'estado',
        'sigla_estado'
    ];
    public function imoveis()
    {
        return $this->hasMany('App\Imovel', 'cidade_id');
    }


}
