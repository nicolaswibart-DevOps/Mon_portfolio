export function initContact() {
  document.getElementById('contactForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Contact Portfolio : ${data.get('name')}`);
    const body = encodeURIComponent(`De: ${data.get('name')} (${data.get('email')})\n\n${data.get('message')}`);
    window.location.href = `mailto:Nicolas.wibart@gmail.com?subject=${subject}&body=${body}`;
  });
}
