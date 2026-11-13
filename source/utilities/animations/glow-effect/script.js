let cardsOne = document.querySelectorAll('.containerOne .card');
cardsOne.forEach((card) => {
  card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
  };
});

// --------------------- //
let cardsTwo = document.querySelectorAll('.containerTwo .card');
cardsTwo.forEach((card) => {
  card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
  };
});

console.log('Script for Glow Effect Loaded');
