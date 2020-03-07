<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArtisteController extends Controller
{
    public function index(Request $request) {
        $id = $request->input('id');
        //dd($id);


        $curl = curl_init();
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, TRUE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

        curl_setopt_array($curl, array(
          CURLOPT_URL => 'https://api.deezer.com/artist/'.$id,
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "GET",
          CURLOPT_POSTFIELDS => "",
          CURLOPT_COOKIE => "dzr_uniq_id=dzr_uniq_id_fr34b5db5d4a2975d21b77c8c70e5e2023830112; sid=fr9d1d94d8d346e04cd49d509d03280dc1645d66",
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
        echo "cURL Error #:" . $err;
        } else {
            //$newResponse = json_decode($response);

            echo($response);
        }


        //dd($newResponse);


    }
}
