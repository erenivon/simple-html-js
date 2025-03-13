const cards = document.querySelectorAll('.box-container')
let isFlipped = false;
let lock = false;
let firstCard, secondCard
let matches = 0;
function flip(){
    if(this === firstCard || lock) return
    this.querySelector('.box-inner').classList.add('flip')
    if(!isFlipped){
        isFlipped = true
        firstCard = this
        return 
    }
    secondCard = this
    lock = true
    control()
}
function disable(){
    firstCard.removeEventListener('click', flip)
    secondCard.removeEventListener('click', flip)
    matches++;
    reset()
}
function unflip(){
    setTimeout(() => {
        firstCard.querySelector('.box-inner').classList.remove('flip')
        secondCard.querySelector('.box-inner').classList.remove('flip')
        reset()
    }, 500);
}
function control(){
    let isMatch = firstCard.querySelector('.box-back img').src == secondCard.querySelector('.box-back img').src
    isMatch ? disable() : unflip()
    if (matches == 4) {
        document.getElementsByClassName('container')[0].classList.add('anim')
        document.getElementsByTagName('h1')[0].innerText = "YOU WON!"
        document.getElementsByClassName('desc')[0].innerHTML = "<button class='again'>Play Again</button>"
    }
}
function reset(){
    [isFlipped, lock] = [false, false];
    [firstCard, secondCard] = [null, null]
}
(function shuffle(){
    cards.forEach(card => {
        let rnd = Math.floor(Math.random() * cards.length)
        card.style.order = rnd
    });
})();
cards.forEach(card => { card.addEventListener("click", flip) });