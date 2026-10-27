export function initProjects() {
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.proj-card');
  buttons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => {
      buttons.forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      cards.forEach(card => {
        card.hidden = button.dataset.filter !== 'all' && card.dataset.cat !== button.dataset.filter;
      });
    });
  });
}
