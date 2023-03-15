<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ShirtController;
use App\Http\Controllers\CartsController;
use App\Http\Controllers\ShutsController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\MpesaSTKPUSHController;

 
 
Route::resource('cart', CartsController::class)->middleware(['auth']);
Route::resource('tshirts', ShirtController::class)->middleware(['auth']);
Route::resource('shuts', ShutsController::class)->middleware(['auth']);
Route::resource('about', AboutController::class);
Route::resource('contact', ContactController::class);
 


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'canSee' => Route::has('tshirts'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/v1/mpesatest/stk/push', [MpesaSTKPUSHController::class, 'STKPush']);

        
require __DIR__.'/auth.php';
