<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class imgService
{

    public function isimveresim($isim, $resim)
    {
        $turkishChars = array('ç', 'Ç', 'ğ', 'Ğ', 'ı', 'İ', 'ö', 'Ö', 'ş', 'Ş', 'ü', 'Ü');
        $englishChars = array('c', 'C', 'g', 'G', 'i', 'I', 'o', 'O', 's', 'S', 'u', 'U');
        $specialChars = array(' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '/', '\\', '[', ']', '{', '}', '|', '<', '>', ',', '.', ':', ';', '\'', '"', '`', '~');
        $underscore = '';
        $allChars = str_replace($turkishChars, $englishChars,  $isim);
        $resim_isimi = strtolower(str_replace($specialChars, $underscore, $allChars)) . '.jpg';

        $resim->storeAs('public/images', $resim_isimi);
        return asset("storage/images/" . $resim_isimi);
    }

    public function resim($resim, $isim)
    {
        $turkishChars = array('ç', 'Ç', 'ğ', 'Ğ', 'ı', 'İ', 'ö', 'Ö', 'ş', 'Ş', 'ü', 'Ü');
        $englishChars = array('c', 'C', 'g', 'G', 'i', 'I', 'o', 'O', 's', 'S', 'u', 'U');
        $specialChars = array(' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '/', '\\', '[', ']', '{', '}', '|', '<', '>', ',', '.', ':', ';', '\'', '"', '`', '~');
        $underscore = '';
        $allChars = str_replace($turkishChars, $englishChars,  $isim);
        $resim_isimi = strtolower(str_replace($specialChars, $underscore, $allChars)) . '.jpg';

        $resim->storeAs('public/images', $resim_isimi);
        return asset("storage/images/" . $resim_isimi);
    }

    public function isim($yeni, $eski)
    {
        $turkishChars = array('ç', 'Ç', 'ğ', 'Ğ', 'ı', 'İ', 'ö', 'Ö', 'ş', 'Ş', 'ü', 'Ü');
        $englishChars = array('c', 'C', 'g', 'G', 'i', 'I', 'o', 'O', 's', 'S', 'u', 'U');
        $specialChars = array(' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '/', '\\', '[', ']', '{', '}', '|', '<', '>', ',', '.', ':', ';', '\'', '"', '`', '~');
        $underscore = '';
        $allChars = str_replace($turkishChars, $englishChars,  $yeni);
        $allChars_eski = str_replace($turkishChars, $englishChars,  $eski);
        $eski_isim = strtolower(str_replace($specialChars, $underscore, $allChars_eski)) . '.jpg';
        $resim_isimi = strtolower(str_replace($specialChars, $underscore, $allChars)) . '.jpg';

        Storage::move('public/images/' . $eski_isim . ".jpg", 'public/images/' . $resim_isimi);

        return asset("storage/images/" . $resim_isimi);
    }
}
