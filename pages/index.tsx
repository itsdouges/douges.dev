/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import Card from 'design-system/card';
import Textfield from 'design-system/textfield';
import Label from 'design-system/label';
import Button from 'design-system/button';
import pkg from '../package.json';

const heroStyles = css({
  height: '60vh',
  minHeight: 400,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
});

const heroTitleStyles = css({
  fontSize: '7rem',
});

const heroDescriptionStyles = css({
  color: token('color.text.mediumEmphasis'),
  fontSize: 18,
});

const groupStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 32,
});

const inlineGroupStyles = css({
  display: 'flex',
  gap: 8,
});

const sectionStyles = css({
  margin: '0 auto',
  maxWidth: 1000,
  padding: '64px 32px',
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
          <h1 css={heroTitleStyles}>
            <strong>beprimed.dev</strong>
          </h1>
          <span css={heroDescriptionStyles}>{pkg.description}</span>
        </div>

        <div css={sunkenStyles}>
          <div css={[groupStyles, sectionStyles]}>
            <Card
              title={'The "at scale" mindset'}
              secondary="Features have many implications when initially written and maintained at scale. Learn the tricks of the trade, the power of no, and how to make features that survive at scale."
            />
            <Card
              title="The art of codebase evolution"
              secondary="Codebases that can evolve rapidly are able to leverage new technology and continue shipping fast. Learn the primed pointers for successful codebase evolution and practical real-world examples to help you get started."
            />
            <Card
              title="Writing lint rules that scale"
              secondary="An in-depth tutorial for writing custom ESLint rules successfully over large codebases with minimal friction."
            />
            <Card
              title="Code transformation doing more with less"
              secondary="A three part series taking you in-depth into what it is, why its useful, and how to leverage it at scale."
            />
            <Card
              title="...and more coming 2021"
              secondary="Leveraging over 10 years of industry experience at scale, join others learning &amp; becoming primed developers."
            />
          </div>
        </div>

        <form css={sectionStyles}>
          <Label htmlFor="email" label="Join the waitlist today" />
          <div css={inlineGroupStyles}>
            <Textfield id="email" placeholder="you@beprimed.dev" />
            <Button>Join</Button>
          </div>
        </form>
      </main>
    </Fragment>
  );
};

export default Home;
