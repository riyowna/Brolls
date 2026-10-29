const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

function closeNavigation() {
  if (!toggle || !links) return;
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}

if (toggle && links) {
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  links.addEventListener('click', (event) => event.stopPropagation());
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));
  document.addEventListener('click', closeNavigation);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
      toggle.focus();
    }
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
