// JavaScript para alternar o menu hambúrguer
const menuHamburguer = document.querySelector('.menu-hamburguer');

menuHamburguer.addEventListener('click', toggleMenu);

function toggleMenu() {
  const navResponsive = document.querySelector('.nav-responsive');
  menuHamburguer.classList.toggle('change');

  if (menuHamburguer.classList.contains('change')) {
    navResponsive.style.display = 'flex';
  } else {
    navResponsive.style.display = 'none';
  }
}
