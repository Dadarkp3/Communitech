const menuHamburguer = document.querySelector('#menu-hamburguer');
const sideBar = document.querySelector('.sidebar');
const blocked = document.querySelector('#blocked');
sideBar.classList.add('closed');

function open() {
  sideBar.classList.remove('closed');
  sideBar.classList.add('open');
  blocked.classList.add('blocked');
}

function closed() {
  sideBar.classList.remove('open');
  sideBar.classList.add('closed');
  blocked.classList.remove('blocked');
}

menuHamburguer.onclick = open;
blocked.onclick = closed;
