<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| SPA: все маршруты отдают единый blade-шаблон app.blade.php.
| Vue Router берёт на себя клиентскую маршрутизацию.
|
| Auth::routes() - если используется стандартная авторизация Laravel.
| Ниже заготовки API-эндпоинтов для личного кабинета.
|
*/

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

Route::prefix('api')->middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [App\Http\Controllers\Api\ProfileController::class, 'show']);
    Route::put('/profile', [App\Http\Controllers\Api\ProfileController::class, 'update']);
    Route::put('/profile/password', [App\Http\Controllers\Api\ProfileController::class, 'changePassword']);
    Route::put('/profile/email', [App\Http\Controllers\Api\ProfileController::class, 'changeEmail']);
    Route::post('/profile/verify-email', [App\Http\Controllers\Api\ProfileController::class, 'verifyEmail']);
});