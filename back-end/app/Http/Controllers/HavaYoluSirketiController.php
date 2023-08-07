<?php

namespace App\Http\Controllers;

use App\Models\HavaYoluSirketi;
use App\Http\Controllers\Controller;
use App\Services\imgService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HavaYoluSirketiController extends Controller
{
    public function index()
    {
        try {
            return HavaYoluSirketi::all();
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    public function store(Request $request, imgService $imgService)
    {
        $veri = array();

        if ($request->hasFile('hava_yolu_resim')) {
            $veri["icon_yolu"] = $imgService->isimveresim($request->isim, $request->file("hava_yolu_resim"));
        }

        foreach ($request->input() as $key => $value) {
            $veri[$key] = $value;
        }

        try {
            HavaYoluSirketi::create($veri);
            return response()->json(['message' => 'Veri başarıyla kaydedildi.'], 201);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    public function show(string $havaYoluSirketi)
    {
        try {
            return HavaYoluSirketi::where("isim", $havaYoluSirketi)->first();
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Maalesef ulaşılamıyor...'], 404);
        }
    }

    public function update(Request $request, string $havaYoluSirketi, imgService $imgService)
    {
        $veriler = array();

        if ($request->hasFile('hava_yolu_resim') && $request->isim) {
            $veriler["icon_yolu"] = $imgService->isimveresim($request->isim, $request->file("hava_yolu_resim"));
        } elseif ($request->hasFile('hava_yolu_resim')) {
            $veriler["icon_yolu"] = $imgService->resim($request->file("hava_yolu_resim"), $havaYoluSirketi);
        } elseif ($request->isim) {
            $veriler["icon_yolu"] = $imgService->isim($request->isim, $havaYoluSirketi);
        }

        foreach ($request->input() as $key => $value) {
            $veriler[$key] = $value;
        }

        

        try {
            HavaYoluSirketi::where('isim', $havaYoluSirketi)
                ->update($veriler);
            return response()->json(['message' => 'Veri başarıyla güncellendi'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Veri başarıyla güncellenmedi.'], 404);
        }
    }

    public function destroy(string $havaYoluSirketi)
    {
        try {
            HavaYoluSirketi::where('isim', $havaYoluSirketi)
                ->delete();
            return response()->json(['message' => 'Veri başarıyla silindi.'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Veri başarıyla silinemedi.'], 404);
        }
    }
}
