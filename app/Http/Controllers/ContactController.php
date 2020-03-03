<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{

	public function send(Request $request){
		$name = $request->input('name');
		$email = $request->input('email');

		return view('response',['name'=> $name]);
	}

	public function index(){

        $curl = curl_init();

        curl_setopt_array($curl, array(
          CURLOPT_URL => "https://rest.coinapi.io/v1/assets",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "GET",
          CURLOPT_POSTFIELDS => "",
          CURLOPT_HTTPHEADER => array(
            "x-coinapi-key:: 752CFF9A-0D25-4F31-AE0F-34233C8BA220"
          ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
          echo "cURL Error #:" . $err;
        } else {
          dd(json_decode($response));
        }


        return view("contact");

	}






}
