const root = document.getElementById('page-root');
const navLinks = document.querySelectorAll('.main-nav a');

// guarda el HTML inicial de projects
const projectsHTML = root.innerHTML;

function loadPartial(file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      root.innerHTML = html;

      // volver a PROJECTS con los enlaces .js-back
      document.querySelectorAll('.js-back').forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault();
          root.innerHTML = projectsHTML;
        });
      });
    });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.dataset.page;

    if (page === 'about') loadPartial('about.html');
    else if (page === 'contact') loadPartial('contact.html');
    else root.innerHTML = projectsHTML; // proyectos
  });
});
