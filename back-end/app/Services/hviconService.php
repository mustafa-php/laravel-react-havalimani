<?php

namespace App\Services;

use App\Models\HavaYoluSirketi;

class hviconService
{
    public function icon_yolu($hava_yolu_sirketi)
    {
        return HavaYoluSirketi::where("isim", $hava_yolu_sirketi)->select("icon_yolu")->first()["icon_yolu"];
    }
}
