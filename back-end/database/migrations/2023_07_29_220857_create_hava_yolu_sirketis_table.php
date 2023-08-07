<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hava_yolu_sirketis', function (Blueprint $table) {
            $table->id();
            $table->string("icon_yolu");
            $table->string("isim");
            $table->integer("ucak_sayisi");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hava_yolu_sirketis');
    }
};
