document.addEventListener('DOMContentLoaded', () => {
  window.renderShell(document.body.dataset.page || '');
  if (window.bindAddButtons) window.bindAddButtons();
});
