<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Api Endpoints for Example.js Component
// Delete record using get
// Create record using post
// Update record using put, use task/{id} to determined which record to update

Route::get('words', 'Api\WordController@index'); // (where: 'url', do: 'Controller@function')
Route::post('word' , 'Api\WordController@store');
Route::put('word/{id}', 'Api\WordController@update');
Route::delete('word/{id}', 'Api\WordController@delete');
