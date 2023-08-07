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
        Schema::create('ucus_seferis', function (Blueprint $table) {
            $table->id();
            $table->string("hava_yolu_sirketi");
            $table->string("havayolu_icon_yolu");
            $table->string("nereye");
            $table->string("kalkis");
            $table->string("inis");
            $table->string("kontejan");
            $table->string("doluluk");
            $table->date("tarih");
            $table->string("fiyat");
            $table->string("ucus_seferi_no");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ucus_seferis');
    }
};
