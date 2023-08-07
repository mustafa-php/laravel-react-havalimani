<?php

namespace App\Http\Middleware;

use App\Models\UcusSeferi;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class UcusSeferNo
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        do {
            $ucus_sefer_no = Str::random(10);

            $request->merge(['ucus_seferi_no' => $ucus_sefer_no]);

            $veriCikisi = UcusSeferi::where('ucus_seferi_no', $ucus_sefer_no)->exists();

        } while ($veriCikisi);

        return $next($request);
    }
}
