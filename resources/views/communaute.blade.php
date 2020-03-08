@extends('layout/menu')
@section('content')
<section class="wrap-page">
    <h3>COMMUNAUTE</h3>
    <div class='info'>
        <p><em>Nombre de commentaires :</em> {{ $nbComments }} </p>
        <p><em>Nombre de fans :</em> {{ $nbFans }} </p>
    </div>
    <section class="communaute">
         @foreach($comments as $comment)
            <div class="user">
                <div class="artiste">
                    <div>
                    <img src="{{$comment->author->picture_medium}}">
                    </div>
                    <p class="artiste-name">{{$comment->author->name}}</p>
                    <p class="artiste-type">{{$comment->author->type}}</p>
                </div>
                <div class="comment">
                    <p>{{$comment->text}}</p>
                </div>
            </div>
        @endforeach
    </section>
</section>
@endsection
