<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HavaYoluSirketi extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['icon_yolu', 'isim', "ucak_sayisi"];
}
