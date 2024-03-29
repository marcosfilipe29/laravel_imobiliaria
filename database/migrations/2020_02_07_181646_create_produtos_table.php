        <?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProdutosTable extends Migration {
	/*** Run the migrations.
		        *
		        * @return void
	*/
	public function up() {
		Schema::create('produtos', function (Blueprint $table) {
			$table->increments('id');
			$table->string('nome');
			$table->decimal('valor', 6, 2);
			$table->string('descricao');
			$table->integer('quantidade');
			$table->timestamps();
		});
	}
	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('produtos');
	}
}