/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import { css } from '@emotion/react';
import '@atlaskit/css-reset';
import '@atlaskit/tokens/css/atlassian-light.css';
import '@atlaskit/tokens/css/atlassian-dark.css';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import Blog from 'components/blog';
import Button from 'design-system/button';
import Section from 'design-system/section';
import toggleTheme from 'lib/toggle-theme';
import components from 'components/blog-mdx-components';

const stickyButtonStyles = css({
  position: 'absolute',
  top: 40,
  right: 32,
});

function App({ Component, pageProps, router }: AppProps) {
  const isBlogRoute = router.route.startsWith('/blog');

  return (
    <MDXProvider components={components}>
      <Head>
        <style>{'*{box-sizing:border-box}'}</style>
      </Head>

      <div css={stickyButtonStyles}>
        <Button appearance="subtle" onClick={toggleTheme}>
          ☾
        </Button>
      </div>

      {isBlogRoute ? (
        <Section>
          <Blog {...(Component as any).meta}>
            <Component {...pageProps} />
          </Blog>
        </Section>
      ) : (
        <Component {...pageProps} />
      )}
    </MDXProvider>
  );
}

export default App;
