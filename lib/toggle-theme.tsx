import { setGlobalTheme } from '@atlaskit/tokens';

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  setGlobalTheme(nextTheme);

  document.cookie = `theme=${nextTheme};expires=Fri, 31 Dec 9999 23:59:59 GMT;`;
}

export default toggleTheme;
