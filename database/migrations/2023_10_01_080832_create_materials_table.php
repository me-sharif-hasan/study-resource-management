<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMaterialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materials', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger("class_id");
            $table->text("url")->nullable();
            $table->string("title");
            $table->string("type");
            $table->boolean("is_deleted")->default(false);
            $table->integer("access_level")->default(0);
            $table->text("note")->nullable();
            $table->longText('text_content')->nullable();
            $table->date('date')->useCurrent()->nullable();
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
        Schema::dropIfExists('materials');
    }
}
