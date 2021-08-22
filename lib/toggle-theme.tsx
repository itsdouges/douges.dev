import { setGlobalTheme } from '@atlaskit/tokens';

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  setGlobalTheme(nextTheme);

  document.cookie = `theme=${nextTheme};`;
}

export function setThemeOnLoad() {
  if (typeof window === 'undefined') {
    return;
  }

  const theme = /theme=(light|dark)/.exec(document.cookie);
  let themeValue: 'dark' | 'light' = 'dark';

  if (theme) {
    themeValue = theme[1] as 'dark' | 'light';
  }

  const element = document.documentElement;
  element.setAttribute('data-theme', themeValue);
}

export default toggleTheme;
