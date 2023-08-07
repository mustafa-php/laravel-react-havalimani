<?php

namespace App\Http\Controllers;

use App\Models\UcusSeferi;
use App\Http\Controllers\Controller;
use App\Services\hviconService;
use Illuminate\Http\Request;

class UcusSeferiController extends Controller
{
    public function index()
    {
        try {
            return UcusSeferi::all();
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    public function getWhere(Request $request)
    {
        try {
            return UcusSeferi::where("tarih", $request->tarih)->where("nereye", $request->nereye)->get();
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    public function store(Request $request, hviconService $hviconService)
    {
        $veri = array();

        $veri["havayolu_icon_yolu"] = $hviconService->icon_yolu($request->hava_yolu_sirketi);

        foreach ($request->input() as $key => $value) {
            $veri[$key] = $value;
        }

        try {
            UcusSeferi::create($veri);
            return response()->json(['message' => 'Veri başarıyla kaydedildi.'], 201);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    public function show(string $ucus_seferi_no)
    {
        $ucusSefer = UcusSeferi::where("ucus_seferi_no", $ucus_seferi_no)->first();
        return $ucusSefer;
    }

    public function update(Request $request, string $ucus_seferi_no)
    {
        $veriler = array();
        foreach ($request->input() as $key => $value) {
            $veriler[$key] = $value;
        }

        try {
            UcusSeferi::where('ucus_seferi_no', $ucus_seferi_no)
                ->update($veriler);
            return response()->json(['message' => 'Veri başarıyla güncellendi.'], 201);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    public function destroy(string $ucus_seferi_no)
    {
        $silme = UcusSeferi::where('ucus_seferi_no', $ucus_seferi_no)
            ->delete();

        if ($silme) {
            return response()->json(['message' => 'Veri başarıyla silindi.'], 201);
        } else {
            return response()->json(['message' => 'Veri başarıyla silinemedi.'], 404);
        }
    }
}
