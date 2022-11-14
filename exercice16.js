let jouerSon = document.querySelectorAll(".key")

window.addEventListener('keydown', playnote)
function playnote(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(e);
    audio.currentTime=0;
    audio.play();
}

function taper(){
    this.classList.add("taper");
}

function finTransition() {
    this.log(this)
}

let notes = document.querySelectorAll('note');
window.addEventListener('keydown', jouerSon)

for (let i = 0; 1<notes.length; i++) {
    notes[i].addEventListener('transitionend', finTransition);
}
