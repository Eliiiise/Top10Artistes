@extends('layout/menu')
@section('content')

    <div class="flex welcome">
        <div>
        <h2>TOP 10 ARTISTES</h2>
            <div class='info'>
                <p><em>Pays :</em> France</p>
                <p><em>Date :</em> 29 - 20 - 2020</p>
            </div>
        </div>
        <div class='consigne'>
            <span></span>
            <div>
                <p>Choisi un artiste</p>
                <p>pour ensuite le découvrir</p>
            </div>
        </div>
    </div>
    <section class="scrollX">
        <section class="adv">
            <div class="adv-nb"><p>01</p><p>02</p><p>03</p><p>04</p><p>05</p><p>06</p><p>07</p><p>08</p><p>09</p><p>10</p></div>
            <div class="advancement">
            </div>
        </section>
        <section class="artistes">
            @foreach($artistes as $artiste)
                <div data-id="{{ $artiste->id }}" class="artiste nb{{$artiste->position}}">
                    <div>
                    <img src="{{$artiste->picture_medium}}">
                    </div>
                    <p class="artiste-name">{{$artiste->name}}</p>
                    <p class="artiste-type">{{$artiste->type}}</p>
                </div>
            @endforeach
        </section>
    </section>

@endsection
