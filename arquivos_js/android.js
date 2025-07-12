window.addEventListener('scroll', () => {
  const header = document.querySelector('.Cabecalho_PgPrincipal');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


