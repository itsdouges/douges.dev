/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import { css } from '@emotion/react';
import { Fragment } from 'react';
import '@atlaskit/css-reset';
import '@atlaskit/tokens/css/atlassian-light.css';
import '@atlaskit/tokens/css/atlassian-dark.css';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import Blog from 'components/blog';
import IconButton from 'design-system/icon-button';
import Section from 'design-system/section';
import toggleTheme from 'lib/toggle-theme';
import components from 'components/blog-mdx-components';
import SignUp from 'components/sign-up';
import { token } from '@atlaskit/tokens';

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
        <style>{'*{box-sizing:border-box}'}</style>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
      </Head>

      <header css={headerStyles}>
        <nav css={navigationBarStyles}>
          {isBlogRoute && <IconButton icon="←" label="Go home" onClick={() => router.push('/')} />}
          <IconButton icon="☾" label="Switch theme" onClick={toggleTheme} />
        </nav>
      </header>

      {isBlogRoute ? (
        <Fragment>
          <Section isSeparated>
            <Blog {...(Component as any).meta}>
              <Component {...pageProps} />
            </Blog>
          </Section>

          <Section isSunken isSeparated>
            <SignUp />
          </Section>
        </Fragment>
      ) : (
        <Component {...pageProps} />
      )}
    </MDXProvider>
  );
}

export default App;
