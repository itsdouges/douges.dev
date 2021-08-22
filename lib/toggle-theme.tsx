import { setGlobalTheme } from '@atlaskit/tokens';

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setGlobalTheme(nextTheme);
}

export default toggleTheme;
