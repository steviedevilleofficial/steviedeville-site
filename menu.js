// Seleziono il pulsante toggle e la lista del menu
const toggleBtn = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

// Aggiunge/rimuove la classe "open" alla ul del menu al clic sull'hamburger
toggleBtn.addEventListener('click', () => {
  navUl.classList.toggle('open');
});
