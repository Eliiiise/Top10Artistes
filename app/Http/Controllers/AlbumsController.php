<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlbumsController extends Controller
{
    public function open() {
        return view('/albums', [
            'pageOpen' => 'albums'
        ]);
    }
}
