<?php

namespace App\Services;

use App\Models\UcakBileti;
use App\Models\UcusSeferi;

class biletService
{
    public function biletveucusseferi()
    {
        $veriler = UcakBileti::all();

        for ($i = 0; $i < count($veriler); $i++) {
            $veri = UcusSeferi::where("ucus_seferi_no", $veriler[$i]["ucus_seferi_no"])->first();
            $veriler[$i]["hava_yolu_sirketi"] = $veri["hava_yolu_sirketi"];
            $veriler[$i]["nereye"] = $veri["nereye"];
            $veriler[$i]["kalkis"] = $veri["kalkis"];
            $veriler[$i]["inis"] = $veri["inis"];
        }

        return $veriler;
    }
}
