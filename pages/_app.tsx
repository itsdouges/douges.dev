import type { AppProps } from 'next/app';
import '@atlaskit/css-reset';
import '@atlaskit/tokens/css/atlassian-light.css';
import '@atlaskit/tokens/css/atlassian-dark.css';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import Blog from 'components/blog';
import components from 'components/blog-mdx-components';

function App({ Component, pageProps, router }: AppProps) {
  const isBlogRoute = router.route.startsWith('/blog');

  return (
    <MDXProvider components={components}>
      <Head>
        <style>{'*{box-sizing:border-box}'}</style>
      </Head>

      {isBlogRoute ? (
        <Blog {...(Component as any).meta}>
          <Component {...pageProps} />
        </Blog>
      ) : (
        <Component {...pageProps} />
      )}
    </MDXProvider>
  );
}

export default App;
