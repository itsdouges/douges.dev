import type { AppProps } from 'next/app';
import '@atlaskit/css-reset';
import '@atlaskit/tokens/css/atlassian-light.css';
import '@atlaskit/tokens/css/atlassian-dark.css';
import Head from 'next/head';
import { setThemeOnLoad } from '../lib/toggle-theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>{'*{box-sizing:border-box}'}</style>
        <script>
          {'(function(){'}
          {setThemeOnLoad.toString()}
          {'setThemeOnLoad()'}
          {'}())'}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
