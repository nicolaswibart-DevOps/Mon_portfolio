export function initReveals() {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const elements = document.querySelectorAll('.reveal');
  const reveal = element => {
    element.classList.add('is-in');
    element.classList.remove('reveal-pending');
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      // Keep pending during the transition, then release compositing state.
      target.classList.add('is-in');
      target.addEventListener('transitionend', () => reveal(target), { once: true });
      observer.unobserve(target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
  elements.forEach(element => {
    element.classList.add('reveal-pending');
    observer.observe(element);
  });
  motion.addEventListener('change', event => {
    if (event.matches) {
      observer.disconnect();
      elements.forEach(reveal);
    }
  });
}
