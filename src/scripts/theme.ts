/** The inline head script applies the initial theme before first paint. */
export function initThemeControls() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-set-theme]');
  const update = () => {
    const theme = document.documentElement.dataset.theme;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setTheme === theme)));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f5f4f0' : '#141820');
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    const theme = button.dataset.setTheme!;
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* Theme switching works when storage is unavailable. */ }
    update();
  }));
  window.addEventListener('storage', event => {
    if (event.key !== 'theme' || (event.newValue !== 'light' && event.newValue !== 'dark')) return;
    document.documentElement.dataset.theme = event.newValue;
    update();
  });
  update();
}
