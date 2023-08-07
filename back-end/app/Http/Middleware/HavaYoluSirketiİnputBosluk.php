<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HavaYoluSirketiİnputBosluk
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $colums = [
            "isim",
            "ucak_sayisi",
        ];

        $izin = false;
        $o = 0;

        foreach ($request->input() as $key => $value) {
            if (in_array($key, $colums)) {
                $o++;
            }
        }

        if (count($request->input()) == count($colums) && count($colums) == $o && request()->hasFile("hava_yolu_resim")) {
            $izin = true;
        }

        if ($izin) {
            return $next($request);
        } else {
            return response()->json(['message' => 'Erişim reddedildi.'], 403);
        }
    }
}
