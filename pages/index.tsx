/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import Button from 'design-system/button';
import pkg from '../package.json';
import SignUp from 'components/sign-up';
import toggleTheme from '../lib/toggle-theme';
import Card from 'design-system/card';
import Blog from 'components/blog';
import Heading from 'design-system/heading';
import Stack from 'design-system/stack';
import LatestBlog from './blog/build-time-code-transformation.mdx';

const heroStyles = css({
  borderTop: `8px solid ${token('color.background.boldBrand.resting')}`,
  height: '60vh',
  minHeight: 400,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  borderBottom: `2px solid ${token('color.border.neutral')}`,
});

const heroTitleStyles = css({
  fontSize: 112,
});

const heroDescriptionStyles = css({
  color: token('color.text.mediumEmphasis'),
  fontSize: 18,
});

const gridListStyles = css({
  display: 'grid',
  gap: 32,
  gridTemplateColumns: '1fr 1fr',
});

const stickyButtonStyles = css({
  position: 'absolute',
  top: 32,
  right: 32,
});

const sectionStyles = css({
  margin: '0 auto',
  maxWidth: 840,
  width: '100%',
});

const separatedSectionStyles = css({
  paddingTop: '128px',
  paddingBottom: '128px',
});

const sunkenStyles = css({
  backgroundColor: token('color.background.sunken'),
});

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>beprimed.dev | {pkg.description}</title>
        <meta name="description" content={pkg.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="beprimed.dev" />
        <meta property="og:description" content={pkg.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:image:alt" content="" />
        <meta property="og:image:width" content="" />
        <meta property="og:image:height" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@itsdouges" />
        <meta name="twitter:title" content="beprimed.dev" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:description" content={pkg.description} />
      </Head>

      <main>
        <div css={heroStyles}>
          <Stack gap={8}>
            <div css={stickyButtonStyles}>
              <Button appearance="subtle" onClick={toggleTheme}>
                ☾
              </Button>
            </div>

            <div css={sectionStyles}>
              <h1 css={heroTitleStyles}>
                <strong>beprimed.dev</strong>
              </h1>
              <span css={heroDescriptionStyles}>{pkg.description}</span>
            </div>

            <div css={sectionStyles}>
              <SignUp />
            </div>
          </Stack>
        </div>

        <div css={[sectionStyles, separatedSectionStyles]}>
          <Blog {...LatestBlog.meta}>
            <LatestBlog />
          </Blog>
        </div>

        <div css={sunkenStyles}>
          <div css={[sectionStyles, separatedSectionStyles]}>
            <Stack gap={2}>
              <Heading level={2}>There&apos;s more where that came from</Heading>
              <div css={gridListStyles}>
                <Card
                  title="Evolving with Codemods"
                  secondary="Access the power of codemods to leverage codebase evolutions at scale. Learn what codemods are, how they can be used to succes, and what resources are available."
                />
                <Card
                  title={'The "at scale" mindset'}
                  secondary="Features have many implications when initially written and maintained at scale. Learn the tricks of the trade, the power of no, and how to make features that survive at scale."
                />
              </div>
            </Stack>
          </div>
        </div>

        <div css={[sectionStyles, separatedSectionStyles]}>
          <SignUp />
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
