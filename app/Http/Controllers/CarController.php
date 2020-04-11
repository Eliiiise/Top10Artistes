<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;

class CarController extends Controller
{
    public function index() {
        $car = new Car;
        $car->brand = "Renault";
        $car->model = "Cliot";
        $car->color = "Rouge";
        $car->price = 10000;
        $car->speed = 200;
        $car->save();
    }
}
