@extends('layout/menu')
@section('content')
<section class="wrap-page">
    <h3>ALBUMS</h3>
    <div class='info'>
        <p><em>Genre actuel :</em> {{$genreName}}</p>
        <p><em>Date du premier album :</em> {{$albums[$nbAlbumsCalc]->release_date}}</p>
        <p><em>Nombre albums :</em> {{$nbAlbums}}</p>
    </div>
    <section class="outer-wrapper-albums">
            <section class="wrapper-albums">
                <section class="albums">
                    @foreach($albums as $album)
                        <a href="/albums?id={{$id}}&idAlbum={{$album->id}}"
                            <div class="album">
                                 <img src="{{$album->cover_medium}}">
                                 <p class="album-title">{{$album->title}}</p>
                                 <p class="type">{{$album->record_type}}</p>
                             </div>
                    @endforeach
                </section>
            </section>
        </section>
</section>
@endsection
