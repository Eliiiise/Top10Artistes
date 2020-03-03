
export default function SelectNav() {

    const pages =document.querySelectorAll('.menu nav ul li a');

    pages.forEach(function (page) {
        page.addEventListener('click', function () {

            for (const element of pages) {
                element.classList.remove("select-nav-text");
            };

            page.classList.add("select-nav-text");
            const place = (page.className.substring(4,5)-1)*48;
            document.querySelector(".select-nav").style.transform=`translate(0,${place}px)`;

            setTimeout(function () {
                document.querySelector(".select-nav").style.transition=`all 0.5s`;
                document.querySelector(".select-nav span").style.transition=`all 0.5s`;
                document.querySelector(".select-nav").style.width=`270px`;
                document.querySelector(".select-nav span").style.width='3px';
            }, 100);

            if(document.querySelector('.choose')!=null){
                const button = document.querySelector('.choose');
                button.classList.remove('choose')
                button.classList.add('anchoose');

            }
        });
    });
}
