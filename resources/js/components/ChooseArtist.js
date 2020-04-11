import $ from "jquery";
import UpdateMenu from "./UpdateMenu";

let artisteId = null;

export default function ChooseArtist(artisteSelect) {

    const artistes= document.querySelectorAll(".artistes .artiste");

    artisteId = document.querySelector(`.artistes .artiste:nth-of-type(${artisteSelect})`).getAttribute("data-id");
    $.ajax({
        url: `/artist`,
        data : 'id='+artisteId,
        dataType: 'json',
        type: 'GET',
    }).done(function(response) {
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
                UpdateMenu(response);
            });
        });
    });
}
