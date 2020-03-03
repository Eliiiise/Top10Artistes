
export default function ChoosePage() {

    const pages = document.querySelectorAll('.menu nav ul li a');

    if(document.querySelector('.anchoose')!=null){
        const button = document.querySelector('.anchoose');

        onWelcome(pages , button);

        button.addEventListener('click', function () {
            onWelcome(pages , button);
        });
    }
}

function onWelcome(pages , button) {
    document.querySelector(".select-nav").style.width=`0`;
    document.querySelector(".select-nav span").style.width=`0`;

    setTimeout(function () {
        document.querySelector(".select-nav").style.transition=`all 0s`;
        document.querySelector(".select-nav span").style.transition=`all 0s`;
    }, 100);

    for (const element of pages) {
        element.classList.remove("select-nav-text");
    };

    button.classList.remove('anchoose');
    button.classList.add('choose');
}
