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

Route::middleware('auth:api')->get('/user', static function (Request $request) {
    return $request->user();
});

// Route to vocab controller
Route::resource('vocab', 'Api\VocabController'); // Controller get all Data from DB and then tell view to display in JSON
Route::resource('set', 'Api\SetController');

/** Here, we define endpoints for fetching all projects as well for fetching a single project.
*   Then endpoints for creating new projects and tasks respectively.
*   Finally, endpoints for marking a project and task as completed respectively.
**/
Route::get('vocab', 'Api\VocabController@index');
Route::post('vocab', 'Api\VocabController@store');
Route::get('vocab/{id}', 'Api\VocabController@show');
Route::put('vocab/{name}', 'Api\VocabController@markAsCompleted');
Route::put('vocab/{name}','Api\VocabController@create');
Route::post('set', 'Api\SetController@store');
Route::put('set/{set}', 'Api\SetController@markAsCompleted');

