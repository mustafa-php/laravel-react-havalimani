<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UcakBileti extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['isim', 'soyisim', "tc_no", "tel_no", "mail", "dogum_tarihi", "ucus_seferi_no", "bilet_no"];
}
