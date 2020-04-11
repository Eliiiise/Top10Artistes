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
                        <div class="album" data-id="{{$album->id}}">
                             <div>
                                <div class="cercle">
                                    <div class="arrow-left">
                                    <svg class="play select" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                        <g>
                                            <g>
                                                <path fill="#ffffff" d="M465.875,215.583c-32.896-18.021-76.198-42.958-122.031-69.375C256.396,95.833,157.281,38.729,87.375,4.646
                                                    C81.01,1.563,74.281,0,67.385,0C41.99,0,21.333,20.521,21.333,45.729L21.354,256l-0.021,210.25
                                                    c0,25.229,20.656,45.75,46.052,45.75c6.927,0,13.656-1.583,20.021-4.688c69.948-34.104,169.177-91.271,256.719-141.708
                                                    c45.729-26.354,88.917-51.229,121.75-69.229c15.521-8.5,24.792-23.604,24.792-40.396
                                                    C490.667,239.188,481.396,224.083,465.875,215.583z"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <svg version="1.1" class="pause un-select" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    	 viewBox="0 0 47.607 47.607" style="enable-background:new 0 0 47.607 47.607;" xml:space="preserve">
                                        <g>
                                            <path fill="#ffffff" d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0
                                                l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
                                            <path fill="#ffffff" d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
                                                C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
                                        </g>
                                    </svg>

                                    </div>
                                </div>
                                 <img src="{{$album->cover_medium}}">
                             </div>
                             <p class="album-title">{{$album->title}}</p>
                             <p class="type">{{$album->record_type}}</p>
                         </div>
                    @endforeach
                </section>
            </section>
        </section>
        <div class="music">
        </div>
</section>
@endsection
