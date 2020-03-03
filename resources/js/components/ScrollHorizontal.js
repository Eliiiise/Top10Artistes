
export default function ScrollHorizontal() {
    window.addEventListener('scroll', function () {
        const scroll = -window.scrollY;
        document.querySelector(".scrollX").style.transform= `translate(${scroll}px)`
    });
}
