import $ from 'jQuery'

let albumId = null;
let music;
let albumMusic;


export default function Music() {

    document.querySelector(".album:nth-of-type(1)").classList.add("album-cliked");
    albumId = document.querySelector(".album:nth-of-type(1)").getAttribute("data-id");
    newAlbum();

    const albums= document.querySelectorAll(".albums .album");

    albums.forEach(function(album) {

        album.querySelector(".cercle").addEventListener('click', function (e) {
            album.querySelector(".play").classList.toggle("un-select");
            album.querySelector(".play").classList.toggle("select");
            album.querySelector(".pause").classList.toggle("select");
            album.querySelector(".pause").classList.toggle("un-select");

            if (album.querySelector(".play").classList.contains("select")) {
                music.stop();
            }
            else {
                newSong();
            }
        });

        album.addEventListener('click', function (e) {
            albumId = album.getAttribute("data-id");

            if ( !album.classList.contains('album-cliked') ) {
                newAlbum();
                console.log('nouvelle album');
            }

            if ( document.querySelector(".album-cliked") ) {
                const choose = document.querySelector(".album-cliked");
                choose.classList.remove("album-cliked");
            }

            album.classList.add("album-cliked");

            stopInactif();
        });

    });

}

function newAlbum() {

    if (document.querySelector("audio")) {
        document.querySelector('.music').removeChild(document.querySelector("audio"));
    }

    $.ajax({
        url: `/music`,
        data : 'id='+albumId,
        dataType: 'json',
        type: 'GET',
    }).done(function(response) {
        albumMusic = response;
        console.log(albumMusic);

    });

}


function newSong() {

    if (document.querySelector("audio")) {
        document.querySelector('.music').removeChild(document.querySelector("audio"));
    }
    console.log(albumMusic);
        const musicPlace = Math.floor(Math.random() * Math.floor(albumMusic.tracks.data.length));
        console.log(musicPlace);
        music = new Sound(albumMusic.tracks.data[musicPlace].preview);
        music.play();

        document.querySelector('audio').onended = function() {
            document.querySelector(".album-cliked .play").classList.add("select");
            document.querySelector(".album-cliked .play").classList.remove("un-select");
            document.querySelector(".album-cliked .pause").classList.remove("select");
            document.querySelector(".album-cliked .pause").classList.add("un-select");
        };
}



var Sound = function(src)
{
    var sound = document.createElement("audio");

    sound.src = src;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none";
    document.querySelector('.music').appendChild(sound);

    this.play = function()
    {
        sound.pause();
        sound.currentTime = 0;
        sound.play();
        console.log(src + " is playing");
    }
    this.stop = function()
    {
        if (document.querySelector("audio")) {
            document.querySelector('.music').removeChild(document.querySelector("audio"));
        }
    }
}

function stopInactif() {

    const albums= document.querySelectorAll(".albums .album");

    albums.forEach(function(album) {
        if ( !album.querySelector(".play").classList.contains("select") && !album.classList.contains("album-cliked") ) {
            console.log("bétisa");
            album.querySelector(" .play").classList.add("select");
            album.querySelector(".play").classList.remove("un-select");
            album.querySelector(".pause").classList.remove("select");
            album.querySelector(".pause").classList.add("un-select");
        }
    });

}

