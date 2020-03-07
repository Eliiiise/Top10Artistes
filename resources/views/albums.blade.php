@extends('layout/menu')
@section('content')
<h3>ALBUMS</h3>
<section class="albums">
     @for ($i =0; $i <= 4; $i++)
             <div class="album">
                 <div class="cover">
                     <img src="{{$albums[$i]->cover_medium}}">
                 </div>
                 <p class="album-title">{{$albums[$i]->title}}</p>
                 <p class="type">{{$albums[$i]->type}}</p>
             </div>
     @endfor
</section>
@endsection
