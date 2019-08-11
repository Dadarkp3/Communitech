const menuHamburguer = document.querySelector('#menu-hamburguer');
const sideBar = document.querySelector('.sidebar');
sideBar.classList.add('closed');

function open() {
  sideBar.classList.remove('closed');
  sideBar.classList.add('open');
}

menuHamburguer.onclick = open;
