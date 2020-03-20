const sidebar = document.querySelector('.sidebar');
const cover = document.querySelector('.cover');
const icons = document.querySelector('.icons');
const root = document.documentElement;

const toggleNav = () => {
  sidebar.style.display = 'flex';
  cover.style.display = 'block';
  root.style.setProperty('--sidebar', 'rgba(255, 255, 252, 0.99)');
}

cover.addEventListener('click', () => {
  root.style.setProperty('--sidebar', '#f8f8fc');
  sidebar.style.display = 'none';
  cover.style.display = 'none';
})

let imageSrc = ''

const getDarkImage = path => {
  const fileName = path.split('/')[path.split('/').length - 1];
  return getDarkImageName(fileName);
}

const getDarkImageName = name => {
  const fileName = name.split('.')[0];
  return `${fileName}-dark`;
}

const removeClicked = () => {
  [...icons.children].forEach(el => {
    el.childNodes[3].classList.remove('hovered');
    const img = el.childNodes[1].childNodes[1];
    if (img.src.toString().includes('dark')) {
      img.src = imageSrc;
      imageSrc = '';
    }
  })
}

const addClickToFirst = (() => {
  const el = [...icons.children][0];
  el.childNodes[3].classList.add('hovered');
  const img = el.childNodes[1].childNodes[1];
  imageSrc = img.src;
  img.src = `./assets/icons/dark/${getDarkImage(imageSrc)}.svg`;
})()

const handleClick = (e) => {
  removeClicked();

  if (e.target.nodeName == 'A') {
    const { src } = e.target.childNodes[1];
    imageSrc = src;
    e.target.childNodes[1].setAttribute('src', `./assets/icons/dark/${getDarkImage(src)}.svg`);

    const div = e.target.nextElementSibling;
    div.classList.toggle('hovered');
  } else if (e.target.nodeName == 'IMG') {
    const { src } = e.target;

    imageSrc = src;
    e.target.setAttribute('src', `./assets/icons/dark/${getDarkImage(src)}.svg`);

    const div = e.target.parentNode.nextElementSibling
    div.classList.toggle('hovered');
  }
}

icons.addEventListener('click', handleClick);