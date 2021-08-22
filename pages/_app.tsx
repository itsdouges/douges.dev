import type { AppProps } from 'next/app';
import '@atlaskit/css-reset';
import '@atlaskit/tokens/css/atlassian-dark.css';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>{'*{box-sizing:border-box}'}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
