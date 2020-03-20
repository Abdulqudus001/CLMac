const calender = document.querySelector('.days');

let target, currentCard;

calender.addEventListener('mouseover', e => {
  if (e.target.classList[0] != 'days'){
    if (e.target.classList[0] == 'day') {
      target = e.target;
    } else {
      target = e.target.parentNode;
    }
    console.log(target);
    currentCard = target.children[2];
    target.classList.add('raised');
  }
});

calender.addEventListener('mouseout', e => {
  if (target) {
    target.classList.remove('raised');
  }
})