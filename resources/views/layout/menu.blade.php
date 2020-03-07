<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200,200i,300,300i,400,400i,600,600i,700,700i,900&display=swap" rel="stylesheet">


        <link rel="stylesheet" href="{{ asset('css/app.css') }}">


    </head>
    <body>
        <section class="menu">
            <h1>DISCOVER</h1>
            <div class="artiste">
                <div class="image-artiste">
                </div>
                <p class="artiste-name"></p>
                <p class="artiste-type"></p>
            </div>
            <nav>
              <ul>
                <li><a href="/albums" class="page1">Albums</a></li>
                <li><a href="/collaborations" class="page2">Collaborations</a></li>
                <li><a href="/communaute" class="page3">Communauté</a></li>
              </ul>
              <div class="select-nav"><span></span></div>
            </nav>
            <a href="/"><span class="anchoose">autres artistes</span></a>
        </section>
        <section class="content transition-fade" id="swup">
        <section class="fixe">
        @yield('content')
        </section>
        </section>
        <script src="{{ asset('js/app.js')}}"></script>
    </body>
</html>
