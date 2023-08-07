<?php

namespace App\Http\Middleware;

use App\Models\UcakBileti;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class BiletNo
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        do {
            $bilet_no = Str::random(10);

            $request->merge(['bilet_no' => $bilet_no]);

            $veriCikisi = UcakBileti::where('bilet_no', $bilet_no)->exists();
        } while ($veriCikisi);


        return $next($request);
    }
}
