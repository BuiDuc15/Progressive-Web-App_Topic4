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
Auth::routes();

Route::get('/homepage', function () {
    return view('homepage');
});

Route::get('/home', 'HomeController@index')->name('home');

// Controller-name@method-name
Route::get('/', 'Api\PagesController@index'); // localhost:8000/index-p
Route::get('/about', 'Api\PagesController@about'); // localhost:8000/about
Route::get('/contact', 'Api\PagesController@contact'); // localhost:8000/contact

Route::get('/example', function () {
    return view('welcome');
});
Route::get('/tuvung/house', function ()
{
   return view('pages/tuvung/house');
});


