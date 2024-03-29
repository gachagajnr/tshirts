<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tshirts', function (Blueprint $table) {
           $table->id();
 
            $table->string('name');
            $table->string('size');
            $table->integer('price')->nullable();
            $table->integer('quantity')->nullable();
            $table->text('description')->nullable();
            $table->string('img');
            $table->string('color');
        
            // $table->foreignId('user_id')
            //     ->index()->constrained()->cascadeOnDelete();
        
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
        Schema::dropIfExists('tshirts');
    }
};
