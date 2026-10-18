import './styles.css';

document.documentElement.classList.add('js');
// Reserve the real fixed-header height when text enlargement wraps the wordmark.
new ResizeObserver(([entry]) => {
  document.documentElement.style.setProperty('--header', `${Math.ceil(entry.target.getBoundingClientRect().height)}px`);
}).observe(document.querySelector('.site-header'));
const dialog = document.querySelector('.mobile-dialog');
const trigger = document.querySelector('.menu-toggle');
trigger.addEventListener('click', () => dialog.showModal());
dialog.querySelector('.menu-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...dialog.querySelectorAll('button, a[href]')];
  const first = controls[0], last = controls.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault(); last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault(); first.focus();
  }
});
dialog.addEventListener('close', () => trigger.focus({ preventScroll: true }));
matchMedia('(min-width: 900px)').addEventListener('change', event => { if (event.matches) dialog.close(); });
document.querySelectorAll('.category-nav a').forEach(link => {
  link.addEventListener('click', () => requestAnimationFrame(() => {
    document.querySelector(`${link.hash} h2`)?.focus({ preventScroll: true });
  }));
});
