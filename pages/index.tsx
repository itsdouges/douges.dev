/** @jsxImportSource @emotion/react */
import { Fragment, ComponentType } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import pkg from '../package.json';
import Card from 'design-system/card';
import Blog from 'components/blog';
import Heading from 'design-system/heading';
import Stack from 'design-system/stack';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Section from 'design-system/section';
import A from 'design-system/link';
import type { BlogMeta } from 'types/types';
import SignUp from 'components/sign-up';
import { getAllBlogPosts } from 'lib/blog';

const PinnedBlogContent = dynamic(() => import('./blog/writing-eslint-rules-successfully.mdx'));

const heroStyles = css({
  height: '55vh',
  minHeight: 600,
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
  marginTop: 8,
});

const gridListStyles = css({
  display: 'grid',
  gap: 32,
  gridTemplateColumns: '1fr',
  '@media screen and (min-width: 650px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const Home: NextPage<{ latest: BlogMeta; moreBlogs: BlogMeta[] }> = ({ latest, moreBlogs }) => {
  return (
    <Fragment>
      <Head>
        <title>
          {pkg.name} | {pkg.description}
        </title>
        <meta name="description" content={pkg.description} />
        <meta property="og:title" content="beprimed.dev" />
        <meta property="og:description" content={pkg.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@itsdouges" />
        <meta name="twitter:title" content={pkg.name} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:description" content={pkg.description} />
      </Head>

      <main>
        <div css={heroStyles}>
          <Stack gap={8}>
            <Section>
              <Heading level={0}>beprimed&#8203;.dev</Heading>
              <div css={heroDescriptionStyles}>{pkg.description}</div>
            </Section>
          </Stack>
        </div>

        <Section isSeparated>
          <Blog {...latest}>
            <PinnedBlogContent />
          </Blog>
        </Section>

        <Section isSeparated isSunken>
          <Stack gap={2}>
            <Heading level={2}>There&apos;s more where that came from</Heading>
            <div css={gridListStyles}>
              {moreBlogs.map((blog, index) => (
                <Link key={index} href={`/blog/${blog.slug}`} passHref>
                  <A>
                    <Card title={blog.title} secondary={blog.blurb} />
                  </A>
                </Link>
              ))}
            </div>
          </Stack>
        </Section>

        <Section isSeparated>
          <SignUp />
        </Section>
      </main>
    </Fragment>
  );
};

export async function getStaticProps() {
  return getAllBlogPosts();
}

export default Home;
