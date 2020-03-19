const sidebar = document.querySelector('.sidebar');
const cover = document.querySelector('.cover');
const icons = document.querySelector('.icons');

const toggleNav = () => {
  sidebar.style.display = 'flex';
  cover.style.display = 'block';
}

cover.addEventListener('click', () => {
  sidebar.style.display = 'none';
  cover.style.display = 'none';
})

let imageSrc = ''

icons.addEventListener('mouseover', e => {
  // console.log(e.target.nodeName);
  if (e.target.nodeName == 'A') {
    const { src } = e.target.childNodes[1];
    imageSrc = src;
    e.target.childNodes[1].setAttribute('src', `./assets/icons/dark/${getDarkImage(src)}.svg`);
  } else if (e.target.nodeName == 'IMG') {
    const { src } = e.target;
    imageSrc = src;
    e.target.setAttribute('src', `./assets/icons/dark/${getDarkImage(src)}.svg`);
  }
});

icons.addEventListener('mouseout', e => {
  if (e.target.nodeName == 'A') {
    e.target.childNodes[1].setAttribute('src', imageSrc);
  } else if (e.target.nodeName == 'IMG') {
    e.target.setAttribute('src', imageSrc);
  }
});

const getDarkImage = path => {
  const fileName = path.split('/')[path.split('/').length - 1];
  return getDarkImageName(fileName);
}

const getDarkImageName = name => {
  const fileName = name.split('.')[0];
  return `${fileName}-dark`;
}