const sidebar = document.querySelector('.sidebar');
const cover = document.querySelector('.cover');

const toggleNav = () => {
  sidebar.style.display = 'flex';
  cover.style.display = 'block';
}

cover.addEventListener('click', () => {
  sidebar.style.display = 'none';
  cover.style.display = 'none';
})