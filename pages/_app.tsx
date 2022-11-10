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
import Button from 'design-system/button';
import LayoutBlog from 'components/layout-blog';
import Box from 'design-system/box';
import DropdownMenu, { MenuItem } from 'design-system/dropdown-menu';
import Inline from 'design-system/inline';

const styles = css({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
});

const themeHacks = `
:root, html[data-theme="light"] {
  --background-inverse: rgba(0, 0, 0, 0.1);
  --background-warning-inverse: rgba(255, 255, 255, 0.1);
  --background-interaction-hovered: rgba(0, 0, 0, 0.1);
  --background-interaction-pressed: rgba(0, 0, 0, 0.2);
  --background-interaction-inverse-hovered: rgba(255, 255, 255, 0.1);
  --background-interaction-inverse-pressed: rgba(255, 255, 255, 0.2);
}

html[data-theme="dark"] {
  --background-inverse: rgba(255, 255, 255, 0.1);
  --background-warning-inverse: rgba(255, 255, 255, 0.1);
  --background-interaction-hovered: rgba(255, 255, 255, 0.1);
  --background-interaction-pressed: rgba(255, 255, 255, 0.2);
  --background-interaction-inverse-hovered: rgba(255, 255, 255, 0.1);
  --background-interaction-inverse-pressed: rgba(255, 255, 255, 0.2);
}
`;

function App({ Component, pageProps, router }: AppProps) {
  const isBlogRoute = router.route.startsWith('/blog');
  const isPlayground = router.route.startsWith('/playground');
  const isHome = router.route === '/';

  return (
    <MDXProvider components={components}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{var p=/theme=(.+;?)/.exec(document.cookie);if(p) document.documentElement.setAttribute('data-theme',p[1].split(';')[0])}catch(e){}})()`,
          }}
        />
        <style>
          {'*{margin:0;scrollbar-color:var(--border-neutral) var(--background-default)}::-webkit-scrollbar{background-color:var(--background-default);width:10px}::-webkit-scrollbar-thumb{background-color:var(--border-neutral);border-radius:30px}' +
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

      <Box
        as="header"
        background={isHome ? 'transparent' : 'inherit'}
        css={isPlayground || styles.header}>
        <Box as="nav" padding="large">
          <Inline>
            {isBlogRoute && (
              <IconButton icon="←" label="Go home" onClick={() => router.push('/')} />
            )}
            <Inline blockAlign="middle" width="full" inlineAlign="end" gap="regular">
              {isPlayground || (
                <DropdownMenu
                  trigger={(props) => (
                    <Button appearance="subtle" {...props}>
                      Links
                    </Button>
                  )}>
                  <MenuItem href="https://twitter.com/itsdouges" secondary="@itsdouges">
                    Twitter
                  </MenuItem>
                  <MenuItem href="https://github.com/madou/douges.dev" secondary="madou/douges.dev">
                    Github
                  </MenuItem>
                </DropdownMenu>
              )}
              <IconButton icon="☾" label="Switch theme" onClick={toggleTheme} />
            </Inline>
          </Inline>
        </Box>
      </Box>

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
