<?php

namespace App\Providers;

use App\Services\hviconService;
use Illuminate\Support\ServiceProvider;

class HviconProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(hviconService::class, function () {
            return new hviconService();
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
