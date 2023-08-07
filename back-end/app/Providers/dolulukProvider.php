<?php

namespace App\Providers;

use App\Services\dolulukService;
use Illuminate\Support\ServiceProvider;

class dolulukProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(dolulukService::class, function () {
            return new dolulukService();
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
