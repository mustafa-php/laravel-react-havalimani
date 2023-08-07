<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\UcakBileti;
use App\Models\UcusSeferi;
use App\Services\biletService;
use App\Services\dolulukService;
use Illuminate\Http\Request;

class UcakBiletiController extends Controller
{

    public function index(biletService $biletService)
    {
        try {
            return $biletService->biletveucusseferi();
        } catch (\Exception $e) {
            dd($e);
        }
    }

    public function store(Request $request, dolulukService $dolulukService)
    {
        $veri = array();

        foreach ($request->input() as $key => $value) {
            $veri[$key] = $value;
        }

        try {
            UcakBileti::create($veri);

            $dolulukService->doluluk($veri["ucus_seferi_no"]);

            return response()->json(['message' => 'Veri başarıyla kaydedildi.'], 201);
        } catch (\Exception $e) {
            dd($e);
        }
    }

    public function show(string $bilet_no)
    {
        try {
            return UcakBileti::where("bilet_no", $bilet_no)->first();
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Maalesef ulaşılamıyor...'], 404);
        }
    }

    public function update(Request $request, string $bilet_no)
    {
        $veriler = array();
        foreach ($request->input() as $key => $value) {
            $veriler[$key] = $value;
        }

        try {
            UcakBileti::where('bilet_no', $bilet_no)
                ->update($veriler);
            return response()->json(['message' => 'Veri başarıyla güncellendi'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Veri başarıyla güncellenmedi.'], 404);
        }
    }

    public function destroy(string $bilet_no)
    {
        try {
            UcakBileti::where('bilet_no', $bilet_no)
                ->delete();
            return response()->json(['message' => 'Veri başarıyla silindi.'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Veri başarıyla silinemedi.'], 404);
        }
    }
}
