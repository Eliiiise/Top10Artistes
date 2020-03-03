const max=300;
const ecart=30;
let selected=0;


export default function Advencement(nbArtiste) {
    selected = 0;

    setTimeout(colorSpan(10),100);
    document.querySelector(".artistes .artiste:nth-of-type(1)").classList.add("artiste-nb-active");
    document.querySelector(".artistes .artiste:nth-of-type(1) img").classList.add("artiste-img-active");
    document.querySelector(".artistes .artiste:nth-of-type(1) div").classList.add("artiste-div-active");

    artisteSelect(document.querySelector(`.artistes .artiste:nth-of-type(${nbArtiste})`));

    const artistes= document.querySelectorAll(".artistes .artiste");
    artistes.forEach(function(artiste) {

        artiste.addEventListener('click', function (e) {
            artisteSelect(artiste)
        });
    });
}

function artisteSelect(artiste) {
    document.querySelector(".artiste-nb-active").classList.remove("artiste-nb-active");
    document.querySelector(".artiste-img-active").classList.remove("artiste-img-active");
    document.querySelector(".artiste-div-active").classList.remove("artiste-div-active");
    artiste.classList.add('artiste-nb-active');
    artiste.querySelector('img').classList.add('artiste-img-active');
    artiste.querySelector('div').classList.add('artiste-div-active');
    let w = artiste.className.substring(10,11)-1;
    if (artiste.className.substring(10,12)==10){
        w=9;
    }
    colorSpan(((w)*30)+10);
}

function classement(x,etat) {
    if ((x-11)%ecart == 0) {
        const nb = (x-11)/ecart+1;
        if (etat=="on"){
            document.querySelector(`.adv div.adv-nb p:nth-of-type(${nb})`).classList.add('adv-nb-active');
        }
        else {
            document.querySelector(`.adv div.adv-nb p:nth-of-type(${nb})`).classList.remove('adv-nb-active');
        }
    }
}

function colorSpan(pas) {

    for (let pasSelect = selected; pasSelect < pas+2; pasSelect++) {
        setTimeout( function () {
            document.querySelector(`.advancement span:nth-of-type(${pasSelect})`).classList.add('adv-cliked');
            classement(pasSelect,'on');
        }, (pasSelect-selected)*5 )
    }

    for (let pasUnSelect = selected+1; pasUnSelect > pas+1; pasUnSelect--) {
        setTimeout( function () {
            document.querySelector(`.advancement span:nth-of-type(${pasUnSelect})`).classList.remove('adv-cliked');
            classement(pasUnSelect,'off');
        }, (selected-pasUnSelect)*5 )
    }

    setTimeout( function () {
        selected = pas;
    }, 1 )
}


