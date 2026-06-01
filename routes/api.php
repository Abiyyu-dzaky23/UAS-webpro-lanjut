<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Di sini tempat route API Laravel
|
*/

Route::get('/test', function () {

    return response()->json([
        'message' => 'API Marketplace Berhasil'
    ]);

});

/*
|--------------------------------------------------------------------------
| PRODUCT API
|--------------------------------------------------------------------------
*/

Route::apiResource('products', ProductController::class);

/*
|--------------------------------------------------------------------------
| CATEGORY API
|--------------------------------------------------------------------------
*/

Route::apiResource('categories', CategoryController::class);

/*
|--------------------------------------------------------------------------
| ORDER API
|--------------------------------------------------------------------------
*/

Route::apiResource('orders', OrderController::class);