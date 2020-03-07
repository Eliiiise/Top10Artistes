<?php

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



Route::get('/contact', function () {
    return view('contact');
});

Route::get('/', 'Top10Controller@guetTop10');

Route::get('/albums', 'AlbumsController@guetAlbums');

Route::get('/collaborations', function () {
    return view('/collaborations');
});

Route::get('/communaute', function () {
    return view('/communaute');
});

Route::post('/response','ContactController@send');

Route::get('/contact','ContactController@index');

Route::get('/test/{id}', function($id) {            //passage du paramètre id
    echo('Test ');
    echo($id);
});



Route::get('/artist', 'ArtisteController@index');
