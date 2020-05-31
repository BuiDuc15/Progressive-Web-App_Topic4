<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('my-page');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/example', function () {
    return view('welcome');
});

Route::get('/tuvung/index.html', function () {
   return view('index');
});
