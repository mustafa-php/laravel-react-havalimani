<?php

namespace App\Providers;

use App\Services\imgService;
use Illuminate\Support\ServiceProvider;

class İmgProvider extends ServiceProvider
{
    
    public function register(): void
    {
        $this->app->singleton(imgService::class, function () {
            return new imgService();
        });
    }

    public function boot(): void
    {
        //
    }
}
