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
import dynamic from 'next/dynamic';
import { promises as fs } from 'fs';
import type { BlogMeta } from '../types/types';

const LatestBlog = dynamic(() => import('./blog/build-time-code-transformation.mdx'));

const heroStyles = css({
  borderTop: `8px solid ${token('color.background.boldBrand.resting')}`,
  height: '60vh',
  minHeight: 650,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  borderBottom: `2px solid ${token('color.border.neutral')}`,
});

const heroDescriptionStyles = css({
  color: token('color.text.mediumEmphasis'),
  fontSize: 18,
});

const gridListStyles = css({
  display: 'grid',
  gap: 32,
  gridTemplateColumns: '1fr',
  '@media screen and (min-width: 650px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const stickyButtonStyles = css({
  position: 'absolute',
  top: 40,
  right: 32,
});

const sectionStyles = css({
  margin: '0 auto',
  maxWidth: 900,
  padding: 16,
  width: '100%',
});

const separatedSectionStyles = css({
  paddingTop: '128px',
  paddingBottom: '128px',
});

const sunkenStyles = css({
  backgroundColor: token('color.background.sunken'),
});

const Home: NextPage<{ latest: BlogMeta; moreBlogs: BlogMeta[] }> = ({ latest, moreBlogs }) => {
  return (
    <Fragment>
      <Head>
        <title>
          {pkg.name} | {pkg.description}
        </title>
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
        <meta name="twitter:title" content={pkg.name} />
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
              <Heading level={0}>beprimed&#8203;.dev</Heading>
              <span css={heroDescriptionStyles}>{pkg.description}</span>
            </div>

            <div css={sectionStyles}>
              <SignUp />
            </div>
          </Stack>
        </div>

        <div css={[sectionStyles, separatedSectionStyles]}>
          <Blog {...latest}>
            <LatestBlog />
          </Blog>
        </div>

        <div css={sunkenStyles}>
          <div css={[sectionStyles, separatedSectionStyles]}>
            <Stack gap={2}>
              <Heading level={2}>There&apos;s more where that came from</Heading>
              <div css={gridListStyles}>
                {moreBlogs.map((blog, index) => (
                  <Card key={index} title={blog.title} secondary={blog.blurb} />
                ))}
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

export async function getStaticProps() {
  const allBlogs = await fs.readdir(process.cwd() + '/pages/blog');
  const mdxBlogs = allBlogs.map((name) => require(`./blog/${name}`).default);

  mdxBlogs.sort((a, b) => b.order - a.order).reverse();

  const latest = mdxBlogs[0].meta;
  const moreBlogs = mdxBlogs.slice(1).map((blog) => blog.meta);

  return Promise.resolve({ props: { latest, moreBlogs } });
}

export default Home;
