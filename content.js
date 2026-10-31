window.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || !e.isTrusted) return;
  e.preventDefault();
  e.stopImmediatePropagation();
  (document.activeElement || document.body).dispatchEvent(
    new KeyboardEvent('keydown', {
      key: '[',
      code: 'BracketLeft',
      keyCode: 219,
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
      composed: true,
    })
  );
}, true);
