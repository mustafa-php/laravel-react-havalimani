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
        Schema::create('ucak_biletis', function (Blueprint $table) {
            $table->id();
            $table->string("isim");
            $table->string("soyisim");
            $table->bigInteger("tc_no");
            $table->bigInteger("tel_no");
            $table->string("dogum_tarihi");
            $table->string("mail");
            $table->string("bilet_no");
            $table->string("ucus_seferi_no");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ucak_biletis');
    }
};
