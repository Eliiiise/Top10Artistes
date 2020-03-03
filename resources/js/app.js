require('./bootstrap');
import $ from 'jquery';
import Swup from 'swup';
const swup = new Swup(); // only this line when included with script tag


import SelectNav from "./components/SelectNav";
import ChoosePage from "./components/ChoosePage";
import Advencement from "./components/Advencement";
import ScrollHorizontal from "./components/ScrollHorizontal";
import CreateSpanMusic from "./components/CreateSpanMusic";

let artisteSelect = null;

if (document.querySelector(".welcome")) {
    artisteSelect = 1;
}

if (artisteSelect == null) {
    console.log('openWelcome');
    window.location.href= "http://127.0.0.1:8000";
}

SelectNav();
ChoosePage();
ScrollHorizontal();
CreateSpanMusic();
Advencement(artisteSelect);


const init = function () {
    if (document.querySelector(".advancement")) {
        CreateSpanMusic();
        Advencement(artisteSelect);
        const artistes= document.querySelectorAll(".artistes .artiste");
        artistes.forEach(function(artiste) {

            artiste.addEventListener('click', function (e) {
                artisteSelect = artiste.className.substring(10,11);
            });
        });
    }
}

init();



swup.on('contentReplaced', init);
//swup.on('willReplaceContent', unInit);








