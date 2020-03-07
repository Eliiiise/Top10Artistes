

export default function updateMenu(artisteData) {
    document.querySelector('.artiste div').innerHTML = `<img src=${artisteData.picture_medium}>`
    document.querySelector('.artiste p.artiste-name').innerHTML = artisteData.name;
    document.querySelector('.artiste p.artiste-type').innerHTML = artisteData.type;
    setTimeout(function () {
        document.querySelector('.artiste').style.opacity=1
    }, 100);

    document.querySelector('.page1').href = `/albums?id=${artisteData.id}`;
    document.querySelector('.page2').href = `/collaborations?id=${artisteData.id}`;
    document.querySelector('.page3').href = `/communaute?id=${artisteData.id}`;
}
