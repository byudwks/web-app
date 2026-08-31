<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('pages/Home');
});

Route::get('/login', function () {
    return Inertia::render('pages/auth/SignIn');
});