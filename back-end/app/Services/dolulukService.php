<?php

namespace App\Services;

use App\Models\UcusSeferi;

class dolulukService
{
    public function doluluk($ucus_no)
    {
        $doluluk_takip = UcusSeferi::where('ucus_seferi_no', $ucus_no)->select("doluluk")->first()["doluluk"];

        UcusSeferi::where('ucus_seferi_no', $ucus_no)
            ->update(["doluluk" =>  $doluluk_takip + 1]);
    }
}
