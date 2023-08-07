<?php

use App\Http\Controllers\HavaLimaniController;
use App\Http\Controllers\HavaYoluSirketiController;
use App\Http\Controllers\UcakBiletiController;
use App\Http\Controllers\UcusSeferiController;
use App\Http\Middleware\BiletİnputBosluk;
use App\Http\Middleware\BiletNo;
use App\Http\Middleware\HavalimaniİnputBosluk;
use App\Http\Middleware\HavaYoluSirketiİnputBosluk;
use App\Http\Middleware\SeferİnputBosluk;
use App\Http\Middleware\UcusSeferNo;
use App\Models\HavaLimani;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix("bilets")->controller(UcakBiletiController::class)->group(function () {
    Route::get("/", "index");
    Route::post("/", "store")->middleware(BiletİnputBosluk::class, BiletNo::class);
    Route::get("/{bilet_no}", "show");
    Route::put("/{bilet_no}", "update");
    Route::delete("/{bilet_no}", "destroy");
});

Route::prefix("havayolusirketis")->controller(HavaYoluSirketiController::class)->group(function () {
    Route::get("/", "index");
    Route::post("/", "store")->middleware(HavaYoluSirketiİnputBosluk::class);
    Route::get("/{hava_yolu_sirketi}", "show");
    Route::post("/{hava_yolu_sirketi}", "update");
    Route::delete("/{hava_yolu_sirketi}", "destroy");
});

Route::prefix("ucusseferis")->controller(UcusSeferiController::class)->group(function () {
    Route::get("/", "index");
    Route::post("/", "store")->middleware(SeferİnputBosluk::class, UcusSeferNo::class);
    Route::get("/{ucus_seferi_no}", "show");
    Route::post("/where", "getWhere");
    Route::put("/{ucus_seferi_no}", "update");
    Route::delete("/{ucus_seferi_no}", "destroy");
});

Route::prefix("havalimanis")->controller(HavaLimaniController::class)->group(function () {
    Route::get("/", "index");
    Route::post("/", "store")->middleware(HavalimaniİnputBosluk::class);
    Route::get("/{havalimani_isim}", "show");
    Route::put("/{havalimani_isim}", "update");
    Route::delete("/{havalimani_isim}", "destroy");
});
