export function initNavigation() {
  const toggle = document.getElementById('mobToggle');
  const menu = document.getElementById('mobMenu');
  const close = () => {
    menu?.classList.add('hidden');
    toggle?.setAttribute('aria-expanded', 'false');
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    menu.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
      close();
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', close);

  if (!('IntersectionObserver' in window)) return;
  const links = document.querySelectorAll('header nav a[href^="#"]');
  const observer = new IntersectionObserver(entries => {
    const active = entries.filter(entry => entry.isIntersecting).at(-1);
    if (!active) return;
    links.forEach(link => {
      if (link.hash === `#${active.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -65% 0px' });
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}
