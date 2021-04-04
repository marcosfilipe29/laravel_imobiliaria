<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imovel extends Model
{
    protected $table = "imoveis";
        public function tipo()
        {
            return $this->belongsTo('App\Tipo', 'tipo_id');
        }
        public function cidade()
        {
            return $this->belongsTo('App\Cidade', 'cidade_id');
        }


}
