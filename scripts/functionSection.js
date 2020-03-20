const functionsCover = document.querySelector('.function-cover');
const functionsDiv = document.querySelector('.functions');

functionsCover.addEventListener('click', (e) => {
  functionsDiv.style.maxWidth = 'calc(100% - 100%)';
  functionsDiv.style.left = '100%';
  e.target.style.display = 'none';
});

functionsDiv.addEventListener('click', (e) => {
  if (e.target.style.left === '100%') {
    e.target.style.maxWidth = 'calc(100% - 40px)';
    e.target.style.left = '40px';
    functionsCover.style.display = 'block';
  } else {
    functionsCover.style.display = 'none';
    e.target.style.maxWidth = 'calc(100% - 100%)';
    e.target.style.left = '100%';
  }
})