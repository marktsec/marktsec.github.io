document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelectorAll('.cat-btn'),c=document.querySelectorAll('.article-card');b.forEach(x=>x.addEventListener('click',()=>{const f=x.dataset.filter;b.forEach(y=>y.classList.remove('active'));x.classList.add('active');c.forEach(y=>{const cats=(y.dataset.categories||'').split(/\s+/);y.style.display=f==='all'||cats.includes(f)?'':'none'})}))});

/* Mobile navigation */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('primary-navigation');

  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '☰ MENU';
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.innerHTML = isOpen ? '✕ CLOSE' : '☰ MENU';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
});
