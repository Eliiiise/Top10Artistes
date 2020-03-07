@extends('layout/menu')
@section('content')
<section class="wrap-page">
    <h3>COLLABORATIONS</h3>
    <div class='info'>
        <p><em>Nombre de collaborations :</em> {{ $nbCollaborations }}</p>
    </div>
    <section class="collaborations">
         @foreach($collaborations as $collaboration)
            <div class="artiste">
                <div>
                <img src="{{$collaboration->picture_medium}}">
                </div>
                <p class="artiste-name">{{$collaboration->name}}</p>
                <p class="artiste-type">{{$collaboration->type}}</p>
            </div>
        @endforeach
    </section>
</section>
@endsection
