const max=300;
const ecart=30;

export default function CreateSpanMusic() {
    for (let pas = 0; pas < max; pas++) {

        const sp=document.createElement("SPAN");
        let alea = Math.random()*30 + 5;

        if ((pas-10)%ecart < 3 & (pas-10)%ecart > -3) {
            alea=alea+(ecart-((pas-10)%ecart)*6);
        }

        if ((pas-10)%ecart == 0) {
            alea=70;
        }

        sp.style.height= `${alea}px`;
        document.querySelector('.advancement').appendChild(sp);
    }
}
