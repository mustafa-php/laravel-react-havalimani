<?php

namespace App\Providers;

use App\Services\biletService;
use Illuminate\Support\ServiceProvider;

class biletProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(biletService::class, function () {
            return new biletService();
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
