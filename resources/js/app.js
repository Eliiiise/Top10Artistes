require('./bootstrap');
import $ from 'jquery';
import Swup from 'swup';
const swup = new Swup(); // only this line when included with script tag


import SelectNav from "./components/SelectNav";
import ChoosePage from "./components/ChoosePage";
import Advencement from "./components/Advencement";
//import ScrollHorizontal from "./components/ScrollHorizontal";
import CreateSpanMusic from "./components/CreateSpanMusic";
import UpdateMenu from "./components/UpdateMenu";

let artisteSelect = null;
let artisteId = null

if (document.querySelector(".welcome")) {
    artisteSelect = 1;
}

if (artisteSelect == null) {
    console.log('openWelcome');
    window.location.href= "http://127.0.0.1:8000";
}

document.querySelector('.artiste').style.opacity=0;
SelectNav();
ChoosePage();
Advencement(artisteSelect);




const init = function () {
    if (document.querySelector(".advancement")) {
        CreateSpanMusic();
        Advencement(artisteSelect);
        const artistes= document.querySelectorAll(".artistes .artiste");

        artisteId = document.querySelector(`.artistes .artiste:nth-of-type(${artisteSelect})`).getAttribute("data-id");
        $.ajax({
            url: `/artist`,
            data : 'id='+artisteId,
            dataType: 'json',
            type: 'GET',
        }).done(function(response) {
            console.log("test1");
            UpdateMenu(response);
        });

        artistes.forEach(function(artiste) {

            artiste.addEventListener('click', function (e) {
                document.querySelector('.artiste').style.opacity=0;
                artisteSelect = artiste.className.substring(10,11);
                artisteId = artiste.getAttribute("data-id");
                $.ajax({
                    url: `/artist`,
                    data : 'id='+artisteId,
                    dataType: 'json',
                    type: 'GET',
                }).done(function(response) {
                    console.log("test1");
                    UpdateMenu(response);
                });
            });
        });
    }
}

init();



swup.on('contentReplaced', init);
//swup.on('willReplaceContent', unInit);










