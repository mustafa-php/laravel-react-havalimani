<?php

namespace App\Http\Controllers;

use App\Models\HavaLimani;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HavaLimaniController extends Controller
{
    public function index()
    {
        try {
            return HavaLimani::all();
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    public function store(Request $request)
    {
        $veri = array();

        foreach ($request->input() as $key => $value) {
            $veri[$key] = $value;
        }

        try {
            HavaLimani::create($veri);
            return response()->json(['message' => 'Veri başarıyla kaydedildi.'], 201);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    public function show(string $sehir)
    {
        try {
            return HavaLimani::where("sehir", "like", "%" . $sehir . "%")->get();
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Maalesef ulaşılamıyor...'], 404);
        }
    }

    public function update(Request $request, string $havalimani_isimi)
    {
        $veriler = array();

        foreach ($request->input() as $key => $value) {
            $veriler[$key] = $value;
        }

        try {
            $a = HavaLimani::where('havalimani_isimi', $havalimani_isimi)
                ->update($veriler);
            return response()->json(['message' => $a, $veriler], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Veri başarıyla güncellenmedi.'], 404);
        }
    }

    public function destroy(string $havalimani_isimi)
    {
        try {
            HavaLimani::where('havalimani_isimi', $havalimani_isimi)
                ->delete();
            return response()->json(['message' => 'Veri başarıyla silindi.'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Veri başarıyla silinemedi.'], 404);
        }
    }
}
