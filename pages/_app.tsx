/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import css from 'design-system/css';
import '@atlaskit/css-reset';
import '@atlaskit/tokens/css/atlassian-light.css';
import '@atlaskit/tokens/css/atlassian-dark.css';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import IconButton from 'design-system/icon-button';
import toggleTheme from 'lib/toggle-theme';
import components from 'components/blog-mdx-components';
import { token } from '@atlaskit/tokens';
import LayoutBlog from 'components/layout-blog';
import Tooltip from 'design-system/tooltip';
import Box from 'design-system/box';
import DropdownMenu, { MenuItem } from 'design-system/dropdown-menu';
import Inline from 'design-system/inline';

const styles = css({
  header: {
    borderTop: `8px solid ${token('color.background.boldBrand.resting')}`,
  },
});

const themeHacks = `
:root, html[data-theme="light"] {
  --overlay-hover: rgba(0, 0, 0, 0.05) !important;
  --overlay-pressed: rgba(0, 0, 0, 0.1) !important;
}

html[data-theme="dark"] {
  --overlay-hover: rgba(255, 255, 255, 0.05) !important;
  --overlay-pressed: rgba(255, 255, 255, 0.1) !important;
}
`;

function App({ Component, pageProps, router }: AppProps) {
  const isBlogRoute = router.route.startsWith('/blog');

  return (
    <MDXProvider components={components}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{var p=/theme=(.+;?)/.exec(document.cookie);if(p) document.documentElement.setAttribute('data-theme',p[1])}catch(e){}})()`,
          }}
        />
        <style>
          {'*{scrollbar-color:var(--border-neutral) var(--background-default)}::-webkit-scrollbar{background-color:var(--background-default);width:10px}::-webkit-scrollbar-thumb{background-color:var(--border-neutral);border-radius:30px}' +
            themeHacks}
        </style>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏒</text></svg>"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@itsdouges" />
        <script data-respect-dnt async src="https://cdn.splitbee.io/sb.js" />
      </Head>

      <header css={styles.header}>
        <Box as="nav" padding="large">
          <Inline>
            {isBlogRoute && (
              <IconButton icon="←" label="Go home" onClick={() => router.push('/')} />
            )}
            <Inline justify="middle" marginLeft="auto" gap="regular">
              <DropdownMenu trigger="Links">
                <MenuItem href="https://twitter.com/itsdouges" secondary="@itsdouges">
                  Twitter
                </MenuItem>
                <MenuItem href="https://github.com/madou/douges.dev" secondary="madou/douges.dev">
                  Github
                </MenuItem>
              </DropdownMenu>
              <IconButton icon="☾" label="Switch theme" onClick={toggleTheme} />
            </Inline>
          </Inline>
        </Box>
      </header>

      {isBlogRoute ? (
        <LayoutBlog blog={(Component as any).meta}>
          <Component {...pageProps} />
        </LayoutBlog>
      ) : (
        <Component {...pageProps} />
      )}
    </MDXProvider>
  );
}

export default App;
