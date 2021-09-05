/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import { css } from '@emotion/react';
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

const navigationBarStyles = css({
  position: 'relative',
  padding: '16px 16px 0',
  display: 'flex',
  '> :last-child': {
    marginLeft: 'auto',
  },
});

const headerStyles = css({
  borderTop: `8px solid ${token('color.background.boldBrand.resting')}`,
});

function App({ Component, pageProps, router }: AppProps) {
  const isBlogRoute = router.route.startsWith('/blog');

  return (
    <MDXProvider components={components}>
      <Head>
        <style>
          {
            '*{box-sizing:border-box;scrollbar-color:var(--background-boldNeutral-resting) var(--background-subtleNeutral-resting)}'
          }
        </style>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <meta key="og:type" property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@itsdouges" />
      </Head>

      <header css={headerStyles}>
        <nav css={navigationBarStyles}>
          {isBlogRoute && <IconButton icon="←" label="Go home" onClick={() => router.push('/')} />}
          <IconButton icon="☾" label="Switch theme" onClick={toggleTheme} />
        </nav>
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
