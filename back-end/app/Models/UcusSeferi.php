<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UcusSeferi extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['hava_yolu_sirketi', 'havayolu_icon_yolu', "kalkis", "inis", "nereye", "kontejan", "doluluk","ucus_seferi_no", "fiyat", "tarih"];
}
